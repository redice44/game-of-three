var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('default', ['watch:app']);

gulp.task('watch:app', function() {
  gulp.watch('src/**/*.scss', ['build:css']);
});

gulp.task('build:css', function() {
  gulp.src('./src/**/*.scss')
    .pipe(concat('all.css'))
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets/'));
});
