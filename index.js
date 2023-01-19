require("dotenv").config();

const http = require("http");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5000;
const server = http.createServer((req, res) => {
	let file;

	if (req.url === "/") file = "index.html";
	else if (req.url === "/about") file = "about.html";
	else if (req.url === "/contact") file = "contact-me.html";
	else file = "404.html";

	fs.readFile(path.join(__dirname, "public", file), (err, data) => {
		if (err) throw err;

		res.writeHead(200, {
			"Content-Type": "text/html",
		});
		res.end(data);
	});
});

console.log(process.PORT);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
