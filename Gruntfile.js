module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			app: {
				files: [{
					src: ['app/**/*.css'],
					dest: 'web/app.css'
				}]
			}
		},


		copy: {
			html: {
				cwd: 'app',
				files: [{
					src: '**/*.html',
					dest: 'web/',
					cwd: 'app',
					expand: true
				}]
			},
			web: {
				files: [{
					src: 'node_modules/angular/angular.js',
					dest: 'web/lib/angular.js'
				}, {
					src: 'node_modules/angular/angular.min.js',
					dest: 'web/lib/angular.min.js'
				}, {
					src: 'node_modules/angular-route/angular-route.js',
					dest: 'web/lib/angular-route.js'
				}, {
					src: 'node_modules/angular-route/angular-route.min.js',
					dest: 'web/lib/angular-route.min.js'
				}]
			}
		},

		connect: {
			server: {
				options: {
					port: 8080,
					base: './'
				}
			}
		},

		/**
		 * Typescript compiler integration. Compile all *.ts files and produce a single
		 * javascript file for the application.
		 */
		typescript: {
			base: {
				src: ['app/**/*.ts'],
				dest: 'web/Application.js',
				options: {
					module: 'amd', //or commonjs 
					target: 'es5', //or es3 
					basePath: 'js',
					sourceMap: true,
					declaration: false,
					removeComments: true
				}
			}
		},

		/**
		 * Live reload configuration.
		 */
		watch: {
			ts: {
				files: ['app/**/*.ts'],
				tasks: ['typescript']
			},
			css: {
				files: ['app/**/*.css'],
				tasks: ['cssmin']
			},
			app: {
				files: ['app/**'],
				tasks: ['copy'],
				options: {
					livereload: true,
				}
			},
		},
		open: {
			dev: {
				path: 'http://localhost:8080/index-dev.html'
			}
		}
	});


	grunt.registerTask('default', ['build', 'connect', 'open', 'watch']);
	grunt.registerTask('build', ['typescript', 'cssmin', 'copy']);
}