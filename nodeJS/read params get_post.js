var express = require('express'), http = require('http'), url = require('url'), util = require('util');

var app = express();

//needed
app.use(express.urlencoded());
app.use(express.json());  

//http://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-node-js
//simple GET
//http://contests.azurewebsites.net/contest?comp_id=11&user_id=99
app.get('/contest', function(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'application/json; charset=utf-8'
	});
	res.end(JSON.stringify({
		message : "CompetitionID:" + req.query.comp_id + " UserID:" + req.query.user_id
	}));
	return;
});


//http://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
//post comp_id + user_id vars
//http://contests.azurewebsites.net/makis
app.post('/makis', function(req, res) {	
	res.writeHead(200, {
		'Content-Type' : 'application/json; charset=utf-8'
	});
	res.end(JSON.stringify({
		message : "CompetitionID:" + req.body.comp_id + " - UserID:" + req.body.user_id // + req + res; //+ comp_id + " - " + getDateTime() + ' - ' + user_id + "\r\n"
	}));
	return;
});