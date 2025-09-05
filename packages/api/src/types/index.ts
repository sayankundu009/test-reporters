export interface TestRun {
    id: string;
    name: string | undefined;
    projectId?: string;
    suiteId?: string;
    startTime: string;
    endTime?: string;
    totalTests: number;
    passed: number;
    failed: number;
    skipped: number;
    duration?: number;
    
    browserInfo?: {
        name: string;
        version: string;
        path: string;
    };
    cypressVersion?: string;
    specs?: any[];
}

export interface TestAttachment {
    type: string;
    path: string;
    contentType: string;
}

export interface TestStepResult {
    title: string;
    status: string;
    category: string;
    duration: number;
    startTime: string;
    endTime: string;
    error: {
        message: string;
        stack?: string;
    };
    location: {
        file: string;
        line: number;
        column: number;
    };
}

export interface TestCaseResult {
    caseId: string;
    title: string;
    status: 'passed' | 'failed' | 'skipped' | 'timedOut' | 'interrupted';
    duration: number;
    comment: string;
    browser?: string;
    error?: {
        message: string;
        stack?: string;
    };
    startTime: string;
    endTime: string;
    steps: TestStepResult[],
    attachments: TestAttachment[],

    specs?: any[];
    browserInfo?: {
        name: string;
        version: string;
        path: string;
    };
    cypressVersion?: string;
}

export interface ApiIntegration {
    createTestRun?(runData: TestRun): Promise<TestRun>;
    updateTestResults?(runId: string, results: TestCaseResult[]): Promise<void>;
}