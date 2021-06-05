const express = require('express');
const { requiredSignin, userMiddleware } = require('../common-middleware');
const { addAddress, getAddress } = require("../controller/address");
const router = express.Router();


router.post('/user/address/create', requiredSignin, userMiddleware, addAddress);
router.post('/user/getaddress', requiredSignin, userMiddleware, getAddress);

module.exports = router;