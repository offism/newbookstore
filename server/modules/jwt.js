const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.SECRET_TOKEN;

let MakeToken = async (savedUser) => {
  return await jwt.sign({ savedUser }, SECRET_TOKEN);
};

module.exports = { MakeToken };
