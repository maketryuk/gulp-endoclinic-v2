import gulp from 'gulp';

// Config =====>
import path from '../config/path.js';

// Plugins =====>
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import fileInclude from 'gulp-file-include';
import webpHtml from 'gulp-webp-html';

// HTML include =====>
export default () => {
  return gulp.src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'HTML',
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    .pipe(webpHtml())
  .pipe(gulp.dest(path.html.dest))
};