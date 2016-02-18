'use strict';

import babel from 'babelify';
import gulp from 'gulp';
import uglify from 'gulp-uglify';
import cssnano from 'gulp-cssnano';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import browserify from 'browserify';
import watchify from 'watchify';
import scss from 'gulp-scss';

function compile(watch) {
  let bundler = watchify(browserify('./source/main.js', { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', (err) => {
        console.error(err);
        // this.emit('end');
      })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./client/js'))
  }

  if (watch) {
    bundler.on('update', () => {
      console.log('-> bundling...');
      rebundle();
    })
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('buildCss', () => {
  return gulp.src('./source/styles/**/*.scss')
           .pipe(scss())
           .pipe(cssnano())
           .pipe(gulp.dest('./client/styles'));
});

gulp.task('build', () => compile() );
gulp.task('watch', () => watch() );

gulp.task('default', [ 'watch', 'buildCss' ]);