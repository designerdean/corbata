var gulp =      require('gulp'),
    gutil =     require('gulp-util'),
    coffee =    require('gulp-coffee'),
    concat =    require('gulp-concat'),
    uglify =    require('gulp-uglify'),
    sass =      require('gulp-ruby-sass'),
    prefix =    require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    connect =   require('gulp-connect');

// Misc Variables

var coffeeSources = ['javascripts/coffee/*.coffee'];
var sassSources = ['stylesheets/sass/*.scss'];

// CoffeeScript

gulp.task('coffee', function() {
  return gulp.src(coffeeSources)
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('javascripts/coffee/compiled'));
});

// JavaScript Uglify, Concat

gulp.task('js', ['coffee'], function() {
  return gulp.src([
      'javascripts/vendor/*.js',
      'javascripts/coffee/compiled/*.js'
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('javascripts'));
});

// CSS, Sass, Autoprefixer, Minify

gulp.task('sass', function() {
  gulp.src([
    'stylesheets/vendor/*.css',
    'stylesheets/sass/*.scss'])
    .pipe(sass())
    .pipe(prefix())
    .pipe(concat('main.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('stylesheets'));
});

// Connect

gulp.task('connect', function() {
  connect.server();
});

// Watch

gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['js']);
  gulp.watch(sassSources, ['sass']);
});

gulp.task('default', ['sass', 'js', 'connect', 'watch']);