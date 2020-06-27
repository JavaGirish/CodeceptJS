exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://admin-demo.nopcommerce.com/',
      browser: 'chrome',
      windowSize: 'maximize',
      timeouts: {
        'script': 90000,
        'page load': 45000,
        'implicit': 3000
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    allure: {
      enabled: true
    }
  },
  tests: './Tests/*.js',
  name: 'Codecept'
}