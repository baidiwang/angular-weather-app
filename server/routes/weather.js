const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_KEY = "9da61fef8f174472a3c111630231610";
const BASE_URL = "http://api.weatherapi.com/v1";

router.get('/current-weather', async (req, res) => {
  try {
    const query = req.query.q;
    const result = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${query}`);
    res.json(result.data);
  } catch (e) {
    res.status(500).send();
  }
})

router.get('/forecast-weather', async (req, res) => {
  try {
    const query = req.query.q;
    const result = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}`);
    res.json(result.data);
  } catch (e) {
    res.status(500).send();
  }
})

module.exports = router
