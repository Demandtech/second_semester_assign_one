const behavior = {
	handleRoot: (req, res) => {
		switch (req.method) {
			case "GET":
				res.statusCode = 200;
				res.write("Name --> Rasheed Adekunle");
				break;
			default:
				res.statusCode = 405;
				res.write("Method not allowed");
				break;
		}
	},	
};

export default behavior;
