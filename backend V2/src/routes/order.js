const { requiredSignin, userMiddleware } = require("../common-middleware");
const { addOrder, getOrders, getOrder } = require("../controller/order");
const router = require("express").Router();

router.post("/addOrder", requiredSignin, userMiddleware, addOrder);
router.get("/getOrders", requiredSignin, userMiddleware, getOrders);
router.post("/getOrder", requiredSignin, userMiddleware, getOrder);

module.exports = router;
