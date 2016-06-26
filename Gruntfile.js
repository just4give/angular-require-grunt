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
                    dir: 'build/modules/',
                    modules: [{
                        name: 'main'
                    }],
                    preserveLicenseComments: false, // remove all comments
                    removeCombined: true,
                    baseUrl: './src/modules',
                    mainConfigFile: './src/modules/main.js',
                    optimize: 'uglify2',
                    uglify2: {
                        mangle: false
                    }

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