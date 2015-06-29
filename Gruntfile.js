module.exports = function(grunt) {

	grunt.initConfig({
		clean: ['dist'],
		copy: {
			dist: {
				files: [{
					expand: true,
					src: ['index.html','jsmain.js'],
					dest: 'dist/'
				}]
			}
		},
		htmlmin: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist',
					src: 'index.html',
					dest: 'dist/'
				}],
				options: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true
				}
			}
		},
		uglify: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist',
					src: 'jsmain.js',
					dest: 'dist/'
				}],
				options: {
					report: 'min',
					mangle: {
						toplevel: true
					},
					compress: true
				}
			}
		},
		
		'gh-pages': {
			options: {
				base: 'dist'
			},
			src: ['**']
		}
	});

    grunt.registerTask('build', ['clean', 'copy:dist', 'htmlmin', 'uglify']);

	require('load-grunt-tasks')(grunt);
};
