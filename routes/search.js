const express = require("express");
const router = express.Router();
const moment = require("moment");
const Trip = require("../models/trips");

router.post("/", async (req, res) => {
  const { departure, arrival } = req.body;
  const date = moment.utc(req.body.date, "YYYY-MM-DD");
  let trips = await Trip.find({
    departure: { $regex: departure, $options: "i" },
    arrival: { $regex: arrival, $options: "i" },
    date: {
      $gte: date.startOf("day").toDate(),
      $lt: date.endOf("day").toDate(),
    },
  });
  if (trips.length === 0) {
    return res.json({ result: false, message: "No trips found" });
  } else {
    trips = trips.sort((a, b) => a.date - b.date);
    return res.json({ result: true, trips });
  }
});

module.exports = router;
