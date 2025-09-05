# Custom Cypress Test Reporter

A Cypress test reporter that generates structured test run data and can integrate with any custom test management API.

## Installation

```bash
npm install @sayankundu009/cypress-reporter
```

## Prerequisites

To use the Cypress Reporter, you will need to set up the following environment variables:

```
REPORTER_HOST: Test API instance domain name
REPORTER_API_KEY: Test API key
REPORTER_PROJECT_ID: Test project ID where test runs and results will be added
REPORTER_SUITE_ID: The Test suite ID associated with the test cases
REPORTER_RUN_NAME: The name of the test run (the execution time will be appended to this name when created)
```

Additionally, you may provide the `REPORTER_RUN_ID` environment variable to use an existing test run instead of creating a new one.

## Usage

Add the reporter to your Cypress configuration file (`cypress.config.ts` or `cypress.config.js`):

```typescript
import { defineConfig } from 'cypress';
import CypressTestReporter from 'cypress-reporter';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      CypressTestReporter(on, {
        host: process.env.REPORTER_HOST || "",
        apiKey: process.env.REPORTER_API_KEY || "",
        runId: process.env.REPORTER_RUN_ID || "",
        runName: process.env.REPORTER_RUN_NAME || "",
        outputFolder: "test-results/reporter"
      });
    },
  },
});
```
