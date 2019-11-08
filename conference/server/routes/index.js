const express = require("express");
const router = express.Router();

const speakers = require("./speakers/speakers");

module.exports = () => {
  router.get("/", (req, res, next) => {
    return res.send("Index");
  });

  router.use("/speakers", speakers());

  return router;
};
