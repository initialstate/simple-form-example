var express = require('express'),
	bodyParser = require('body-parser'),
	IS = require('initial-state');

var bucket = IS.bucket('Simple Form Example', process.env.INITIALSTATE_ACCESS_KEY);

// Initialize our Express app.
var app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/temperature', function(req, res) {
  res.sendFile(__dirname + '/simple_form.html');
});

app.post('/temperature', function(req, res) {
	var temp = req.body.temp;
	bucket.push('temperature', temp);
	res.redirect('/temperature');
});

// Listen for incoming requests and serve them.
app.listen(process.env.PORT || 3000);