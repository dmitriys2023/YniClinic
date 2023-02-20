const { src, dest } = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const htmlmin = require('gulp-htmlmin')
const sync = require('browser-sync').create()
const del = require('del')


function html() {
   return src('**.html')
      .pipe(include({
         prefix: '@@'
      }))
      .pipe(dest('dist'))
}


exports.html = html