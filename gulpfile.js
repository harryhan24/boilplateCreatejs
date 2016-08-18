
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var gulp        = require('gulp');

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Default task to be run with `gulp`
// This default task will run BrowserSync & then use Gulp to watch files.
// When a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('scripts/*.js', function (file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch("*.html", ['bs-reload']);
});