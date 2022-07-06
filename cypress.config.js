const {defineConfig} = require('cypress')
module.exports = defineConfig({
  env: {
    login_url: 'https://www.nsw.gov.au/'
  },
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
     
    },
    specPattern: 'cypress/integration/*.js',
  }
});


