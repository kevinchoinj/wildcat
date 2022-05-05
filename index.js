const express = require("express");
const path = require('path');
const compression = require('compression');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const json = require('./config.json');
const app = express();
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// Serve static files from the React app
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const createTransporter = async () => {
  const oauth2Client = new OAuth2(
    json.clientId,
    json.clientSecret,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: json.refreshToken,
  });

  const accessToken = await new Promise((resolve, reject) => {
    oauth2Client.getAccessToken((err, token) => {
      if (err) {
        reject();
      }
      resolve(token);
    });
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      type: "OAuth2",
      user: json.emailSender,
      accessToken,
      clientId: json.clientId,
      clientSecret: json.clientSecret,
      refreshToken: json.refreshToken,
    },
  });

  return transporter;
};

const sendEmail = async (emailOptions, cb) => {
  let emailTransporter = await createTransporter();
  await emailTransporter.sendMail(emailOptions, (error, response) => {
    cb(error, response);
  });
};

/*======================================
=             NODEMAILER              =
======================================*/

app.post('/api/v1/contact', (req, res)=>{
  var mailOptions={
		to: json.emailRecipient,
		subject : `${req.body.name} <${req.body.email}>`,
    text :
      `Email is from: ${req.body.email}
      Name: ${req.body.name}
      Subject: ${req.body.subject}
      Message: ${req.body.message}`,
	}
	sendEmail(mailOptions, function(error, response){
   	if(error){
      res.status(400).send({
        success: 'false',
        message: error,
      });
    }
    else{
      res.status(200).send(response);
    }
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static('public'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const port = process.env.PORT || 1600;
app.listen(port);

console.log(`Server test ${port} started`);
