/**
 * Created by appstacksoultions.com on 6/24/16.
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: {
                src: ['build']
            }
        },
        htmlbuild: {
          build:{
              src: 'src/index.html',
              dest: 'build/',
          }
        },
        bowerRequirejs: {
            app: {
                rjsConfig: 'src/modules/main.js',
                options: {

                    exclude: ['requirejs']
                }
            }
        },
        requirejs: {
            build:{
                options: {
                   /* baseUrl: 'src',
                    mainConfigFile: 'src/main.js',
                    out: 'build/main.js',
                    name:'main',
                    optimize: 'uglify2',
                    uglify2: {
                        mangle: false
                    }*/

                    dir: 'build/modules/',
                    modules: [{
                        name: 'main'
                    }],
                    preserveLicenseComments: false, // remove all comments
                    removeCombined: true,
                    baseUrl: './src/modules',
                    mainConfigFile: './src/modules/main.js',
                    optimize: 'none',
                    uglify2: {
                        mangle: false
                    }

                    /*waitSeconds : 0,
                    baseUrl : './src',
                    name : 'main',
                    mainConfigFile : ['src/main.js'],
                    out : 'build/main.js',
                    optimize : 'uglify2',
                    generateSourceMaps : false,
                    preserveLicenseComments : false,
                    inlineText : true,
                    findNestedDependencies : true,
                    exclude : [

                    ]*/

                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default',['clean:build','htmlbuild:build','bowerRequirejs:app','requirejs:build']);
    grunt.registerTask('wire',['bowerRequirejs']);
}