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

    // Modernizr
    modernizr: {
      "devFile" : "javascripts/vendor/modernizr-dev.js",
      "outputFile" : "javascripts/vendor/modernizr-custom.js",
      // Based on default settings on http://modernizr.com/download/
      "extra" : {
          "shiv" : true,
          "printshiv" : false,
          "load" : true,
          "mq" : false,
          "cssclasses" : true
      },
      // Based on default settings on http://modernizr.com/download/
      "extensibility" : {
          "addtest" : false,
          "prefixed" : false,
          "teststyles" : false,
          "testprops" : false,
          "testallprops" : false,
          "hasevents" : false,
          "prefixes" : false,
          "domprefixes" : false
      },
      "uglify" : true,
      // Crawl project for references to Modernizr tests - it will crawl all *.js, *.css, *.scss files, except files that are in node_modules/
      "parseFiles" : true,
      // "matchCommunityTests" : false
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
      },
      modernizr: {
        files: ['stylesheets/sass/*.scss', 'javascripts/vendor/*.js'],
        tasks: ['modernizr']
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
    },

  });

  // DEPENDENT PLUGINS ========================= /

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-modernizr");
  grunt.loadNpmTasks('grunt-contrib-watch');

  // TASKS ===================================== /

  grunt.registerTask('default', ['connect', 'compass', 'coffee', 'modernizr', 'watch']);

};