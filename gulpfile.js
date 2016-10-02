const gulp = require('gulp'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  gulpif = require('gulp-if'),
  runSequence = require('run-sequence'),
  useref = require('gulp-useref'),
  babel = require('gulp-babel'),
  deploy = require('gulp-gh-pages');

gulp.task('sass', function () {
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
});

gulp.task('useref', function () {
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('css:compress', function () {
    return gulp.src('dist/css/**/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/src/css'));
});

gulp.task('js:compress', function () {
   gulp.src('dist/src/js/main.min.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/src/js'));
});

gulp.task('clean:dist', function() {
  del('dist/**/*');
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('deploy', function () {
  return gulp.src('dist/**/*')
      .pipe(deploy());
});

gulp.task('build', function (callback) {
runSequence('clean:dist', 'sass', 'useref', ['css:compress', 'js:compress'], callback);
});