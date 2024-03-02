const express = require("express");
const Favorite = require("../models/favorite");
const router = express.Router();

function convertToXML(jsonObject, rootElement) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += `<${rootElement}>`;

  const appendDataToXml = (data, parent) => {
    for (const key in data) {
      if (Array.isArray(data[key])) {
        for (const item of data[key]) {
          xml += `<${key}>`;
          appendDataToXml(item, key);
          xml += `</${key}>`;
        }
      } else if (data[key] instanceof Object) {
        xml += `<${key}>`;
        appendDataToXml(data[key], key);
        xml += `</${key}>`;
      } else {
        xml += `<${key}>${data[key]}</${key}>`;
      }
    }
  };

  appendDataToXml(jsonObject, rootElement);
  xml += `</${rootElement}>`;
  return xml;
}

router.get("/", async (req, res) => {
  try {
    const format = req.query.format || "json";
    const favorites = await Favorite.find({});

    if (format === "xml") {
      const xml = convertToXML({ favorites }, "favorites");
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
      const xml = convertToXML(favorite, "favorite");
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
