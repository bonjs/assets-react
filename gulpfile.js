var gulp = require("gulp"),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream');

gulp.task('react', function() {
    browserify([
    	
    	/*
    	'./ext/src/Ext.js',
    	'./ext/src/lang/Object.js',
    	'./ext/src/lang/Array.js',
    	'./ext/src/lang/Function.js',
    	'./ext/src/class/Base.js',
    	'./ext/src/class/Class.js',
    	'./ext/src/class/ClassManager.js',
    	'./ext/src/class/Loader.js',
    	
    	'./core/Observable.js',
    	'./core/Component.js',
    	'./core/DataView.js',
    	'./core/DataViewReact.js'*/
    	
    	])
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('jsx', function(){
	gulp.watch(['./js/module/*.js'], ['react']);
});