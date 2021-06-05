const express = require("express");
const { requiredSignin, adminMiddleware } = require("../../common-middleware");
const {
  updateOrder,
  getCustomerOrders,
} = require("../../controller/admin/order.admin");
const router = express.Router();

router.post(`/order/update`, requiredSignin, adminMiddleware, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requiredSignin,
  adminMiddleware,
  getCustomerOrders
);

module.exports = router;
