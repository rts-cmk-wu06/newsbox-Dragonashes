const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')
const minify = require("gulp-minify");
const concat = require('gulp-concat');
async function buildStyles() {
  var returnvar =
  src('assets/css/*.css')
    .pipe(sass({ outputStyle: 'compressed' }))
    // .pipe(purgecss({ content: ['*.html'] }))
    // .pipe(concat('app.css'))//merge
    .pipe(dest('output/css'))
  return returnvar
}
function minifyjs() {
  var returnvar =
    src('assets/js/*.js', { allowEmpty: true })
      .pipe(minify({ noSource: true }))
      // .pipe(concat('app.js'))//merge
      .pipe(dest('output/js'));
  return returnvar
}
// exports.default = minifyjs;
exports.default = series(buildStyles, minifyjs)