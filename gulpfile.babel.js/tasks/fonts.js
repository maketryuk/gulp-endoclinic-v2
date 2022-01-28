import gulp from 'gulp';

// Config =====>
import path from '../config/path.js';

// Plugins =====>
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';

// Fonts converting =====>
export default () => {
  return gulp.src(path.fonts.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: 'Fonts',
        message: error.message
      }))
    }))
  .pipe(gulp.dest(path.fonts.dest))
};