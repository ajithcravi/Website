const express = require("express");
const router = express.Router();

const speakers = require("./speakers/speakers");
const feedback = require("./feedback/feedback");

module.exports = () => {
  router.get("/", (req, res, next) => {
    return res.render("index");
  });

  router.use("/speakers", speakers());
  router.use("/feedback", feedback());

  return router;
};
