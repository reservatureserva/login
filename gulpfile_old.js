const gulp = require('gulp');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const pump = require('pump');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const path = require('path');
const fs = require('fs');
const glob = require("glob");
const htmlmini = require('htmlmin');

gulp.task('imgmin', function () {
    gulp.src('src/img/**')
        .pipe(imagemin(), {verbose: true})
        .pipe(gulp.dest('www/img'))
});

gulp.task('js', function (cb) {
    pump([
        sourcemaps.init(),
        gulp.src('src/js/*.js'),
        uglify(),
        rename({extname: '.min.js'}),
        gulp.dest('www/js'),
        sourcemaps.write('.')
    ], cb)
});

gulp.task('sass', function (cb) {
    pump([
            gulp.src('src/{sass,css}/*.{scss,css}'),
            sourcemaps.init(),
            sass().on('error', sass.logError),
            cleanCSS({
                compatibility: 'ie8',
                level: {
                    2: {
                        mergeMedia: true,
                        removeEmpty: true,
                        removeDuplicateMediaBlocks: true
                    }
                }
            }),
            rename({extname: '.min.css'}),
            sourcemaps.write('.'),
            gulp.dest('www/css')],
        cb)
});
gulp.task('templates', function (cb) {

    let htmls = {};
    glob.sync('src/html/*.html').forEach(function (p) {
        let data = fs.readFileSync(p, 'utf-8');
        data = htmlmini(data, {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        });
        htmls[path.parse(p).name] = data;
    });
    fs.writeFile('src/js/templates.js', 'const components = ' + JSON.stringify(htmls), function (err) {
        cb(err)const gulp = require('gulp');

    })
});

gulp.task('watch', function () {
    gulp.watch('src/+(sass|css)/*.{scss,css}', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/img/**', ['imgmin']);
    gulp.watch('src/html/*.html', ['templates'])
});


gulp.task('html', function () {
    return gulp.src('src/**/*.html')
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('www'))
});

gulp.task('public', ['html', 'js', 'sass', 'imgmin']);