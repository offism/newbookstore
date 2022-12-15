const { Router } = require("express");
const { HashedPassword, ComparedPassword } = require("../modules/bcrypt");
const { MakeToken, DecodeToken } = require("../modules/jwt");
const User = require("./../modules/models/User");

const router = Router();

// registration

router.post("/register", async (req, res) => {
  const { username, password } = await req.body;

  try {
    if (!username && !password) {
      return res.json({
        status: "bad",
        msg: "Please, full in all rows",
      });
    }
    if (username.length < 4) {
      return res.json({
        status: "bad",
        msg: "Username must belong minimum 4 characters",
      });
    }
    if (username.length > 20) {
      return res.json({
        status: "bad",
        msg: "Username must belong maximum 20 characters",
      });
    }
    if (password.length < 5) {
      return res.json({
        status: "bad",
        msg: "Password must belong minimum 5 characters",
      });
    }
    const ExistUser = await User.findOne({ username });
    if (ExistUser) {
      return res.json({
        status: "bad",
        msg: "This username is already in use",
      });
    }
    const HashedPass = await HashedPassword(password);

    const newUser = await new User({
      username,
      password: HashedPass,
    });

    const savedUser = await newUser.save();

    const token = await MakeToken(ExistUser);

    res.json({
      status: "ok",
      msg: "You successfully registered",
      user: savedUser,
      token,
    });
  } catch (error) {
    res.json({
      status: "bad",
      msg: error,
    });
  }
});

// login

router.post("/login", async (req, res) => {
  const { username, password } = await req.body;
  try {
    if (!username && !password) {
      return res.json({
        status: "bad",
        msg: "Please, full in all rows",
      });
    }

    const ExistUser = await User.findOne({ username });
    if (!ExistUser) {
      return res.json({
        status: "bad",
        msg: "This username is not found",
      });
    }

    let comparedPass = await ComparedPassword(password, ExistUser.password);

    if (!comparedPass) {
      return res.json({
        status: "bad",
        msg: "Incorrect password",
      });
    }

    const token = await MakeToken(ExistUser);
    // const decodeToken = await DecodeToken(ExistUser.token);

    res.json({
      status: "ok",
      msg: "You successfully login",
      user: ExistUser,
      token,
    });
  } catch (error) {
    res.json({
      status: "bad",
      msg: error,
    });
  }
});

module.exports = router;
