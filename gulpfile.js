var gulp = require('gulp');
var zip = require('gulp-zip');

gulp.task('default', function() {
  return gulp.src(['main.js', 'manifest.json', 'LICENSE', '**/icons/*'])
    .pipe(zip('package.zip'))
    .pipe(gulp.dest('./'));
});
