import { CustomApiIntegration, TestBrowser, TestCaseResult, TestRun } from 'api';
import { CypressTestReporterOptions, RunResult, Spec, BeforeRunDetails, ScreenshotDetails, CypressRunResult } from './types';
import { logger, findCaseIds, storeReport, stripAnsiCodes, generateHtmlReport } from 'utils';

import 'dotenv/config';

function CypressTestReporter(on: any, options: any = {}) {
  const config = {
    host: process.env.REPORTER_HOST || "",
    apiKey: process.env.REPORTER_API_KEY || "",
    runId: process.env.REPORTER_RUN_ID || "",
    runName: process.env.REPORTER_RUN_NAME || "",
    outputFolder: "test-results/reporter",
    html: false,
    ...options
  };

  const reporterOptions: CypressTestReporterOptions = {
    ...config,
    api: new CustomApiIntegration(config.host, config.apiKey)
  };

  const testResults: TestCaseResult[] = [];
  let runStartTime: Date | null = null;

  const runData: TestRun = {
    id: reporterOptions.runId || "",
    name: reporterOptions.runName,
    startTime: new Date().toISOString(),
    totalTests: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
  };

  function createComment(status: string, duration: number, error?: any): string {
    if (status === "failed") {
      return "Test Status is " + status + " " + JSON.stringify(error);
    } else {
      return "Test Passed within " + duration + " ms";
    }
  }

  function normalizeForComparison(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function getMatchingScreenshots(screenshots: any[], testTitle: string): any[] {
    const normalizedTestTitle = normalizeForComparison(testTitle);

    return screenshots.filter(screenshot => {
      const screenshotName = screenshot.name || screenshot.path;
      const normalizedScreenshotName = normalizeForComparison(screenshotName);

      return normalizedScreenshotName.includes(normalizedTestTitle);
    });
  }

  function processSpecTestResult(specRunResult: RunResult, browser: TestBrowser) {
    specRunResult.tests.forEach(test => {
      const testTitle = test.title.join(' ');
      const status = test.state as 'passed' | 'failed' | 'skipped';
      const duration = test.duration;

      logger(`${status.toUpperCase()}: ${testTitle} (${duration}ms)`);

      if (test.displayError) {
        logger(`Error: ${test.displayError}`);
      }

      const caseIds = findCaseIds(testTitle);

      if (caseIds.length === 0) {
        logger(`No case ID found: ${testTitle}`);
        return;
      }

      const testStartTime = specRunResult.stats.startedAt;

      caseIds.forEach(caseId => {
        const attachments = status === 'failed'
          ? getMatchingScreenshots(specRunResult.screenshots, testTitle)
            .map(screenshot => ({
              type: 'image',
              path: screenshot.path,
              contentType: 'image/png',
            }))
          : [];

        if (status === 'failed' && specRunResult.video) {
          attachments.push({
            type: 'video',
            path: specRunResult.video,
            contentType: 'video/mp4',
          });
        }

        const testResult: TestCaseResult = {
          caseId,
          title: testTitle,
          status,
          duration,
          comment: createComment(status, duration, test.displayError ? { message: stripAnsiCodes(test.displayError) } : undefined),
          ...(test.displayError && {
            error: {
              message: stripAnsiCodes(test.displayError),
            }
          }),
          startTime: testStartTime,
          endTime: specRunResult.stats.endedAt,
          attachments,
          steps: [],
          browser,
          spec: specRunResult.spec.relative,
        };

        testResults.push(testResult);
      });
    });
  }

  async function updateResults() {
    try {
      if (reporterOptions.api.updateTestResults) {
        await reporterOptions.api.updateTestResults(runData.id, testResults);
      }

      logger('Updated results successfully');
    } catch (error) {
      logger(`Update failed: ${error}`);
    }
  }

  function writeReport() {
    if (!reporterOptions.outputFolder) return;

    const report = {
      testRun: runData,
      results: testResults,
    };

    try {
      const { path } = storeReport(report, reporterOptions.outputFolder);

      logger(`Report saved: ${path}`);
    } catch (error) {
      logger(`Save failed: ${error}`);
    }

    if (reporterOptions.html) {
      try {
        const { path } = generateHtmlReport(report, reporterOptions.outputFolder);
        logger(`HTML report saved: ${path}`);
      } catch (error) {
        logger(`Generate HTML report failed: ${error}`);
      }
    }
  }

  on('before:run', async (details: BeforeRunDetails) => {
    runStartTime = new Date();
    runData.startTime = runStartTime.toISOString();

    runData.testRunner = {
      name: "cypress",
      version: details.cypressVersion,
    };
    runData.specs = details.specs?.map(spec => spec.relative) || [];

    logger(`Starting Test Run with Cypress ${details.cypressVersion}`);
    logger(`Browser: ${details.browser?.name} ${details.browser?.version}`);
    logger(`Specs to run: ${runData.specs.length}`);

    if (!reporterOptions.runId && reporterOptions.api.createTestRun) {
      try {
        logger("No Existing 'RUN_ID' provided by user");

        const run = await reporterOptions.api.createTestRun(runData);
        runData.id = run.id;

        logger(`Created test run: ${runData.id}`);
      } catch (error) {
        throw new Error(`Failed to create test run: ${error}`);
      }
    } else {
      logger(`Using existing 'RUN_ID' provided by user: ${reporterOptions.runId}`);
    }
  });

  on('before:spec', (spec: Spec) => {
    logger(`Starting spec: ${spec.relative}`);
  });

  // on('after:spec', (spec: Spec, results: RunResult) => {
  //   logger(`Completed spec: ${spec.relative}`);
  //   logger(`Spec stats: ${results.stats.passes} passed, ${results.stats.failures} failed, ${results.stats.pending} pending`);

  //   specResults.set(spec.relative, results);
  //   processSpecTestResult(spec, results);
  // });

  on('after:screenshot', (details: ScreenshotDetails) => {
    logger(`Screenshot taken: ${details.name} at ${details.path}`);

    if (details.testFailure) {
      logger(`Screenshot for failed test: ${details.specName}`);
    }

    return { path: details.path };
  });

  on('after:run', async (result: CypressRunResult) => {
    const endTime = new Date();
    const duration = runStartTime ? endTime.getTime() - runStartTime.getTime() : result.totalDuration;
    const stats = {
      duration: result.totalDuration,
      passed: result.totalPassed,
      failed: result.totalFailed,
      skipped: result.totalSkipped,
      totalTests: result.totalTests,
    }
    const browser = {
      name: result.browserName,
      version: result.browserVersion,
      path: result.browserPath,
    };
    const os = {
      name: result.osName,
      version: result.osVersion,
    };

    runData.endTime = endTime.toISOString();
    runData.duration = stats.duration;
    runData.totalTests = stats.totalTests;
    runData.passed = stats.passed;
    runData.failed = stats.failed;
    runData.skipped = stats.skipped;
    runData.os = os;

    console.log(result);

    result.runs.forEach(run => {
      processSpecTestResult(run, browser);
    });

    logger(`Test Run Completed: ${runData.id} (${duration}ms)`);
    logger(`Final Results: ${stats.passed} passed, ${stats.failed} failed, ${stats.skipped} skipped`);
    logger(`Browser: ${browser.name} ${browser.version}`);
    logger(`OS: ${os.name} ${os.version}`);

    await updateResults();

    if (reporterOptions.outputFolder) {
      writeReport();
    }
  });

  return {
    getRunData: () => runData,
    getTestResults: () => testResults
  };
}

export default CypressTestReporter;