const express = require("express");
const router = express.Router();
const order = require("./Order");

router.use("/order", order);

module.exports = router;
