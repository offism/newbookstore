const bcrypt = require("bcrypt");
const SALT = process.env.SALT;

let HashedPassword = async (password) => {
  return await bcrypt.hash(password, parseInt(SALT));
};

let ComparedPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

module.exports = { HashedPassword, ComparedPassword };
