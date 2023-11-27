const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())

var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'jishnud2020@gmail.com',
        pass: 'tvmk udhp mqdh fjlp',
    },
    secure: true,
});

server.listen(process.env.PORT || 3030);
