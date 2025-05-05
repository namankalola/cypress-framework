const { defineConfig } = require("cypress");
const XLSX = require('xlsx'); // Import the xlsx library
let sharedData = {}; 

module.exports = defineConfig({
  projectId: 'ern11c',
  e2e: {
    specPattern: "cypress/testcases/parabank/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      on('task', {
        readExcel({ filePath, sheetName }) {
          const workbook = XLSX.readFile(filePath);
          const worksheet = workbook.Sheets[sheetName];
          return XLSX.utils.sheet_to_json(worksheet);
        },
        setSharedData({ key, value }) {
          sharedData[key] = value;
          return null;
        },
        getSharedData(key) {
          return sharedData[key] || null;
        },
      });
    },
  },
});