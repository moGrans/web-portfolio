const express = require('express');
const path = require('path');
const app = express();
const winston = require('winston');
const expressWinston = require('express-winston');

const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'turnsiy123@gmail.com',
        pass: fs.readFileSync(path.join(__dirname, 'credential.txt'))
    }
})

app.use(express.json());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: false, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.post('/contact', function(req, res) {

    transporter.sendMail({
        from: 'turnsiy123@gmail.com',
        to: 'mcgradytansy@gmail.com',
        subject: 'New portfolio contact',
        text: 
`Subject: ${req.body.subject}

${req.body.name} from ${req.body.email}

${req.body.message}`
    }, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
})

app.listen(3000);