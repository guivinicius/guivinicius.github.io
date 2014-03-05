module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      combine: {
        files: {
          'stylesheets/guivinicius.min.css': ['stylesheets/bootstrap.css', 'stylesheets/zocial.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', 'cssmin');

};
