const express = require('express');
const router = express.Router();
const Facemask = require('../../models/facemask');
const Jewellery = require("../../models/jewellery");
const { isLoggedIn } = require('../../middleware');

router.get('/facemask', async(req, res) => {
    const allfacemask=await Facemask.find({});
    res.send(allfacemask);
})

router.get('/jewellery', async(req, res) => {
    const alljewellery=await Jewellery.find({});
    res.send(alljewellery);
})

router.get('/jewellery/:id', async (req, res) => {
    const showJewellery = await Jewellery.findById(req.params.id);
    res.send(showJewellery);
})


module.exports = router;