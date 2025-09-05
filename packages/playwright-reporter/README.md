# Custom Playwright Test Reporter

A Playwright test reporter that generates structured test run data and can integrate with any custom test management API.

## Installation

```bash
npm install @sayankundu009/playwright-reporter
```

# Prerequisites

To use Reporter Reporter, you will need to set up the following environment variables:

```
REPORTER_HOST: Test api instance domain name
REPORTER_USERNAME: Test email 
REPORTER_PASSWORD: Test API key
REPORTER_PROJECT_ID: Test project ID where test runs and results will be added
REPORTER_SUITE_ID: The Test suite ID associated with the test cases
REPORTER_RUN_NAME: The name of the test run. (the execution time will be appended to this name on when created on Reporter)
````
Additionally, you may provide the REPORTER_RUN_ID environment variable to use an existing test run instead of creating a new one.


## Usage

```typescript
const config: PlaywrightTestConfig = {
  reporter: [
     ['@sayankundu009/playwright-reporter', { outputFolder: "test-results/reporter" }]
  ]
  // ...
};

export default config;
```
