var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
  browserSync.init({
    server: "./course-modules"
  });
  gulp.watch('./course-modules/**/*.html').on('change',browserSync.reload);
  gulp.watch('./course-modules/**/*.js').on('change',browserSync.reload);
});