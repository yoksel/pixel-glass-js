'use strict';

var gulp = require('gulp');
var server = require('browser-sync');

gulp.task('serve', [], function() {
  server.init({
    server: '.',
    notify: false,
    open: true,
    ui: false
  });

  gulp.watch(['*.+(js|css|html)']).on('change',server.reload);

});
