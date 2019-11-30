const log = require('fancy-log');
const chalk = require('chalk');
const logLength = 69;

/** Generic log with optional color */
function logMessage(msg, c1 = 'white') {
  log(chalkMsg(msg, c1));
}

/** Error log, with red error output */
function logError(err) {
  logMessage('/!\\ BUILD ERROR', 'red.bold');
  log(chalk.red.bold(err));
}

/** Watch log, with equal-length rows */
function logWatch(msg) {
  log(chalk.green.bold(msg));
}

/** Split dot notation */
function chalkMsg(msg, str) {
  return str.split('.')
    .reduce((obj, key) => {
      return obj[key];
    }, chalk)(msg);
}

module.exports = {
  message: logMessage,
  error: logError,
  watch: logWatch,
};
