const nodemailer = require("nodemailer");

module.exports.sendMail = (options) => {
    let mailTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    let mailDetails = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log("Error Occurs" + err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

