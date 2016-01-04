/*!
 * Handle Errors
 * Send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows
 * using the node-notifier module. Fallbacks to Growl or simply logging.
 * https://github.com/mikaelbr/gulp-notify
 *
 * Author: Eddie Leffler
 *
 */

var notify = require('gulp-notify');
var argv = require('yargs').argv;

const handleErrors = function() {
  const args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error %>',
    sound: true
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');

  // When not watching we should return proper exit code
  if (!argv.watch) {
    process.exit(1);
  }
};

module.exports.handleErrors = handleErrors;
