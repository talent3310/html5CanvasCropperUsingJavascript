
/*
FileName: gulpfile.js
@author: Tarkhan Gantumur
@created: 2016-01-11 04:11
 */

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'demo',
    });
});

gulp.task('default', ['connect']);
