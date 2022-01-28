import gulp from 'gulp';

// Config =====>
import app from '../config/app.js';
import path from '../config/path.js';

// Plugins =====>
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import autoPrefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import sass from 'gulp-sass';
import sassGlob from 'gulp-sass-glob';
import webpCss from 'gulp-webp-css';
import concat from 'gulp-concat';

// CSS include =====>
export default () => {
  gulp.src('./src/styles/libs/**/*.{sass,scss}')
    .pipe(concat('vendor.min.css'))
    .pipe(csso())
  .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
  return gulp.src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'SCSS',
        message: error.message
      }))
    }))
    .pipe(sassGlob())
    .pipe(sass(app.sass))
    .pipe(webpCss())
    .pipe(autoPrefixer(app.autoprefixer))
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({ title: 'main.css'}))
  .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'main.min.css'}))
  .pipe(gulp.dest(path.scss.dest, { sourcemaps: app.isDev }))
};