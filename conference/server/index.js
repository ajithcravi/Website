const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
if (app.get("env") === "development") {
  app.locals.pretty = true;
}
app.set("views", path.join(__dirname, "./views"));

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
