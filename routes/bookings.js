const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Booking = require("../models/bookings");
const Cart = require("../models/carts");

router.get("/", async (req, res) => {
  const bookings = await Booking.find().populate("tripId");
  return res.json({ bookings });
});

router.post("/book-all", async (req, res) => {
  const cart = await Cart.find();
  await Booking.insertMany(cart);
  await Cart.deleteMany();
  return res.json({ result: true });
});

module.exports = router;
