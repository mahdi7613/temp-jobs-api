const epxress = require("express");
const { register, login } = require("../controllers/auth");

const router = epxress.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
