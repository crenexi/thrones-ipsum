const del = require('del');
const logger = require('../logger');

/** Cleans out dist directory */
function cleanAll() {
  logger.message('Cleaning All', 'cyan');

  return del(['dist']);
}

exports.cleanAll = cleanAll;
