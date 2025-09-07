import type {
  Reporter,
  FullConfig,
  Suite,
  TestCase,
  TestResult,
  FullResult,
  TestError,
  TestStep
} from '@playwright/test/reporter';

import { CustomApiIntegration, TestCaseResult, TestRun, TestStepResult } from 'api';
import { PlaywrightTestReporterOptions, PlaywrightTestReporterProps } from './types';
import { detectBrowser, detectOS, findCaseIds, generateHtmlReport, logger, storeReport, stripAnsiCodes } from 'utils';

import 'dotenv/config';

export class PlaywrightTestReporter implements Reporter {
  private options: PlaywrightTestReporterOptions;
  private testResults: TestCaseResult[] = [];
  private runData: TestRun;
  private stats = { passed: 0, failed: 0, skipped: 0 };

  constructor(props: PlaywrightTestReporterProps = {}) {
    const config = {
      host: process.env['REPORTER_HOST'] || "",
      apiKey: process.env['REPORTER_API_KEY'] || "",
      runId: process.env['REPORTER_RUN_ID'] || "",
      runName: process.env['REPORTER_RUN_NAME'] || "",
      outputFolder: "test-results/reporter",
      html: false,
    }

    this.options = {
      ...config,
      ...props,
      api: new CustomApiIntegration(config.host, config.apiKey)
    };

    const osInfo = detectOS();

    this.runData = {
      id: this.options.runId || "",
      name: this.options.runName,
      startTime: new Date().toISOString(),
      totalTests: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      os: osInfo,
    };
  }

  async onBegin(_config: FullConfig, suite: Suite) {
    this.runData.totalTests = suite.allTests().length;
    this.runData.testRunner = {
      name: "playwright",
      version: _config.version,
    };

    logger(`Starting Test Run`);

    if (!this.options.runId && this.options.api.createTestRun) {
      try {
        logger("No Existing 'RUN_ID' provided by user");

        const run = await this.options.api.createTestRun(this.runData);

        this.runData.id = run.id;

        logger(`Created test run: ${this.runData.id}`);
      } catch (error) {
        logger(`Failed to create test run: ${error}`);
      }
    } else {
      logger(`Using existing 'RUN_ID' provided by user: ${this.options.runId}`);
    }
  }

  onTestBegin(test: TestCase) {
    const browserInfo = this.getBrowserInfo(test);
    const browserText = browserInfo.name ? `[${browserInfo.name}]` : '';

    logger(`${browserText} STARTING: ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const browserInfo = this.getBrowserInfo(test);
    const browserText = browserInfo.name ? `[${browserInfo.name}]` : '';

    logger(`${browserText} ${result.status.toUpperCase()}: ${test.title} (${result.duration}ms)`);

    if (result.errors.length > 0) {
      logger(`Error: ${result.errors[0]?.message}`);
    }

    this.updateStats(result.status);

    const caseIds = findCaseIds(test.title);

    if (caseIds.length === 0) {
      logger(`No case ID found: ${test.title}`);

      return;
    }

    caseIds.forEach(caseId => {
      const testResult: TestCaseResult = {
        caseId,
        title: test.title,
        status: result.status,
        duration: result.duration,
        comment: this.createComment(result),
        ...(browserInfo.name && { browser: { name: browserInfo.name, version: "", path: "" } }),
        ...(result.errors[0] && {
          error: {
            message: stripAnsiCodes(result?.errors[0]?.message || '') || '',
            ...(result?.errors[0]?.stack && { stack: stripAnsiCodes(result?.errors[0]?.stack || '') }),
          }
        }),
        startTime: result.startTime.toISOString(),
        endTime: new Date().toISOString(),
        steps: this.convertSteps(result.steps),
        attachments: result.attachments.map(attachment => ({
          type: attachment.name == "screenshot" ? "image" : attachment.name,
          path: attachment.path || "",
          contentType: attachment.contentType || "",
        })),
      };

      this.testResults.push(testResult);
    });
  }

  async onEnd(result: FullResult) {
    const duration = result.duration;

    this.runData.endTime = new Date().toISOString();
    this.runData.duration = duration;
    this.runData.passed = this.stats.passed;
    this.runData.failed = this.stats.failed;
    this.runData.skipped = this.stats.skipped;

    logger(`Test Run Completed: ${this.runData.id} (${duration}ms), Status: ${result.status}`);
    logger(`Results: ${this.stats.passed} passed, ${this.stats.failed} failed, ${this.stats.skipped} skipped`);

    await this.updateResults();

    if (this.options.outputFolder) {
      this.writeReport();
    }
  }

  onError(error: TestError) {
    logger(`Reporter Error: ${error.message}`);
  }

  private updateStats(status: string) {
    if (status === 'passed') this.stats.passed++;
    else if (status === 'failed' || status === 'timedOut' || status === 'interrupted') this.stats.failed++;
    else if (status === 'skipped') this.stats.skipped++;
  }

  private getBrowserInfo(test: TestCase): { name?: string } {
    let currentSuite: Suite | undefined = test.parent;

    while (currentSuite) {
      const project = currentSuite.project();

      if (project) {
        const userAgent = project?.use?.userAgent;

        const browser = userAgent ? detectBrowser(userAgent) : "";

        return {
          ...(browser && { name: browser, version: "", path: "" }),
        };
      }

      currentSuite = currentSuite.parent;
    }

    return {};
  }

  private createComment(result: TestResult): string {
    if (result.status == "failed" || result.status == "timedOut" || result.status == "interrupted") {
      return "Test Status is " + result.status + " " + stripAnsiCodes(result.error?.message || '')
    }
    else {
      return "Test Passed within " + result.duration + " ms"
    }
  }

  private async updateResults() {
    try {
      if (this.options.api.updateTestResults) {
        await this.options.api.updateTestResults(this.runData.id, this.testResults);
      }

      logger('Updated results successfully');
    } catch (error) {
      logger(`Update failed: ${error}`);
    }
  }

  private writeReport() {
    if (!this.options.outputFolder) return;

    const report = {
      testRun: this.runData,
      results: this.testResults,
    };

    try {
      const { path } = storeReport(report, this.options.outputFolder);
      logger(`Report saved: ${path}`);
    } catch (error) {
      logger(`Save failed: ${error}`);
    }

    if (this.options.html) {
      try {
        const { path } = generateHtmlReport(report, this.options.outputFolder);
        logger(`HTML report saved: ${path}`);
      } catch (error) {
        logger(`Generate HTML report failed: ${error}`);
      }
    }
  }

  private convertSteps(steps: TestStep[]): TestStepResult[] {
    return steps.map(step => ({
      title: step.title,
      category: step.category,
      duration: step.duration,
      startTime: step.startTime.toISOString(),
      endTime: new Date(step.startTime.getTime() + step.duration).toISOString(),
      status: step.error?.message ? "failed" : "passed",
      error: step.error ? {
        message: stripAnsiCodes(step?.error?.message || '') || '',
        stack: stripAnsiCodes(step?.error?.stack || '') || '',
      } : null,
      location: step.location ? {
        file: step.location.file,
        line: step.location.line,
        column: step.location.column,
      } : null,
    }));
  }

  getRunData(): TestRun {
    return this.runData;
  }

  getTestResults(): TestCaseResult[] {
    return this.testResults;
  }
}

export default PlaywrightTestReporter;