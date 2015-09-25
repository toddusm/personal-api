var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.listen(8080);

var myName = "Todd Hayes";
var myLocation = "Sandy, UT";
var myHobbies = ["Soccer", "Reading", "TV", "Video Games"];
var myOccupations = ["QA Manager", "Director of Content", "Member Relations Manager", "Customer Care Manager"];
var mySkills = [
	{
		id: 1,
		name: 'Javascript',
		experience: 'Brogrammer'
	}
]

app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.get('/name', function(req, res) {
    res.send(JSON.stringify(myName));
});

app.get('/location', function(req, res) {
    res.send(JSON.stringify(myLocation));
});

app.get('/hobbies', function(req, res) {
	if(req.query.order === 'desc'){
		var hobby = myHobbies.sort().reverse()
		res.send(JSON.stringify(hobby));
	} else { 
		res.send(JSON.stringify(myHobbies))
		}
	});

app.get('/occupations', function(req, res) {
	if(req.query.order === 'desc'){
		var occ = myOccupations.sort().reverse()
		res.send(JSON.stringify(occ));
	} else {
		res.send(JSON.stringify(myOccupations))
		}
});

app.get('/occupations/latest', function(req, res) {
    res.send(JSON.stringify(myOccupations[0]));
});

app.get('/skills', function(req, res){
	res.send(JSON.stringify(mySkills));
})

app.put('/name', function(req, res){
	myName = req.body;
	res.send(myName);
})

app.put('/location', function(req, res){
	location = req.body;
	res.send(location);
})

app.post('/hobbies', function(req, res){
	myHobbies.push(req.body);
	res.send(myHobbies);
})

app.post('/occupations', function(req, res){
	myOccupations.push(req.body);
	res.send(myOccupations);
})

app.post('/skills', function(req, res){
	mySkills.push(req.body);
	res.send(mySkills);
})

