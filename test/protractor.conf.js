exports.config = {
  // Selenium Standalone sever 시작하지 않고 Chrome만을 사용한
  chromeOnly: true,
  // 기존 chromeDriver: '../selenium/chromedriver',
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  // 만일 Selenium Standalone sever 테스트 를 원하면 
  // chromeOnly와 chromeDriver 주석처리. 
  // ./node_modules/protractor/bin/webdriver-manager start
  //seleniumAddress: 'http://0.0.0.0:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']}
  },

  // e2e 테스트 코드 위치 
  // 기존 specs: ['example_spec.js'],
  specs: ['e2e/**/*.js'],

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9000',

  // Jasmine 옵션 
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
