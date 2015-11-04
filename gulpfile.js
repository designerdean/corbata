// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');


// BrowserSync
gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./"
    }
  });
});

// BS-Reload
gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Lint Task
gulp.task('lint', function() {
  return gulp.src('assets/javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our Sass & run Autoprefixer
gulp.task('styles', function(){
  gulp.src(['assets/stylesheets/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream:true}))
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('assets/javascripts/**/*.js')
    .pipe(concat('main.js'))
    // .pipe(gulp.dest('assets/javascripts/'))
    .pipe(rename('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Default Task
gulp.task('default', ['browser-sync'], function(){
  gulp.watch("assets/stylesheets/**/*.scss", ['styles']);
  gulp.watch("assets/javascripts/**/*.js", ['scripts']);
  gulp.watch("*.html", ['bs-reload']);
});