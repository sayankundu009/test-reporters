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
    
    testRunner?: {
        name: string;
        version: string;
    };
    specs?: string[];

    os?: {
        name: string;
        version: string;
    };
}

export interface TestAttachment {
    type: string;
    path: string;
    contentType: string;
}

export interface TestBrowser {
    name: string;
    version: string;
    path: string;
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
    } | null;
    location?: {
        file: string;
        line: number;
        column: number;
    } | null;
}

export interface TestCaseResult {
    caseId: string;
    title: string;
    status: 'passed' | 'failed' | 'skipped' | 'timedOut' | 'interrupted';
    duration: number;
    comment: string;
    error?: {
        message: string;
        stack?: string;
    } | null;
    startTime: string;
    endTime: string;
    steps: TestStepResult[],
    attachments: TestAttachment[],

    spec?: string;
    browser?: TestBrowser;
}

export interface ApiIntegration {
    createTestRun?(runData: TestRun): Promise<TestRun>;
    updateTestResults?(runId: string, results: TestCaseResult[]): Promise<void>;
}