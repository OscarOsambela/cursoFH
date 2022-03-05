//CRUD
/*
    Rutas de usuarios /Events
    localhost:5000/api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();
const {
  getEvents,
  createEvents,
  updateEvents,
  deleteEvents,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validateFields } = require("../middlewares/validate-fields");
const { validateJWT } = require("../middlewares/validate-jwt");

//validar todos los events con el validateJWT. aplica para todos los eventos debajo del router.use
//si no quiero que este protgida o es publica subo antes del router.use(validateJWT)
router.use(validateJWT);

//Obtener eventos
router.get("/", getEvents);

router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    validateFields,
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    check("end", "La fecha final es obligatoria").custom(isDate),
    validateFields,
  ],
  createEvents
);

router.put("/:id", updateEvents);

router.delete("/:id", deleteEvents);

module.exports = router;
