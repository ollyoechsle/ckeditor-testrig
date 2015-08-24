/*global module, require, process*/
module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

        concat: {
            options: {
                separator: ';\n\n'
            },
            dist: {
                src: [
                    'src/main/webapp/js/**/*.js'
                ],
                dest: 'src/main/webapp/dist/testrig.js'
            }
        },

        watch: {
            js: {
                files: ['src/main/webapp/js/**/*.js'],
                tasks: ['concat:dist'],
                options: {
                    spawn: true,
                    livereload: 35730
                }
            }
        }

    });

    grunt.registerTask('default', ['concat']);
    grunt.registerTask('run', ['concat', 'watch']);
};