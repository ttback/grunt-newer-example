module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Watch for changes and trigger development tasks
    watch: {
      uglify_watch: {
        files: ['src/js/*.js'],
        tasks: ['newer:uglify:main']
      },
      less_watch: {
        files: ['src/css/*.less'],
        tasks: ['newer:less:main']
       }
     }
    ,
    uglify: {
      main: {
        options: {
          mangle: true,
          compress: true
        },
        expand: true,
        cwd: 'src/js',
        src: ['*.js'],
        dest: 'build/js',
      }
     }
    ,
	  less: {
	    main: {
		    files: {
		      "build/css/style.min.css": "src/css/style.less"
		    }
	    }
	  }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s).
  grunt.registerTask('default', ['less', 'uglify', 'watch']);
};