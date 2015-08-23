/*
"use strict";

var http = require("http").createServer(server),
	fs = require("fs");

function server (req,res)
{
	res.writeHead(200,{"Content-type":"text/html"});
	fs.readFile("./statics/index.html",function (err,data){
		if(err) throw err;
		res.end(data);
	});
}

http.listen(3000);
console.log("Servidor corriendo desde http://127.0.0.1:3000/");
*/

"use strict";

var http = require("http").createServer(server),
	fs = require("fs");

function server (req,res)
{
	function readFile(err,data)
	{
		if(err) throw err;
		res.end(data);
	}
	
	res.writeHead(200,{"Content-type":"text/html"});
	fs.readFile("./statics/index.html",readFile);
}

http.listen(3000);
console.log("Servidor corriendo desde http://127.0.0.1:3000/");