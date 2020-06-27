const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './Tests/*.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://admin-demo.nopcommerce.com/',
      browser: 'chrome',
      host: '127.0.0.1',
      port: 4444
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Codecept',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}