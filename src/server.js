import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.PORT,
            secure: false, // TLS
            auth: {
                user: process.env.SEC_EMAIL,
                pass: process.env.APP_PWD
            }
        });

        await transporter.sendMail({
            from: `"Portfolio Esteban DOUILLET" <${process.env.PUB_EMAIL}>`, // expéditeur
            to: email, // destinataire
            subject: "Merci pour votre message !",
            html: generateAckEmailHTML(name)
        });

        // M'avertir moi-même
        await transporter.sendMail({
            from: `"Portfolio Esteban DOUILLET" <${process.env.PUB_EMAIL}>`, // expéditeur
            to: process.env.PUB_EMAIL, // destinataire
            subject: "Nouveau message depuis le portfolio",
            html: generateEmailHTML(name, email, message)
        });

        res.status(200).json({ message: "Email envoyé !" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erreur lors de l'envoi" });
    }
});

app.listen(5000, () => console.log("Serveur Node.js lancé sur http://localhost:5000"));

function generateEmailHTML(name, email, message) {
    return `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouveau message portfolio</title>
    <style>
      body {
        font-family: 'Helvetica', Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 2rem auto;
        background-color: #ffffff;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      }
      h1 {
        font-size: 1.8rem;
        color: #646cff;
      }
      p {
        font-size: 1rem;
        line-height: 1.5;
      }
      .label {
        font-weight: bold;
        margin-top: 1rem;
        display: block;
      }
      .message-box {
        background-color: #f4f4f4;
        padding: 1rem;
        border-radius: 6px;
        margin-top: 0.5rem;
        white-space: pre-wrap;
      }
      a {
        color: #646cff;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Nouveau message depuis ton portfolio</h1>
      <p><span class="label">Nom :</span> ${name}</p>
      <p><span class="label">Email :</span> <a href="mailto:${email}">${email}</a></p>
      <p class="label">Message :</p>
      <div class="message-box">${message}</div>
    </div>
  </body>
  </html>
  `;
}

function generateAckEmailHTML(name) {
    return `
  <!DOCTYPE html>
  <html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Merci pour votre message</title>
    <style>
      body {
        font-family: 'Helvetica', Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 2rem auto;
        background-color: #ffffff;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        text-align: center;
      }
      h1 {
        color: #646cff;
      }
      p {
        font-size: 1rem;
        line-height: 1.5;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Merci ${name} !</h1>
      <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
      <p>Vous pouvez continuer à visiter mon portfolio : <a href="https://lowan.fr">lowan.fr</a></p>
    </div>
  </body>
  </html>
  `;
}