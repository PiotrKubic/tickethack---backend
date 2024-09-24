const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const Cart = require("../models/carts");
const Booking = require("../models/bookings");

router.get("/", async (req, res) => {
  const allCart = await Cart.find().populate("tripId");
  res.json({ result: true, allCart });
});

router.delete("/delete", async (req, res) => {
  const { id } = req.body;

  const allCart = await Cart.find({ tripId: id }).populate("tripId");
  console.log(allCart);
  //   const toDelete = await Cart.find({})

  res.json({ wip: "wip" });
});

module.exports = router;
