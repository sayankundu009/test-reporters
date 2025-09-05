import { defineConfig } from 'cypress';
import CypressTestReporter from '../dist/index.js';

export default defineConfig({
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
      });

      return config;
    },
    specPattern: 'tests/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  }
});
