var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('default', ['sass']);

// ファイルの変更を監視、変更があればtaskを実行
gulp.task('watch', ['server'], function() {
    gulp.watch('./css/**/*.scss', ['sass']);
    gulp.watch('./css/**/*.css', ['bs-reload']);
    gulp.watch('./*.html', ['bs-reload']);
    gulp.watch('./script/**/*.js', ['bs-reload']);
});

gulp.task('sass', function() {
    gulp.src('./css/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'comressed'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']))
        .pipe(gulp.dest('./css/'));
});

gulp.task('server', function() {
    return browserSync.init({
        server: {
            baseDir: '.'
        }
    })
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});
