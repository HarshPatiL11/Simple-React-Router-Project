import nodemailer from 'nodemailer';
import mailgunTransport from 'nodemailer-mailgun-transport';
import dotenv from 'dotenv';

dotenv.config();
// import sendgridtransport from 'nodemailer-sendgrid-transport';

console.log('Mailgun API Key:', process.env.MailAPI);
console.log('Mailgun Domain:', process.env.MailDomain);

// Transport Mail gun
const transporter = nodemailer.createTransport(
    mailgunTransport({
        auth: {
            api_key: process.env.MailAPI,
            domain: process.env.MailDomain
        }
    })
);


const sendEmailController = async (req, res) => { 
    try {
        const { name, email, msg } = req.body;

        // Validation
        if (!name || !email || !msg) {
            return res.status(400).send({
                success: false,
                message: "Please enter all fields"
            });
        }

        // Email content
        const mailOptions = {
            from: 'patilharsh497@gmail.com',
            to: 'patilharsh497@gmail.com',
            subject: `Message from ${name} via portfolio-app`,
            html: `
                <h5>Details</h5>
                <ul>
                    <li><p>Name: ${name}</p></li>
                    <li><p>Email: ${email}</p></li>
                    <li><p>Message: ${msg}</p></li>
                </ul>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return res.status(200).send({
            success: true,
            message: "Your message was sent successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: ' Email API error',
            error: error.message
        });
    }
};

export default sendEmailController;
