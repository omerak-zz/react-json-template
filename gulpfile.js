'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var path = require('path');

var handleError = function() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};


var getBrowserifyOpt = function(target) {
  return {
    entries: target,
    paths: [
      path.join(__dirname, 'assets/js')
    ]
  };
};


var browserifyBundle = function(bundler, sourceFile) {
  return bundler
    .bundle()
    .on('error', handleError)
    .pipe(source(sourceFile))
    .pipe(gulp.dest('assets/'));
};

gulp.task('browserify', function() {
  var opt = getBrowserifyOpt('./assets/js/app.js');
  return browserifyBundle(browserify(opt), 'bundle.js');
});
