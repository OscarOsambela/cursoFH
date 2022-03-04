const Users = require("../models/Users");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user_ = await Users.findOne({ email });
    if (user_) {
      return res.status(400).json({
        ok: false,
        msg: "Email already exist",
      });
    }
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please connect with your administrator",
    });
  }
  user_ = new Users(req.body);

  //encriptar contraseña
  const salt = bcrypt.genSaltSync();
  user_.password = bcrypt.hashSync(password, salt);

  await user_.save();

  //generar JWT
  const token = await generateJWT(user_.id, user_.name);

  res.status(201).json({
    ok: true,
    uid: user_.id,
    name: user_.name,
    token,
  });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user_ = await Users.findOne({ email });
    if (!user_) {
      return res.status(400).json({
        ok: false,
        msg: "User or password dont exist",
      });
    }

    //confirmar contraseñas
    const validPassword = bcrypt.compareSync(password, user_.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Incorrect password",
      });
    }
    //generar JWT
    const token = await generateJWT(user_.id, user_.name);

    res.json({
      ok: true,
      uid: user_.id,
      name: user_.name,
      token,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Please connect with your administrator",
    });
  }
};

const revalidateToken = async (req, res) => {
  const { uid, name } = req;

  //generar nuevo jwt
  const token = await generateJWT(uid, name);

  res.json({
    ok: true,
    token,
  });
};

module.exports = { createUser, loginUser, revalidateToken };
