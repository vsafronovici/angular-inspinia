var express = require('express');
var bodyParser = require('body-parser');
//var fs = require("fs");

var app = express();
app.use(bodyParser.json())
app.use(function(req, res, next) {
	//console.log('-- setting cors')
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE, OPTIONS');
  next();
});


var users = []
for (let i = 1; i < 10; i++) {
  users.push({
	id: i,
	name: `name${i}`,
	lastname: `lastname${i}`,
	email: `mail${i}@yahoo.com`,
	role: i % 3 == 0 ? 'ADMIN' : 'USER',
	status: i % 4 == 0 ? 'ENABLED' :  i % 3 == 0 ? 'DISABLED' : 'SUSPENDED'
  })
}

app.get('/users', function (req, res) {
	const hal = {
    "_embedded": {
    	user: users,
		}, "page" : {
      "size" : users.length,
      "totalElements" : 6,
      "totalPages" : 1,
      "number" : 0
    }
  }

  res.send(JSON.stringify(hal))
})

app.get('/user/:id', function (req, res) {
	const user = users.find(function(u) { return u.id === parseInt(req.params.id) })
  const hal = {
    "_embedded": {
      user: user,
    }
  }

  res.send(JSON.stringify(hal));
})

app.post('/user/:id', function (req, res) {
	const newUser = req.body
	const user = users.find(function(u) { return u.id === newUser.id })	
	Object.assign(user, {...newUser})

  const hal = {
    "_embedded": {
      status: 'success',
    }
  }

  res.send(JSON.stringify(hal));
})

var server = app.listen(4201, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})