module.exports = function(grunt) {

    "use strict";

  grunt.initConfig({
	pkg: grunt.file.readJSON("package.json"),
	clean: {
		local: {
			src: ["./test/db/local/*"]
		},
		remote: {
			src: ["./test/db/remote/*"]
		}
	},
    nodeunit: {
		all: ["test/**/*.js"],
		unit: ["test/unit/**/*.js"],
		func: ["test/func/**/*.js"]
    },
    jshint: {

      files: ["gruntfile.js", "src/**/*.js", "test/**/*.js"],
      options: {
          jshintrc: ".jshintrc",
          ignores: ["src/client/js/lib/*.js"]
   		}
    }
  });

	grunt.registerTask( "default", ["lint"]);

	grunt.loadNpmTasks( "grunt-contrib");
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.registerTask( "lint", ["jshint"]);
	grunt.registerTask( "unit", [ "jshint","nodeunit:unit"]);
	grunt.registerTask( "func", [ "jshint","nodeunit:func"]);
	grunt.registerTask( "test", ["jshint", "nodeunit:all"]);


};