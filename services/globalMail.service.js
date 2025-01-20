const jwt = require('jsonwebtoken');
const { sendMailer } = require('../utils/email');


exports.sendVerificationEmail = async (user, token) => {
    const verificationLink = `${process.env.FRONTEND_URL}/api/v1/verify-email?token=${token}`;
    const subject = 'Verify Your Email';
    const content = `
        <p>Dear ${user.name},</p>
        <p>Thank you for registering. Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}">Verify Email</a>
    `;
    await sendMailer(user.email, subject, content);
};


