function generateLicenseKey(length, pairs) {
  let result = "";
  let pair = pairs || 4;
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result.match(new RegExp(`.{1,${pair}}`, "g")).join("-");
}

module.exports = generateLicenseKey;