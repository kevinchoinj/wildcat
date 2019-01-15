var express = require("express");
var proxy = require("express-http-proxy");

const path = require('path');

var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var json = require('./config.json');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*======================================
=           GOOGLE ANALYTICS           =
======================================*/
function getIpFromReq (req) { // get the client's IP address
    var bareIP = ":" + ((req.connection.socket && req.connection.socket.remoteAddress)
        || req.headers["x-forwarded-for"] || req.connection.remoteAddress || "");
    return (bareIP.match(/:([^:]+)$/) || [])[1] || "127.0.0.1";
}

// proxying requests from /analytics to www.google-analytics.com.
app.use("/analytics", proxy("www.google-analytics.com", {
    proxyReqPathResolver: function (req) {
        return req.url + (req.url.indexOf("?") === -1 ? "?" : "&")
            + "uip=" + encodeURIComponent(getIpFromReq(req));
    }
}));

/*======================================
=             NODEMAILER              =
======================================*/
var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: json.emailSender,
        pass: json.password
    },
    tls: {rejectUnauthorized: false},
    debug:true
});


app.post('/send', (req, res)=>{
  var mailOptions={
		to : json.emailRecipient,
		subject : req.body.name + " <" + req.body.email + ">",
		text : "Email is from: "+ req.body.email + "\nName: "+req.body.name+"\nSubject: " + req.body.subject + "\nMessage: " + req.body.message,
	}
	smtpTransport.sendMail(mailOptions, function(error, response){
   	if(error){
      res.send(error);
    }
    else{
      res.send(response);
    }
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Server test ${port} started`);
