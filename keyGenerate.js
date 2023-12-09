function keyGenerate() {
  const { randomBytes } = require("crypto");
  let key = randomBytes(32).toString("hex");
  // console.log("key: ", key);
  return key;
}

module.exports = { keyGenerate };
