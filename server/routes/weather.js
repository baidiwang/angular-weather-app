const express = require("express");
const router = express.Router();
const axios = require("axios");
const {convertToXML} = require("../utils");

const API_KEY = "9da61fef8f174472a3c111630231610";
const BASE_URL = "http://api.weatherapi.com/v1";

router.get("/current-weather", async (req, res) => {
  try {
    const query = req.query.q;
    const format = req.query.format || "json";
    const result = await axios.get(
      `${BASE_URL}/current.json?key=${API_KEY}&q=${query}`
    );
    const data = result.data;

    if (format === "xml") {
      // Start XML string
      const xml = convertToXML(data, 'currentWeather');

      res.header("Content-Type", "application/xml");
      res.send(xml);
    } else {
      res.json(data);
    }
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/forecast-weather", async (req, res) => {
  try {
    const query = req.query.q;
    const format = req.query.format || "json";
    const result = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}`
    );
    const data = result.data;

    if (format === "xml") {
      // Start XML string
      const xml = convertToXML(data, 'forecastWeather');

      res.header("Content-Type", "application/xml");
      res.send(xml);
    } else {
      res.json(data);
    }
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
