const {
  browser
} = require('protractor');

// var HtmlReporter = require('protractor-beautiful-reporter');
// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
// var reporter = new HtmlScreenshotReporter({
//   dest: 'target/screenshots',
//   filename: 'my-report.html'
// });

exports.config = {
  framework: 'jasmine2',
  allScriptsTimeout: 90000,
  useAllAngular2AppRoot: true,
  directConnect: false,
  seleniumAddress: 'http://localhost:4444/wd/hub',

  /*multiCapabilities: [
      {'browserName': 'chrome'},
      {'browserName': 'firefox'},
    ],*/


  multiCapabilities: [{
    'browserName': 'chrome',
    'chromeOptions': {
      // args: [ "--headless","--disable-gpu"]

      //'args': ['disable-infobars']
    },
  }
  ],

  // Tests to Run as part of the Configuration Suite
  specs:
    [
      './src/specs/*.spec.ts',
    ],

  /*suites: {
    banking: ['./Banking/*.js'],
    devTools: ['./devTools/Login/*.js'],
    selected: ['todo-spec.js','FirstTest.js']
  },*/

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 250000000,
    print: function () {},
  },

  beforeLaunch: function () {
    // return new Promise(function (resolve) {
    //   reporter.beforeLaunch(resolve);
    // });
  },
  afterLaunch: function (exitCode) {
    // return new Promise(function (resolve) {
    //   reporter.afterLaunch(resolve.bind(this, exitCode));
    // });
  },
  onPrepare: function () {
    // Protractor Beautify Reporter
    // jasmine.getEnv().addReporter(new HtmlReporter({
    //   baseDirectory: 'tmp/screenshots'
    // }).getJasmine2Reporter());
  }
};