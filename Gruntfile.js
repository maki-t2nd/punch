module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './templates/lib',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'templates/sass',
          cssDir: 'templates/css'
          // config: 'templates/config.rb'
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: '**/*.mustache'
      },
      css: {
        files: '**/*.scss',
        tasks: ['compass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};