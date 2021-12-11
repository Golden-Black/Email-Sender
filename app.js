const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("accessories"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: '.' });
})

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

app.post("/", function(req, res){
    var emailTo = req.body.email;
    var subjectLine = req.body.subject;
    var message = req.body.message;

    const sgMail = require('@sendgrid/mail');

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
  })

    // console.log(emailTo, subjectLine, message);
})

app.listen(3000, function(){
    console.log("Server is listenning on port 3000.");
});