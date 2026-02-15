const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://www.saucedemo.com",
    viewportWidth: 1000,
    viewportHeight: 660,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

