import express from 'express';
import bodyParser from 'body-parser';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3300;

app.use(bodyParser.json());

const mailerSend = new MailerSend({
  apiKey: process.env.API_KEY,
});

app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email is required');
  }

  const sentFrom = new Sender(process.env.FROM_EMAIL, process.env.FROM_NAME);
  const recipients = [new Recipient(email, email)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject('Subscription Confirmation')
    .setHtml('<strong>Thank you for subscribing! We will let you know when the Chrome extension is available for download.</strong>')
    .setText('Thank you for subscribing! We will let you know when the Chrome extension is available for download.');

  try {
    await mailerSend.email.send(emailParams);
    res.status(200).send('Subscription successful');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error subscribing');
  }
});

app.post("/", async(req, res) => {
    res.send("hello world")
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
