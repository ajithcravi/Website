const path = require("path");

module.exports = {
  production: {
    title: "Roux Meetups",
    data: {
      speakers: path.join(__dirname, "../data/speakers.json"),
      feedback: path.join(__dirname, "../data/feedback.json")
    }
  },
  development: {
    title: "Roux Meetups (Dev)",
    data: {
      speakers: path.join(__dirname, "../data/speakers.json"),
      feedback: path.join(__dirname, "../data/feedback.json")
    }
  }
};
