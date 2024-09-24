const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Cart = require("../models/carts");
const Trip = require("../models/trips");
const Booking = require("../models/bookings");

router.post("/add-to-cart", async (req, res) => {
  const { id } = req.body;
  const newCart = new Cart({ tripId: id });
  newCart.save();
  res.json({ result: true });
  return;
});

module.exports = router;
