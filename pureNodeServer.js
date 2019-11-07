const http = require("http");
const url = require("url");

handler = (req, res) => {
	const parsedUrl = url.parse(req.url, true); //parse the url and 'true' commands to parse the query also
	console.log(parsedUrl);

	if (parsedUrl.pathname === "/") {
		res.writeHead(200, { "Content-type": "text/plain" });
		res.write("Hello, I am a web server");
		res.end();
	} else {
		res.writeHead(404, { "Content-type": "text/plain" });
		res.end();
	}
};

const server = http.createServer(handler);

server.listen(3000);
