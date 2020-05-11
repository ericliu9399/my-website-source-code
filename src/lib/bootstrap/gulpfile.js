var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('build', gulp.series(sass2css));
const srcPath = 'scss'
const distPath = 'dist'
const path = {
  sass: {
    input: srcPath + "/*.scss",
    output: distPath
  }
}
function sass2css() {
  return gulp.src(path.sass.input, { allowEmpty: true })
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest(path.sass.output))
}