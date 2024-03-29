const { src, dest, watch, parallel } = require('gulp');

//CSS
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss')
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps')
const terser = require('gulp-terser-js');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

//MEDIA
const imagemin = require('gulp-imagemin');
const responsive = require('gulp-responsive');
const cache = require('gulp-cache');
const webp = require('gulp-webp');

const paths = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
    imagenes: 'src/img/**/*.{jpg,webp,png}'
}

// css es una función que se puede llamar automaticamente
function css() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./public/css'));
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js')) // final output file name
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./public/js'))
}

function imagenes() {
    return src(paths.imagenes)
        .pipe(cache(imagemin({ optimizationLevel: 5 })))
        .pipe(dest('public/img'))
}

function versionWebp() {
    const options = {
        quality: 80
    }
    return src(paths.imagenes)
        .pipe(webp(options))
        .pipe(dest('public/img'))
}

function watchArchivos() {
    watch(paths.scss, css);
    watch(paths.js, javascript);
    watch(paths.imagenes, imagenes);
    watch(paths.imagenes, versionWebp);
}

exports.default = parallel(css, javascript, imagenes, versionWebp, watchArchivos); 