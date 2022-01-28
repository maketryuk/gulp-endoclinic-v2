import gulp from 'gulp';

// Config =====>
import path from '../config/path.js';

// Plugins =====>
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import size from 'gulp-size';
import app from '../config/app.js';

// JavaScript include =====>
export default () => {
  gulp.src('./src/js/libs/**/*.js', { sourcemaps: app.isDev})
    .pipe(concat('vendor.min.js'))
  .pipe(gulp.dest('./app/js/'))
  return gulp.src(path.js.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'JavaScript',
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(concat('main.js'))
  .pipe(size({ title: 'main.js'}))
  .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(size({ title: 'main.min.js'}))
  .pipe(gulp.dest(path.js.dest, { sourcemaps: app.isDev }))
};