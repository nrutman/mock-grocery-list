var del = require('del');
var gulp = require('gulp');
var gulpConcat = require('gulp-concat');
var gulpJsHint = require('gulp-jshint');
var gulpNgAnnotate = require('gulp-ng-annotate');
var gulpNgHtml2Js = require('gulp-ng-html2js');
var gulpSass = require('gulp-sass');
var gulpUglify = require('gulp-uglify');

gulp.task('clean', function() {
    del('public/build/**/*');
});

gulp.task('default', ['build']);

gulp.task('build', ['build:html', 'build:js', 'build:sass']);

gulp.task('build:html', function() {
    gulp.src('src/**/*.html')
    .pipe(gulpNgHtml2Js({
        moduleName: 'nr.grocery.templates'
    }))
    .pipe(gulpUglify({
        mangle: false
    }))
    .pipe(gulpConcat('app.templates.min.js'))
    .pipe(gulp.dest('public/build'));
});

gulp.task('build:js', function() {
    gulp.src([
        'src/app/module.js',
        'src/app/config.js',
        'src/app/run.js',
        'src/app/**/*.js'
    ])
    .pipe(gulpNgAnnotate())
    .pipe(gulpUglify({
        mangle: false
    }))
    .pipe(gulpConcat('app.min.js'))
    .pipe(gulp.dest('public/build'));
});

gulp.task('build:sass', function() {
    gulp.src('src/sass/**/*.scss')
    .pipe(gulpSass())
    .pipe(gulp.dest('public/build'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['build:html']);
    gulp.watch('src/app/**/*.js', ['build:js']);
    gulp.watch('src/sass/**/*.scss', ['build:sass']);
});
