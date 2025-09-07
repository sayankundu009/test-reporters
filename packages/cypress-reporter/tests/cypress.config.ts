import { defineConfig } from 'cypress';
import CypressTestReporter from '../dist/index';

export default defineConfig({
  video: true,
  screenshotOnRunFailure: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message: string) {
          console.log(message);
          return null;
        },
      });

      CypressTestReporter(on, {
        outputFolder: '../test-results/reporter',
        html: true,
      });

      return config;
    },
    specPattern: 'tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  }
});
