const express = require("express");
const app = express();

app.use((req, res, next) => {
	res.setHeader("x-serverdate", new Date());
	return next();
});

app.get("/", (req, res, nxt) => {
	res.send("I am a web server");
});

app.get("/hello", (req, res, nxt) => {
	const name = req.query.name;
	if (!name) {
		return res.status(400).end();
	}
	return res.send(`Hello ${name}`);
});

app.get("/hello/:name", (req, res, nxt) => {
	const name = req.params.name;
	return res.send(`User ${name}`);
});

app.listen(4000);
