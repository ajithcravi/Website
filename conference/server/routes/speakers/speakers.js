const express = require("express");
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res, next) => {
    return res.render("speakers", {
      page: "All Speakers"
    });
  });

  router.get("/:name", (req, res, next) => {
    return res.render("speakers/details", {
      page: req.params.name
    });
  });

  return router;
};
