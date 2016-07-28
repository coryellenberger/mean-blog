var gulp = require('gulp')
var path = require('path')
var bower = require('gulp-bower')
var Server = require('karma').Server

gulp.task('bower', function () {
  return bower()
})

gulp.task('test', function (done) {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true,
    browsers: ['PhantomJS']
  }, done).start()
})

gulp.task('tdd', function (done) {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js')
  }, done).start()
})
