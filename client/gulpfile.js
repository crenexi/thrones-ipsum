const gulp = require('gulp');
// const series = gulp.series;
const HubRegistry = require('gulp-hub');
const tasksGlob = 'gulp/tasks/*.js';

// Load tasks
const cleanTasks = require('./gulp/tasks/clean');
const publishTasks = require('./gulp/tasks/publish');

// Load tasks into registry
const hub = new HubRegistry([tasksGlob]);
gulp.registry(hub);

/*==============================================================================
=== Cleaning ===*/

gulp.task('clean:all', cleanTasks.cleanAll);

/*==============================================================================
=== Publishing ===*/

gulp.task('publish:prod', publishTasks.publishProd);

/*==============================================================================
=== Default and production ===*/

gulp.task('default', done => done()); // no default for now
