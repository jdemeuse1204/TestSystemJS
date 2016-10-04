var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var Builder = require('systemjs-builder');

gulp.task('build:site', function () {
    var builder = new Builder('TestSystemJS/App', 'TestSystemJS/App/build.config.js');

    return builder.buildStatic('app.js', 'TestSystemJS/App/Site.js', {
        format: "amd",
        minify: false
    });
});


