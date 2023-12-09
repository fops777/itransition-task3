const crypto = require("crypto");
function calculateHMAC(key, message) {
  let hmac = crypto.createHmac("sha256", key);
  hmac.update(message);
  HMAC = hmac.digest("hex");
  console.log("HMAC:", HMAC);
}

module.exports = { calculateHMAC };
