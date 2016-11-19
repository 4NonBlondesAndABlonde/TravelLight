// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '.',
    frameworks: ['jasmine','angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma'),
      require('karma-coverage')
    ],
    files: [
      { pattern: './src/test.ts', watched: false },
      // {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},

      //this file ^^ causes max call size stack exceeded
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      // {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
      // {pattern: 'karma-test-shim.js', included: true, watched: true},
      {pattern: 'node_modules/lodash/lodash.js',included:true,watched:true},

      // paths loaded via module imports
      {pattern: 'dist/**/*.js', included: false, watched: true},
      // paths to support debugging with source maps in dev tools
      // {pattern: 'app/**/*.ts', included: false, watched: false},
      {pattern: 'dist/**/*.js.map', included: false, watched: false}

    ],
    preprocessors: {
      './src/test.ts': ['angular-cli'],
      // './src/*.ts': 'coverage',
      // './src/app/*.ts': 'coverage',
      './src/app/!(*spec).ts': 'coverage'
      // 'dist/**/!(*spec).ts': 'coverage'
    },
    reporters: ['progress', 'coverage', 'karma-remap-istanbul'],

    coverageReporter: {
      dir : 'coverage/',
      reporters: [
      // {type: 'html', subdir: 'report-html'},
      {type: 'json', subdir: './', file: 'coverage-final.json'}
      ]
    },

    remapIstanbulReporter: {
      src: './coverage/coverage-final.json',
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov',
        // dir: 'coverage/'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
