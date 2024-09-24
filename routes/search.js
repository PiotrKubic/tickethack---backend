const express = require("express");
const router = express.Router();
const moment = require("moment");
const Trip = require("../models/trips");

router.post("/", async (req, res) => {
  const { departure, arrival } = req.body;
  const date = moment(req.body.date, "DD-MM-YYYY");
  const trips = await Trip.find({
    departure,
    arrival,
    date: {
      $gte: date.startOf("day").toDate(),
      $lt: date.endOf("day").toDate(),
    },
  });
  if (trips.length === 0) {
    res.json({ result: false, message: "No trips found" });
  } else {
    res.json({ result: true, trips });
  }
});

module.exports = router;
