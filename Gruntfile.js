module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('grunt-package.json'),
        concat: {
            options: {
                separator: ';'
            },
//            dist: {
//                src: ['dev/js/lib/*.js','dev/js/*.js'],
//                dest: '<%= pkg.jsDist %>game.js'
//            }
//            dist: {
//                src: ['dev/js/*.js'],
//                dest: 'dev/js_prod/game.js'
//            }
//            dist: {
//                src: ['dev/js_prod/loader.js','dev/js_prod/three.min.js'],
//                dest: '<%= pkg.jsDist %>ld.js'
//            }
            dist: {
                src: ['dev/js_prod/lib/*.js','dev/js_prod/game.js'],
                dest: '<%= pkg.jsDist %>game.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {

                files: {
                    '<%= pkg.jsDist %>game.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'dev/sass',
                    cssDir: '<%= pkg.cssDist %>',
                    imagesDir: '<%= pkg.imgDist %>'
                }
            }
        },
        watch: {
            scripts:{
                files: ['<%= concat.dist.src %>'],
                tasks: ['concat']
            },
            css: {
                files: ['dev/sass/*/*.scss', 'dev/sass/*.scss'],
                tasks: ['compass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.registerTask('default', ['compass']);

};