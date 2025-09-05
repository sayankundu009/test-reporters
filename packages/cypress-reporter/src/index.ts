import { CustomApiIntegration, TestCaseResult, TestRun } from 'api';
import { CypressTestReporterOptions, RunResult, Spec, BeforeRunDetails, ScreenshotDetails, CypressRunResult } from './types';
import { logger } from 'utils';
import path from 'path';
import fs from 'fs';

import 'dotenv/config';

function CypressTestReporter(on: any, options: any = {}) {
  const config = {
    host: process.env.REPORTER_HOST || "",
    apiKey: process.env.REPORTER_API_KEY || "",
    runId: process.env.REPORTER_RUN_ID || "",
    runName: process.env.REPORTER_RUN_NAME || "",
    outputFolder: "",
    ...options
  };

  const reporterOptions: CypressTestReporterOptions = {
    ...config,
    api: new CustomApiIntegration(config.host, config.apiKey)
  };

  const testResults: TestCaseResult[] = [];
  const specResults: Map<string, RunResult> = new Map();
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

  function updateStats(status: string) {
    if (status === 'passed') runData.passed++;
    else if (status === 'failed') runData.failed++;
    else if (status === 'skipped') runData.skipped++;
  }

  function findCaseIds(testTitle: string): string[] {
    const TEST_ID_PATTERN = 'C\\d+';
    const regex = new RegExp(TEST_ID_PATTERN, 'g');
    const matches = testTitle.match(regex);
    return matches ? matches.map(match => match) : [];
  }

  function createComment(status: string, duration: number, error?: any): string {
    if (status === "failed") {
      return "Test Status is " + status + " " + JSON.stringify(error);
    } else {
      return "Test Passed within " + duration + " ms";
    }
  }

  function processTestResults(spec: Spec, specRunResult: RunResult) {
    const specPath = spec.relative;
    logger(`Processing spec: ${specPath}`);

    specRunResult.tests.forEach(test => {
      const testTitle = test.title.join(' ');
      const status = test.state as 'passed' | 'failed' | 'skipped';
      const duration = test.duration;

      logger(`${status.toUpperCase()}: ${testTitle} (${duration}ms)`);

      if (test.displayError) {
        logger(`Error: ${test.displayError}`);
      }

      updateStats(status);

      const caseIds = findCaseIds(testTitle);

      if (caseIds.length === 0) {
        logger(`No case ID found: ${testTitle}`);
        return;
      }

      const testStartTime = specRunResult.stats.startedAt;

      caseIds.forEach(caseId => {
        const testResult: TestCaseResult = {
          caseId,
          title: testTitle,
          status,
          duration,
          comment: createComment(status, duration, test.displayError ? { message: test.displayError } : undefined),
          ...(test.displayError && {
            error: {
              message: test.displayError,
            }
          }),
          startTime: testStartTime,
          endTime: specRunResult.stats.endedAt,
          attachments: specRunResult.screenshots.map(s => {
            return {
              type: 'image',
              path: s.path,
              contentType: 'image/png',
            }
          }),
          steps: [],
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
      runData,
      testResults,
    };

    try {
      const fileName = `results-${runData.id}-${runData.startTime}.json`;
      const filePath = path.join(reporterOptions.outputFolder, fileName);
      const dirPath = path.dirname(filePath);

      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(report, null, 2));

      logger(`Report saved: ${filePath}`);
    } catch (error) {
      logger(`Save failed: ${error}`);
    }
  }

  on('before:run', async (details: BeforeRunDetails) => {
    runStartTime = new Date();
    runData.startTime = runStartTime.toISOString();

    runData.browserInfo = details.browser ? {
      name: details.browser.name,
      version: details.browser.version,
      path: details.browser.path,
    } : undefined;

    runData.cypressVersion = details.cypressVersion;
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
        logger(`Failed to create test run: ${error}`);
      }
    } else {
      logger(`Using existing 'RUN_ID' provided by user: ${reporterOptions.runId}`);
    }
  });

  on('before:spec', (spec: Spec) => {
    logger(`Starting spec: ${spec.relative}`);
  });

  on('after:spec', (spec: Spec, results: RunResult) => {
    logger(`Completed spec: ${spec.relative}`);
    logger(`Spec stats: ${results.stats.passes} passed, ${results.stats.failures} failed, ${results.stats.pending} pending`);

    specResults.set(spec.relative, results);
    processTestResults(spec, results);
  });

  on('after:screenshot', (details: ScreenshotDetails) => {
    logger(`Screenshot taken: ${details.name} at ${details.path}`);

    if (details.testFailure) {
      logger(`Screenshot for failed test: ${details.specName}`);
    }

    return { path: details.path };
  });

  on('after:run', async (results: CypressRunResult) => {
    const endTime = new Date();
    const duration = runStartTime ? endTime.getTime() - runStartTime.getTime() : results.totalDuration;

    runData.endTime = endTime.toISOString();
    runData.duration = duration;
    runData.totalTests = results.totalTests;
    runData.passed = results.totalPassed;
    runData.failed = results.totalFailed;
    runData.skipped = results.totalSkipped;

    logger(`Test Run Completed: ${runData.id} (${duration}ms)`);
    logger(`Final Results: ${results.totalPassed} passed, ${results.totalFailed} failed, ${results.totalSkipped} skipped`);
    logger(`Browser: ${results.browserName} ${results.browserVersion}`);
    logger(`OS: ${results.osName} ${results.osVersion}`);

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