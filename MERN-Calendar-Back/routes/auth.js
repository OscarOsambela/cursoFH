/*
    Rutas de usuarios /Auth
    localhost:5000/api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const {
  createUser,
  loginUser,
  revalidateToken,
} = require("../controllers/auth");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");

//Obtener eventos
router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").not().isEmpty(),
    check("email", "El formato de correo no es correcto").isEmail(),
    check(
      "password",
      "El password debe contener más de seis caracteres"
    ).isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

router.post(
  "/",
  [
    check("email", "El formato de correo no es correcto").isEmail(),
    check(
      "password",
      "El password debe contener más de seis caracteres"
    ).isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

router.get("/renew", validateJWT, revalidateToken);

module.exports = router;
