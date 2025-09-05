import { ApiIntegration } from "api";

export type CypressRunResult = {
    browserName: string;
    browserPath: string;
    browserVersion: string;
    cypressVersion: string;
    endedTestsAt: string;
    osName: string;
    osVersion: string;
    runs: RunResult[];
    runUrl?: string;
    startedTestsAt: string;
    totalDuration: number;
    totalFailed: number;
    totalPassed: number;
    totalPending: number;
    totalSkipped: number;
    totalSuites: number;
    totalTests: number;
};

export type RunResult = {
    error: string | null;
    reporter: string;
    reporterStats: object;
    screenshots: ScreenshotInformation[];
    stats: {
        duration?: number;
        endedAt: string;
        failures: number;
        passes: number;
        pending: number;
        skipped: number;
        startedAt: string;
        suites: number;
        tests: number;
    };
    spec: SpecResult;
    tests: TestResult[];
    video: string | null;
};

export type TestResult = {
    duration: number;
    title: string[];
    state: string;
    displayError: string | null;
    attempts: AttemptResult[];
};

export type AttemptResult = {
    state: string;
};

export type ScreenshotInformation = {
    name: string;
    takenAt: string;
    path: string;
    height: number;
    width: number;
};

export type SpecResult = {
    name: string;
    relative: string;
    absolute: string;
};

export type Spec = {
    name: string;
    relative: string;
    absolute: string;
    specFilter?: string;
};

export type BeforeRunDetails = {
    browser?: any;
    config: any;
    cypressVersion: string;
    group?: string;
    parallel?: boolean;
    runUrl?: string;
    specs?: Spec[];
    specPattern?: string[];
    system: any;
    tag?: string;
    autoCancelAfterFailures?: number | false;
};

export type ScreenshotDetails = {
    size: number;
    takenAt: string;
    duration: number;
    dimensions: { width: number; height: number };
    multipart: boolean;
    pixelRatio: number;
    name: string;
    specName: string;
    testFailure: boolean;
    path: string;
    scaled: boolean;
    blackout: string[];
};

export interface CypressTestReporterProps {
    host?: string;
    apiKey?: string;
    runId?: string;
    runName?: string;
    outputFolder?: string;
}

export interface CypressTestReporterOptions extends CypressTestReporterProps {
    api: ApiIntegration;
}
