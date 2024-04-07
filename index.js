import http from "http";
import behavior from "./behavior.js";

const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/":
			behavior.handleRoot(req, res);
			break;

		default:
			res.write("Not found");
			break;
	}
	res.end();
});

server.listen(8900);
