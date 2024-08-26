const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "myemail@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

let mailOptions = {
  from: "myemail@gmail.com",
  to: "receiveremail@gmail.com",
  subject: "Hello from Node.js",
  text: "Hello Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
