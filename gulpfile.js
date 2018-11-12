'use strict';

var gulp = require('gulp');
//gulp-typescript is a wrapper around typescript. It contains the typescript compiler and adjusts it to work with gulp.
var ts = require('gulp-typescript');
//pass the config file
var tsProject = ts.createProject("tsconfig.json");

gulp.task("tszz", function(){
    return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest("./js"));
});

gulp.task("ts:watch", function(){
    gulp.watch("./js/*.ts",["tszz"]);
});


var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
 
gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('watch-all', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch("./js/*.ts",["ts"]);
});
  