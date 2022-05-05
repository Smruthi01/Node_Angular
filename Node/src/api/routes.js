const express = require("express");
const registerApi = require("./register");
const loginApi = require("./login");
const dashboardApi = require('./dashboard')
const allhotelsApi = require('./allhotels')
const bookApi = require('./bookhotel')
const router = express.Router();

router.use(registerApi);
router.use(loginApi);
router.use(dashboardApi);
router.use(allhotelsApi);
router.use(bookApi);
module.exports = router;