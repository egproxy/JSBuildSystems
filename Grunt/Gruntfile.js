module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['src/css/*.scss', 'src/css/libs/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/libs/*.js', 'src/js/*.js'],
        dest: 'build/js/production.js'
      }
    },

    uglify: {
      build: {
        src: 'build/js/production.js',
        dest: 'build/js/production.min.js'
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/global.css': 'src/css/global.scss'
        }
      }
    }

  });

  // Tell grunt what plugins are being used
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // default task to run
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};
