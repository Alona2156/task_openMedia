const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./styles/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./styles/"));
})

gulp.task('sass:watch', function(){
  gulp.watch('./styles/*.scss', ['sass']);
});

gulp.task('default', ['sass:watch']);
