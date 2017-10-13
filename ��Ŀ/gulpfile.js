

var gulp = require("gulp");
gulp.task("copy-index", function(){
	return gulp.src("*.html").pipe(gulp.dest("zhiwo/"))
	.pipe(connect.reload());
})
var gulp = require("gulp");
gulp.task("copy-css", function(){
	return gulp.src("css/index.css").pipe(gulp.dest("zhiwo/css/"))
	.pipe(connect.reload());
})

gulp.task("data",function(){
	return gulp.src("json/*.json")
	.pipe(gulp.dest("zhiwo/json"))
	.pipe(connect.reload());
})
gulp.task("font",function(){
	return gulp.src("fonts/**/*")
	.pipe(gulp.dest("zhiwo/fonts/"))
	.pipe(connect.reload());
})

var imagemin = require("gulp-imagemin");
gulp.task("images",function(){
	return gulp.src("img/**/*")
	.pipe(imagemin())
	.pipe(gulp.dest("zhiwo/img/"))
	.pipe(connect.reload());
})

var minifycss = require("gulp-minify-css");
var scss = require("gulp-sass");
gulp.task("sass",function(){
	return gulp.src("css/*.scss")
	.pipe(scss())
	.pipe(gulp.dest("zhiwo/css"))
	.pipe(minifycss())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("zhiwo/css"))
	.pipe(connect.reload());
})

var connect = require("gulp-connect");
gulp.task("server",function(){
	connect.server({
		root:"zhiwo",
		livereload:true
	});
});

gulp.task("watch",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/**/*",["images"]);
	gulp.watch("json/*.json",["data"]);
	gulp.watch("js/*.js",["scripts"]);
	gulp.watch("css/*.scss",["sass"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("fonts/**/*",["font"]);
})


gulp.task("default",["server","watch"]);


gulp.task("build",["copy-index","images","data","sass","scripts"],function(){
	console.log("编译成功");
})
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var concat = require("gulp-concat");
gulp.task("scripts",function(){
	return gulp.src("js/*.js")
	.pipe(gulp.dest("zhiwo/js"))
	.pipe(connect.reload());
})