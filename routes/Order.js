const express = require("express");
const router = express.Router();
const controller = require("../controllers/Order");

router.post("/create-order", controller.createOrder); // if some one order this api will hit
router.post("/assign-order", controller.assignOrder); // if no one accept order then admin has to assign order manually
router.post("/accept-order", controller.acceptOrder); // if delivery boy accept order this api will hit

module.exports = router;

// when create order api wiil heat
// zone_id = 1
// delivery_body_id = null
