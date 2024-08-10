import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  retries: {
    // Configure retry attempts for `cypress run` Default is 0
    runMode: 0,
    // Configure retry attempts for `cypress open` Default is 0
    openMode: 1,
  },
});
