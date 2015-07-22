
var gulp = require('gulp'),
	tsc = require('gulp-typescript'),
	path = require('path'),
	runSequence = require('run-sequence');
	// chalk = require('chalk');
	
var config = {
	baseUrl: "./public/",
	tsProject: tsc.createProject('tsconfig.json', {
		typescript: require('typescript')
	}),
}
gulp.task('typescript', function (done) {
	return gulp.src(path.join(config.baseUrl, '**/*.ts'))
		.pipe(tsc(config.tsProject))
		.pipe(gulp.dest(config.baseUrl));
	done();
});

// TODO
gulp.task('serve', function (done) {
  runSequence('typescript', 'xxx', 'yyy', done);
});

gulp.task('watch', function() {
	gulp.watch([path.join(config.baseUrl, '**/*.ts')], ['typescript'])
});