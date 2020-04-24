const express = require("express");

const routes = express.Router();

routes.get("/helloworld", (req, res) => {
  try {
    return res.status(200).json({ message: "Hello World" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = routes;
