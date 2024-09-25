const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const moment = require("moment");
const Cart = require("../models/carts");
const Trip = require("../models/trips");
const Booking = require("../models/bookings");

router.get("/", async (req, res) => {
  const carts = await Cart.find().populate("tripId");
  if (carts.length === 0)
    return res.json({ result: false, message: "Nothing in cart" });
  return res.json({ result: true, carts });
});

router.delete("/delete", async (req, res) => {
  const { id } = req.body;

  await Cart.deleteOne({ tripId: id });

  return res.json({ result: true });
});

router.post("/add-to-cart", async (req, res) => {
  const { id } = req.body;
  const newCart = new Cart({ tripId: id });
  newCart.save();
  res.json({ result: true });
  return;
});

module.exports = router;
