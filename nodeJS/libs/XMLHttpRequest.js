	https://github.com/driverdan/node-XMLHttpRequest
	var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
				var request = new XMLHttpRequest();
				// `false` makes the request synchronous
				request.open('GET', "http://www.random.org/integers/?num=1&min=" + "1" + "&max=" + bidsCount + "&col=1&base=10&format=plain&rnd=new", false, '' , '');
				request.send(null);
				var	resp = request.status.replace("\n", "");
				if (resp === '200') {}