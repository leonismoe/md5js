const crypto = require('crypto');

/**
 * @param {crypto.BinaryLike} data
 * @returns {string}
 */
module.exports = function md5(data) {
  return crypto.createHash('md5').update(data).digest('hex');
};
