'use strict';

var gulp = require('gulp');
var del = require('del');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var gulpif = require('gulp-if');
var handleErrors = require('./gulputil/handle-errors').handleErrors;
var settings = require('./gulputil/settings').SETTINGS;
var argv = require('yargs').argv;
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['clean', 'sass', 'ngconcat']);

gulp.task('clean', function(cb) {
  return del(['./build'], function(err, paths) {
    cb();
  });
});

const PATHS = {
  src: `${settings.src}/client/assets/scss/main.scss`,
  dest: `${settings.destPath}`
};

if (argv.watch) {
  watch([`${settings.src}/client/assets/scss/**/*.scss`], function() {
    gulp.start('sass');
  });
}

gulp.task('sass', function() {
  gulp.src([PATHS.src], {
      base: `${settings.src}/client/assets/scss/`
    })
    .pipe(sass({
      includePaths: [
        `${settings.src}/client/assets/scss/`,
        './node_modules/'
      ]
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulpif(argv.production, minifyCss()))
    .pipe(gulp.dest(PATHS.dest))
    .pipe(browserSync.stream())
    .pipe(livereload());
});

if (argv.watch) {
  watch([`${settings.src}/client/assets/scss/**/*.scss`], function() {
    gulp.start('sass');
  });
}

gulp.task('sass', function() {
  gulp.src([PATHS.src], {
      base: `${settings.src}/client/assets/scss/`
    })
    .pipe(sass({
      includePaths: [
        `${settings.src}/client/assets/scss/`,
        './node_modules/'
      ]
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulpif(argv.production, minifyCss()))
    .pipe(gulp.dest(PATHS.dest))
    .pipe(browserSync.stream())
    .pipe(livereload());
});

if (argv.watch) {
  watch([`${settings.src}/client/assets/scss/**/*.scss`], function() {
    gulp.start('sass');
  });
}

gulp.task('sass', function() {
  gulp.src([PATHS.src], {
      base: `${settings.src}/client/assets/scss/`
    })
    .pipe(sass({
      includePaths: [
        `${settings.src}/client/assets/scss/`,
        './node_modules/'
      ]
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulpif(argv.production, minifyCss()))
    .pipe(gulp.dest(PATHS.dest))
    .pipe(browserSync.stream())
    .pipe(livereload());
});

if (argv.watch) {
  watch([`${settings.src}/client/assets/scss/**/*.scss`], function() {
    gulp.start('sass');
  });
}

gulp.task('sass', function() {
  gulp.src([PATHS.src], {
      base: `${settings.src}/client/assets/scss/`
    })
    .pipe(sass({
      includePaths: [
        `${settings.src}/client/assets/scss/`,
        './node_modules/'
      ]
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({browsers: ['last 2 version']}))
    .pipe(gulpif(argv.production, minifyCss()))
    .pipe(gulp.dest(PATHS.dest))
    .pipe(browserSync.stream())
    .pipe(livereload());
});

gulp.task('ngconcat', function() {
  gulp.src(settings.jsPaths)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(`${settings.destPath}`))
    .pipe(livereload());
});

gulp.task('watch', ['default'], function() {
  livereload.listen();
  gulp.watch(settings.jsPaths, ['ngconcat']);
  gulp.watch(settings.sassPaths, ['sass']);
  gulp.watch(settings.htmlPaths, function() {
    gulp.src(settings.htmlPaths)
      .pipe(livereload());
  });
  //TODO: Switch to webpack concat.
});
