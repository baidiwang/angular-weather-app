const express = require("express");
const Favorite = require("../models/favorite");
const {convertToXML} = require("../utils");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const format = req.query.format || "json";
    const favorites = await Favorite.find({});

    if (format === "xml") {
      const xml = convertToXML(favorites.map(f => ({ favorite: JSON.parse(JSON.stringify(f.toJSON())) })), "favorites");
      res.header("Content-Type", "application/xml");
      res.send(xml);
    } else {
      res.json(favorites);
    }
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/:name", async (req, res) => {
  try {
    const format = req.query.format || "json";
    const favorite = await Favorite.findOne({ name: req.params.name });

    if (format === "xml") {
      const xml = convertToXML(JSON.parse(JSON.stringify(favorite.toJSON())), "favorite");
      res.header("Content-Type", "application/xml");
      res.send(xml);
    } else {
      res.json(favorite);
    }
  } catch (e) {
    res.status(500).send();
  }
});

// The POST and DELETE routes do not return data and therefore do not require XML conversion.

module.exports = router;
