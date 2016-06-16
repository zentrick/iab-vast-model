import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import {Instrumenter} from 'isparta'
import del from 'del'
import seq from 'run-sequence'
import spawn from 'cross-spawn-promise'

const $ = loadPlugins()

const plumb = () => $.plumber({
  errorHandler: $.notify.onError('<%= error.message %>')
})

const test = (strict = false) => {
  return gulp.src(['test/lib/setup.js', 'test/unit/**/*.js', '!**/_*.js'], {read: false})
    .pipe($.if(!strict, plumb()))
    .pipe($.mocha({reporter: 'dot'}))
}

gulp.task('clean', () => del('lib'))

gulp.task('transpile', () => {
  return gulp.src('src/**/*.js')
    .pipe(plumb())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('lib'))
})

gulp.task('lint', () => {
  return gulp.src('src/**/*.js')
    .pipe(plumb())
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: false
    }))
})

gulp.task('build', (cb) => seq('lint', 'test', 'transpile', 'doc', cb))

gulp.task('cleanbuild', (cb) => seq('clean', 'build', cb))

gulp.task('pre-coverage', () => {
  return gulp.src('src/**/*.js')
    .pipe($.istanbul({instrumenter: Instrumenter}))
    .pipe($.istanbul.hookRequire())
})

gulp.task('coverage', ['pre-coverage'], () => {
  return test(true)
    .pipe($.istanbul.writeReports())
    .pipe($.istanbul.enforceThresholds({thresholds: {global: 100}}))
})

gulp.task('coveralls', ['coverage'], () => {
  return gulp.src('coverage/lcov.info')
    .pipe($.coveralls())
})

gulp.task('test', test)

gulp.task('watch', () => gulp.watch('{src,test}/**/*', ['cleanbuild']))

gulp.task('cleandoc', () => del('doc'))

gulp.task('doc', ['cleandoc'], () => {
  const cmd = 'node_modules/.bin/jsdoc'
  const args = ['-c', 'jsdoc.json']
  return spawn(cmd, args, {cwd: __dirname, stdio: 'inherit'})
})

gulp.task('default', ['cleanbuild'], () => gulp.start('watch'))
