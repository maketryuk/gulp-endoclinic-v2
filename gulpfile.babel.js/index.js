import gulp from 'gulp';
import browserSync from 'browser-sync';

// Config =====>
import app from './config/app.js';
import path from './config/path.js';

// Tasks =====>
import clear from './tasks/clear.js';
import htmlInclude from './tasks/html.js';
import scssInclude from './tasks/scss.js';
import jsInclude from './tasks/js.js';
import imgInclude from './tasks/img.js';
import fontsInclude from './tasks/fonts.js';

// Watch Files =====>
const watcher = () => {
  browserSync.init({
    tunnel: "langston",
    server: {
      baseDir: path.root
    }
  })

  gulp.watch(path.html.watch, htmlInclude).on('all', browserSync.reload);
  gulp.watch(path.scss.watch, scssInclude).on('all', browserSync.reload);
  gulp.watch(path.js.watch, jsInclude).on('all', browserSync.reload);
  gulp.watch(path.img.watch, imgInclude).on('all', browserSync.reload);
  gulp.watch(path.fonts.watch, fontsInclude).on('all', browserSync.reload);
}

const build = gulp.series(
  clear,
  gulp.parallel(htmlInclude, scssInclude, jsInclude, imgInclude, fontsInclude)
)

const dev = gulp.series(
  build,
  watcher
);

// Tasks =====>
export default app.isProd
  ? build
  : dev;

