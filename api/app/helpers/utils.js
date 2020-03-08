const crypto = require('crypto');

exports.hash = (ts, config) => {
  return crypto
    .createHash('md5')
    .update(`${ts}${config.privateKey}${config.publicKey}`)
    .digest('hex');
};
