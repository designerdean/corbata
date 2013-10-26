module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // CONFIG =================================== /

    // Compile Compass/Sass
    compass: {
      dist: {
        options: {
          sassDir: ['stylesheets/sass'],
          cssDir: ['stylesheets']
        }
      }
    },

    // Compile CoffeeScript
    coffee: {
      compile: {
        files: {
          'javascripts/main.js': ['javascripts/coffee/*.coffee']
        }
      }
    },

    // Grunt Watch
    watch: {
      options: {
        livereload: true
      },
      stylesheets: {
        files: ['stylesheets/sass/*.scss'],
        tasks: ['compass']
      },
      javascripts: {
        files: ['javascripts/coffee/*.coffee'],
        tasks: ['coffee']
      },
      html: {
        files: ['*.html']
      }
    },

    // Start Local Server
    connect: {
      livereload: {
        options: {
          livereload: true,
          port: 9000
        }        
      }
    }

  });

  // DEPENDENT PLUGINS ========================= /

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // TASKS ===================================== /

  grunt.registerTask('default', ['connect', 'compass', 'coffee', 'watch']);

}