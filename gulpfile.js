var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

//gulp task
gulp.task('all', gulp.series(pug2html, sass2css, js_move, movePic));
gulp.task('run', gulp.series('all', watch));
const srcPath = 'src/pages/landingPage'
const distPath = 'public/landingPage'
const path = {
  pug: {
    input: srcPath + '/*.pug',
    output: "public"
  },
  pugOther: {
    input: srcPath + '/pages/*.pug',
    output: distPath
  },
  sass: {
    input: srcPath + '/sass/*.sass',
    output: distPath + '/css'
  },
  js: {
    input: srcPath + '/js/*.js',
    output: distPath + '/js'
  },
  img: {
    input: srcPath + '/images/*',
    output: distPath + '/images'
  }
}
function watch() {
  gulp.watch(path.pug.input, pug2html)
  gulp.watch(path.pugOther.input,pug2html_other)
  gulp.watch(path.sass.input, sass2css)
  gulp.watch(path.js.input, js_move)
  gulp.watch(path.img.input, movePic)
}
//各種項目
function movePic() {
  return gulp.src(path.img.input, { allowEmpty: true })
    .pipe(gulp.dest(path.img.output))
}
function sass2css() {
  return gulp.src(path.sass.input, { allowEmpty: true })
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest(path.sass.output))
}
function js_move() {
  return gulp.src(path.js.input, { allowEmpty: true })
    .pipe(gulp.dest(path.js.output))
}
function pug2html() {
  return gulp.src(path.pug.input, { allowEmpty: true })
    .pipe(pug({ pretty: true, debug: false }))
    .pipe(gulp.dest(path.pug.output))
}
function pug2html_other() {
  return gulp.src(path.pugOther.input, { allowEmpty: true })
    .pipe(pug({ pretty: true, debug: false }))
    .pipe(gulp.dest(path.pugOther.output))
}



/**
 * 用不到
 */
function js_uglify() {
  return gulp.src('src/js/*.js')
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

function css_uglify() {
  return gulp.src('src/css/*.css')
    .pipe(concat('style.css'))
    .pipe(uglifycss())
    .pipe(gulp.dest('dist/css'));
}
function css_move() {
  return gulp.src(srcPath + '/css/*.css')
    .pipe(gulp.dest(distPath + '/css'))
}
function html_move() {
  let slash = srcPath.lastIndexOf('/')
  let folderName = ''
  if (slash != -1) { folderName = srcPath.slice(slash) }
  return gulp.src(srcPath + '/*.html')
    .pipe(gulp.dest(distPath + folderName));
}
function func_browser_sync() {
  // 指定啟動根目錄
  browserSync.init({
    server: distPath + "/"
  });
  gulp.watch('src/*.*', gulp.series(getPages, buildAll)).on("change", browserSync.reload);
  gulp.watch('src/**/*.*', gulp.series(getPages, buildAll)).on("change", browserSync.reload);
  gulp.watch('src/pages/**/*.*', gulp.series(getPages, buildAll)).on("change", browserSync.reload);
}