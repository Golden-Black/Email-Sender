const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
// const path = require('path');

app.use(express.static("accessories"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    console.log("Connected")
    res.sendFile('index.html', { root: '.' });

})

app.get("/index.html", (req, res) => {
    res.sendFile('index.html', { root: '.' });

})

app.get("/email.html", (req, res) => {
    res.sendFile('email.html', {root: '.'});
})

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

app.post("/email.html", function(req, res){
    let emailTo = req.body.email;
    let subjectLine = req.body.subject;
    let message = req.body.body;

    const sgMail = require('@sendgrid/mail');

    sgMail.setApiKey(SENDGRID_API_KEY);
    console.log(process.env.SENDGRID_API_KEY);

    const msg = {
        to: emailTo,
        from: 'contact@cyberpost.xyz',
        subject: subjectLine,
        text: message,
        // html: message,
    }

    sgMail
    .send(msg)
    .then(() => {
        // res.sendFile(path.join(__dirname, + 'success.html'));
        // res.sendFile('failure.html' + error, {root: '.'});
        res.sendFile(__dirname + '/success.html');
        // res.sendFile('success.html', {root: './pages'});
        console.log('Email sent');
    })
    .catch((error) => {
        // res.sendFile('failure.html' + error, {root: '.'});
        res.sendFile(__dirname + '/failure.html');
        console.error(error);
  })

  const jsonData = JSON.stringify(msg);
  console.log(jsonData);

})


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is listenning on port 3000.");
});