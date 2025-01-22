const nodemailer = require('nodemailer');
const ApiError = require('./ApiError');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD
    }
});

const sendMailer = async (email, subject, content) => {
    try {
        var mailOptions = {
            from: process.env.SMTP_EMAIL,
            to: email,
            subject: subject, 
            html: content
        };

        let info = await transporter.sendMail(mailOptions);
        console.log("Mail sent successfully! Message ID:", info.messageId);
    } catch (error) {
        throw new ApiError(401,"Error occurred while sending email:" , error);
        console.error("Error occurred while sending email:", error);
    }
}

module.exports = {
    sendMailer
}