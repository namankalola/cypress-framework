const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ern11c',
  e2e: {
    specPattern : "cypress/testcases/sample/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
