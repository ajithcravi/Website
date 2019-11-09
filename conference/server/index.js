const express = require("express");
const app = express();



const routes = require("./routes");
app.use(express.static("public"));
app.use("/", routes());

app.get("/favico", (req, res, next) => {
  res.sendStatus(204);
});
app.listen(3000, () => {
  console.log("I am an express server listening in port 3000");
});

module.exports = app;
