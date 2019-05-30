var gulp = require('gulp');
//1.布置任务
//参数1 任务名
//参数2 任务的处理函数

gulp.task('default', function() {
    return new Promise((resolve, reject) => {
        var a = 10;
        var b = 5;
        console.log(a + b);
        resolve();
    })
})

//将src/html/index.html 复制到 dist/html/index.html
//src() 选择路径
//dest()    目的地
//pipe()    通道 管道gu
gulp.task('copyindex', function() {
    return gulp.src('./src/html/index.html').pipe(gulp.dest('./dist/html')); //task方法 利用管道将选择到的路径传送到指定的位置
})

gulp.task('copyjs', function() {
    return gulp.src(['src/js/*.js', '!src/js/*min.js']).pipe(gulp.dest('dist/js')); //多个条件用数组包括
})

//所有的gulp插件都以项目依赖安装


//gulp-rename案例

var rename = require("gulp-rename");

gulp.task('rename', function() {
    return gulp.src('src/js/index.js')
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('dist/js'))
})