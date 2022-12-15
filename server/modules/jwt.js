const jwt = require("jsonwebtoken");
const SECRET_TOKEN = process.env.SECRET_TOKEN;

let MakeToken = async (savedUser) => {
  return await jwt.sign({ savedUser }, SECRET_TOKEN);
};
let DecodeToken = async (token) => {
  return await jwt.sign(token, SECRET_TOKEN);
};

module.exports = { MakeToken, DecodeToken };
