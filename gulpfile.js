const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// function compileScss() {
//   return gulp.src('src/scss/main.scss')
//     .pipe(sass()) /* compile scss */
//     .pipe(gulp.dest('src/css'));
// }

// function reload(done) {
//   browserSync.reload();
//   done();
// }

// function watch() {
//   browserSync.init({
//     server: {
//       baseDir: "src",
//       index: "html/index.html",
//     }

//   });
//   gulp.watch('src/scss/**/*.scss', gulp.series([compileScss, reload]));
// }

// const recompile = gulp.parallel(compileScss);
// const build = gulp.series(recompile, watch);

// exports.compileScss = compileScss;
// exports.watch = watch;

// gulp.task('default', build);

function compileScss(){
    return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
}

function reload(done){
    browserSync.reload();
    done();
}

function watch(){
    browserSync.init({
        server:{
            baseDir: 'src',
            index: 'html/index.html'
        }
    })
    gulp.watch('src/scss/**/*.scss',gulp.series([compileScss, reload]))
}

const recompile = gulp.parallel(compileScss)
const build = gulp.series(recompile, watch)

exports.compileScss = compileScss;
exports.watch = watch;

gulp.task('default', build)