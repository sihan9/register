module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace:true
      },
      files:{
        src:'./index.html',
        dest:'index.html'
      }
    },
    cssmin:{
      'register.css':'register.css'
    },
    uglify:{
      'register.js':'register.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('a', ['cssmin','htmlmin','uglify']);
};

