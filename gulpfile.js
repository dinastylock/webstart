const	gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-htmlmin');
const fontmin = require('gulp-fontmin');

// сжать и пернести css файлы
gulp.task('minify-css', ()=> {
	return gulp.src('src/css/*.css')
	.pipe(cleanCSS())
	.pipe(gulp.dest('build/css/'))
});

// перенести min.js файлы
gulp.task('move-minjs', () => {
	return gulp.src("src/js/*min.js")
	.pipe(gulp.dest('build/js'))
});

// сжать оставшиеcя js файлы и перебросить в build 
gulp.task('minify-js', () => {
	return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
	.pipe(jsmin())
	.pipe(gulp.dest('build/js'))
});

// сжать и перенести html файлы
gulp.task('htmlmin', () => {
	return gulp.src('src/*html')
	.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('build/'))
});

// сжимаем и переносим шрифты
gulp.task('fontsmin', () => {
	return gulp.src(['src/fonts/MuseoSansCyrl/*.eot', 'src/fonts/MuseoSansCyrl/*.ttf', 'src/fonts/MuseoSansCyrl/*.woff', 'src/fonts/MuseoSansCyrl/*.woff2'])
	.pipe(fontmin())
	.pipe(gulp.dest('build/fonts'))
});


gulp.task('build', gulp.series('minify-css', 'move-minjs', 'minify-js', 'htmlmin', 'fontsmin'))
