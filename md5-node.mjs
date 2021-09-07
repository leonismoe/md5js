import crypto from 'crypto';

/**
 * @param {crypto.BinaryLike} data
 * @returns {string}
 */
export default function md5(data) {
  return crypto.createHash('md5').update(data).digest('hex');
}
