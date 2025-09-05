import { TestRun, TestCaseResult, ApiIntegration } from './types';
import { logger } from 'utils';

export * from './types';

export class CustomApiIntegration implements ApiIntegration {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  async createTestRun(runData: TestRun): Promise<TestRun> {
    logger(`Creating test run: ${this.baseUrl} ${this.apiKey}`);

    return { ...runData, id: "123" };
  }

  async updateTestResults(runId: string, results: TestCaseResult[]): Promise<void> {
    const payload = results.map(result => ({
      run_id: runId,
      case_id: result.caseId,
      status: result.status,
      comment: result.comment,
      duration: result.duration,
      error: result.error,
      start_time: result.startTime,
      end_time: result.endTime,
    }))

    logger(`Updating ${payload.length} test results`);
  }
}
