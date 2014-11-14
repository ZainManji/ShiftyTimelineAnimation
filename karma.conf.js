// Karma configuration file
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54

module.exports = function (config) {
  'use strict';

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['mocha'],

    // list of files / patterns to load in the browser
    files: [
      'bower_components/chai/chai.js',
      'bower_components/shifty/dist/shifty.js',
      'animation.js',
      'test/**/*.js'
    ],

    preprocessors: {
      'animation.js': ['coverage']
    },

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots', 'progress', 'junit', 'teamcity'
    // CLI --reporters progress
    reporters: ['dots', 'coverage', 'coveralls'],

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: true,

    // start these browsers
    // CLI --browsers Chrome,Firefox,Safari
    browsers: [
      'Chrome',
      'Firefox'
    ],

    // if browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 20000,

    // auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    plugins: [
      'karma-mocha',
      'karma-coverage',
      'karma-coveralls',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-safari-launcher'
    ],

    coverageReporter: {
      reporters:[
        {type: 'lcov', dir:'coverage/'},
        {type: 'text'},
        {type: 'text-summary'},
      ],
    }
  });
};
