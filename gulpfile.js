const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compileSass() {
    return gulp.src('./source/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'))
}

function compressionJavaScript() {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compressionImage() {
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

exports.sass = compileSass;
exports.javascript = compressionJavaScript;
exports.imagemin = compressionImage;
exports.default = function() {
    gulp.watch('./source/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', { ignoreInitial: false }, gulp.series(compressionJavaScript));
    gulp.watch('./source/images/*', { ignoreInitial: false }, gulp.series(compressionImage));
}; 
