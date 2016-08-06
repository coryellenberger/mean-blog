var gulp = require('gulp')
var path = require('path')
var bower = require('gulp-bower')
var Server = require('karma').Server
var childExec = require('child_process').exec

gulp.task('docs', function (done) {
  childExec('node ./node_modules/jsdoc/jsdoc.js ./public/assets -r', undefined, done)
})

gulp.task('bower', function () {
  return bower()
})

gulp.task('test', function (done) {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js'),
    singleRun: true,
    browsers: ['PhantomJS'],
    reporters: ['coverage', 'progress']
  }, done).start()
})

gulp.task('tdd', function (done) {
  new Server({
    configFile: path.join(__dirname, '/karma.conf.js')
  }, done).start()
})
