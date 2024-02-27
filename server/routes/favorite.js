const express = require('express')
const Favorite = require("../models/favorite");
const router = express.Router()

router.get('/', async (req, res) => {
  const favorites = await Favorite.find({});
  res.json(favorites);
});

router.get('/:name', async (req, res) => {
  try {
    const favorite = await Favorite.findOne({ name: req.params.name });
    res.json(favorite);
  } catch (e) {
    res.status(500).send();
  }
});

router.post('/', async (req, res) => {
  try {
    const favorite = new Favorite(req.body);
    await favorite.save();
    res.status(201).send();
  } catch (e) {
    res.status(500).send();
  }
});

router.delete('/:name', async (req, res) => {
  try {
    await Favorite.findOneAndDelete({ name: req.params.name });
    res.status(200).send();
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router
