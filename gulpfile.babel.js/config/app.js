const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
  isProd: isProd,
  isDev: isDev,

  imagemin: {
    verbose: true
  },

  sass: {
    outputStyle: 'expanded'
  },

  autoprefixer: {
    cascade: false,
  },
}