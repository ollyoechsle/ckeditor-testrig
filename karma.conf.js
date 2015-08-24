module.exports = function (config) {
    config.set({

        basePath: './',

        reporters: ['progress'],

        files: [
            'src/main/webapp/bower_components/jquery/dist/jquery.min.js',
            'src/main/webapp/bower_components/ckeditor/ckeditor.js',

            {
                pattern: 'src/main/webapp/bower_components/ckeditor/lang/en.js',
                watched: false,
                included: false,
                served: true
            },

            {
                pattern: 'src/main/webapp/bower_components/ckeditor/config.js',
                watched: false,
                included: false,
                served: true
            },

            {
                pattern: 'src/main/webapp/bower_components/ckeditor/styles.js',
                watched: false,
                included: false,
                served: true
            },

            {
                pattern: 'src/main/webapp/bower_components/ckeditor/skins/moono/*.js',
                watched: false,
                included: false,
                served: true
            },

            {
                pattern: 'src/main/webapp/bower_components/ckeditor/plugins/**/*.js',
                watched: false,
                included: false,
                served: true
            },

            {
                pattern: 'src/main/webapp/ckeditor/plugins/**/*.js',
                watched: false,
                included: false,
                served: true
            },


            'src/test/util/**/*.js',
            'src/test/unit-tests/**/*.js'

        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
