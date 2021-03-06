var express = require('express');
var mail = require('./mail');
var app = express();
var bodyParser = require('body-parser');

var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.set('port', process.env.PORT || 3000);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.get('/mail', function(req, res) {
	console.log(req.query);
	var name = req.query.name;
	var email = req.query.email;
	var phone = req.query.phone;
	var message = req.query.message;

	mail.send(name, email, phone, message);
	res.send("Hello Mail");
});

app.post('/mail', function(req, res) {
	console.log(req.body);
	var name = req.body.name;
	var email = req.body.email;
	var phone = req.body.phone;
	var message = req.body.message;

	mail.send(name, email, phone, message);
	res.send("Thanks for contacting us. We will contact you ASAP!");
});

app.get('/', function (req, res) {
  res.sendFile('public/index.html', options);
});

app.use(express.static('./public'));
 
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});