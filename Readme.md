# Website - Wildcat
Site accessible at https://www.ashleywildcat.com/

![Imgur Image](https://i.imgur.com/czh0Jya.png)

## Necessary Files

config.json, client/src/config.json, client/src/fire.js should be filled in with corresponding data of config_example.json, client/src/config_example.json, client/src/fire_example.js

It is recommended to create an extra email address for the purpose of sending emails via the contact form to your main recipient email address.

Additional basic information found here: https://codeburst.io/sending-an-email-using-nodemailer-gmail-7cfa0712a799

## Getting Started

Install packages for both Express server and React client then run both

**Server**
```
npm install
npm start
```

**Client**
```
npm install
npm start
```

**Firebase**

https://console.firebase.google.com/u/0/?pli=1
```
Project settings
Your Apps
</>
Copy config data from web app popup to fire.js
Authentication
Sign-in-method
Email/Password: Enabled
```

To create administrative account, insert RegistrationForm in react client to replace LoginForm to create new firebase account then replace with LoginForm afterward. Corresponding email goes in client/src/config.json.