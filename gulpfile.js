var gulp = require("gulp"),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

gulp.task('react', function() {
    browserify(['./js/module/Dog.js'])
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('jsx', function(){
	gulp.watch(['./js/module/Dog.js'], ['react']);
});