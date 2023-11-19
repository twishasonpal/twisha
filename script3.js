const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Define the transporter (email configuration)
const transporter = nodemailer.createTransport({
    service: 'YourEmailService', // e.g., 'Gmail', 'Outlook', etc.
    auth: {
        user: 'twishasonpal123@gmail.com',
        pass: 'fcdy ankx tvqn rozo',
    },
});

// Handle form submission
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: req.query.email, // sender's email
        to: 'twishasonpal123@gmail.com', // recipient's email
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.redirect('/?status=error');
        } else {
            console.log('Email sent: ' + info.response);
            res.redirect('/?status=success');
        }
    });
});

// Serve the HTML form
app.use(express.static(__dirname));
app.get('/', (req, res) => res.sendFile(__dirname+'/index.html'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
