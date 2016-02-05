var express = require('express');
var mail = require('./mail');
var app = express();

var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

app.set('port', process.env.PORT || 3000);

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
	console.log(req.query);
	var name = req.query.name;
	var email = req.query.email;
	var phone = req.query.phone;
	var message = req.query.message;

	mail.send(name, email, phone, message);
	res.send("Hello Mail");
});

app.get('/', function (req, res) {
  res.sendFile('public/index.html', options);
});

app.use(express.static('./public'));
 
app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});