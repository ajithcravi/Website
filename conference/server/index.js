const express = require("express");
const createError = require("http-errors");
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
  return res.sendStatus(204);
});

app.use((req, res, next) => {
  return next(createError(404, "File not found"));
});
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  res.locals.status = status;
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  return res.render("error");
});
app.listen(3000, () => {
  console.log("I am an express server listening in port 3000");
});

module.exports = app;
