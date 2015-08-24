module.exports = function (config) {
    config.set({

        basePath: './',

        reporters: ['progress'],

        files: [
            'src/main/webapp/bower_components/jquery/dist/jquery.min.js',
            'src/main/webapp/bower_components/ckeditor/ckeditor.js',

            'src/test/mocks/**/*.js',
            'src/test/unit-tests/**/*.js'

        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
