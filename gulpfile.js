const gulp = require('gulp'); //引入模块
const rename = require("gulp-rename");

const htmlmin = require('gulp-htmlmin');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const less = require('gulp-less');
const path = require('path');
// const cache = require('gulp-cache');
// const pngquant = require('imagemin-pngquant')

// gulp 前端自动构建

var config = {
    input: {
        html: ['./src/html/*.html'],
        css: ['./src/less/*.css'],
        less: ['src/less/*.less'],
        js: ['./src/js/*.js', '!./src/js/*.min.js'],
        images: ['./src/imgs/*'],
        fonts: ['src/fonts/*'],
        plugins: ['src/plugins/**/*']
    },
    output: {
        dist: 'dist',
        html: 'dist/html',
        css: 'dist/css',
        less: 'src/css1/',
        js: 'dist/js',
        images: 'dist/images',
        fonts: 'dist/fonts',
        plugins: 'dist/plugins'
    }
}


//1.压缩 html 插件： gulp-htmlmin
gulp.task('htmlmin', () => {
    // return gulp.src('./src/html/*.html')
    // .pipe(htmlmin({ collapseWhitespace: true }))
    // .pipe(gulp.dest('dist/html'))
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    return gulp.src(config.input.html)
        .pipe(htmlmin(options))
        .pipe(gulp.dest(config.output.html));

});

//2.压缩 css  gulp-htmlcss
gulp.task('cssmin', () => {
    return gulp.src(config.input.css)
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.output.css))
});
//3.压缩 js 添加.min.js 到 dist 插件 gulp-uglify
gulp.task('jsmin', () => {
    return gulp.src(config.input.js)
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest(config.output.js));
});
//4.压缩所图片 
gulp.task('imagemin', () => {
    return gulp.src(config.input.images)
        .pipe(imagemin())
        .pipe(gulp.dest(config.output.images))
});


// 合并( cancat ),压缩( unlify ) js
gulp.task('concatjs', () => {
    return gulp.src(config.input.js)
        .pipe(concat('index.js'))
        .pipe(gulp.dest(config.output.js)) //合并后的 js
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest(config.output.js)) //压缩后的 js
});
//less 转 css 
gulp.task('less', () => {
    return gulp.src(config.input.less)
        .pipe(less({
            path: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest(config.output.less));
})
gulp.task('watch', () => {
    gulp.watch(['./src/html/*.html', './src/css/*.css', './src/js/*.js', './src/css/*.less'],
        gulp.series('htmlmin', 'cssmin', 'concatjs', 'less'))
})