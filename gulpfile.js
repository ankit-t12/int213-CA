const gulp = require('gulp');
const sass = require('npm i gulp-sass')(require('sass'));
const del = require('del');
const cleanCSS = require('gulp-clean-css');

gulp.task('styles', () => {
    return gulp.src('src/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./src/assets/css/'));
});

gulp.task('clean', () => {
    return del([
        'src/assets/css/global.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));