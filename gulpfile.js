const gulp = require('gulp'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass')(require('sass')),
    pug = require('gulp-pug'),
    rename = require('gulp-rename'),
    // imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    concat = require("gulp-concat"),
    uglify = require('gulp-uglifyjs'),
    cssnano = require('gulp-cssnano');

const paths = {
    dirs: {
        build: './build'
    },
    html: {
        src: './dev/template/*.pug',
        dest: './build',
        watch: ['./dev/pages/*.pug', './dev/template/*.pug', './dev/template/**/*.pug']
    },
    css: {
        src: ['./dev/scss/app.scss'],
        dest: './build/css',
        watch: ['./dev/template/**/*.scss', './dev/scss/**/*.scss'],
    },
    // js: {
    //     src: ['./dev/plugins/jquery-3.5.1.min.js', './dev/plugins/**/*.js'],
    //     dest: './build/js',
    //     watch: ['./dev/modules/**/*.js', './dev/plugins/**/*.js']
    // },
    js2: {
        src: ['./dev/js/app.js'],
        dest: './build/js',
        watch: ['./dev/js/app.js']
    },
    img: {
        src: ['./dev/modules/parts/**/img/*', './dev/modules/base/**/img/*', './dev/modules/layout/**/img/*', './dev/img/**/*'],
        dest: './build/img/',
        watch: ['./dev/modules/**/img/**/*', './dev/img/**/*']
    },
    fonts: {
        src: './dev/fonts/**/*',
        dest: './build/fonts',
        watch: './dev/fonts/*'
    }
};


gulp.task('clean', function () {
    return del(paths.dirs.build);
});


gulp.task('html', function() {
    return gulp.src(paths.html.src)
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.html.dest))
        .pipe(browserSync.reload({stream: true }));
});

gulp.task('css', function(){
    return gulp
        .src(paths.css.src)
        .pipe(sourcemaps.init())
        // .pipe(wait(200))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({overrideBrowserslist: ['last 20 versions']}))
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write('.'))
        //.pipe(cssnano('style.css'))
        .pipe(gulp.dest(paths.css.dest))
        .pipe(browserSync.reload({stream: true}));
});

// gulp.task('js', function () {
//     return gulp.src(paths.js.src)
//         .pipe(plumber())
//         .pipe(concat('library.js'))
//         //.pipe(uglify('custom.js'))
//         .pipe(gulp.dest(paths.js.dest))
//         .pipe(browserSync.reload({stream: true}));
// });

gulp.task('custom-js', function () {
    return gulp.src(paths.js2.src)
        .pipe(plumber())
        .pipe(concat('custom.js'))
        //.pipe(uglify('custom.js'))
        .pipe(gulp.dest(paths.js2.dest))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
    return gulp.src(paths.img.src)
        .pipe(plumber())
        //.pipe(imagemin())
        //.pipe(rename({ dirname: '' }))
        .pipe(gulp.dest(paths.img.dest));
});

gulp.task('fonts', function () {
    return gulp.src(paths.fonts.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.fonts.dest))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('server', function () {
    browserSync.init({
        server: { baseDir: paths.dirs.build },
        reloadOnRestart: true,
        tunnel: false
    });
    gulp.watch(paths.html.watch, gulp.parallel('html'));
    gulp.watch(paths.css.watch, gulp.parallel('css'));
    // gulp.watch(paths.js.watch, gulp.parallel('js'));
    gulp.watch(paths.js2.watch, gulp.parallel('custom-js'));
    gulp.watch(paths.img.watch, gulp.parallel('img'));
    gulp.watch(paths.fonts.watch, gulp.parallel('fonts'));
});


gulp.task('build', gulp.series(
    'clean',
    'html',
    'css',
    'custom-js',
    'img',
    'fonts'
));

gulp.task('dev', gulp.series(
    'build', 'server'
));