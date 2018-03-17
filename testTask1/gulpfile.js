"use strict";

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('auto', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 30 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});
