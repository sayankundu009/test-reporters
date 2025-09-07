import { ApiIntegration } from "api";

export interface PlaywrightTestReporterProps {
    host?: string;
    apiKey?: string;
    runId?: string;
    runName?: string;
    outputFolder?: string;
    html?: boolean;
}

export interface PlaywrightTestReporterOptions extends PlaywrightTestReporterProps {
    api: ApiIntegration;
}