module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      options: {
        keepSpecialComments: 0
      },
      combine: {
        src: ['stylesheets/bootstrap.css', 'stylesheets/zocial.css'],
        dest: 'stylesheets/guivinicius.min.css'
      }
    },
    watch: {
      files: ['<%= cssmin.combine.src %>'],
      tasks: ['cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', 'cssmin');

};
