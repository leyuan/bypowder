var nodemailer = require('nodemailer');

var mail = {};
mail.send = function(name, email, phone, message) {
	var from = name + "<" + email + ">";
	var html = '<p>phone - ' + phone + '</p> <p>' + message + '</p>';
	console.log(from);

	var mailOptions = {
	    from: from,
	    to: 'lucius.yu@outlook.com',
	    subject: 'New Inquiry from Bypoweder Website',
	    html: html
	};

	// var transporter = nodemailer.createTransport('smtps://lucius.yu%40outlook.com:LuciYu@1990@smtp.outlook.com');
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: {
	        user: 'support@aichenginfo.ca',
	        pass: 'aichenginfo101'
	    }
	});
	// send mail with defined transport object 
	transporter.sendMail(mailOptions, function(error, info){
		console.log('hello');
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
};

module.exports = mail;