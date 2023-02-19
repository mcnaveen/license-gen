const crypto = require('crypto');

/**
 * Generate license key as per the readme.
 *
 * @param length  - the desired length in characters to represent the
 *                  unique license key (sans hyphens).
 * @param [pairs] - the number of groups the randomised characters are collected into.
 * @return {string} randomised license key
 */
const generateLicenseKey = (length, pairs = 4) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(crypto.randomInt(0, charactersLength));
  }
  return (result.match(new RegExp(`.{1,${pairs}}`, 'g')) || []).join('-');
};

module.exports = generateLicenseKey;
