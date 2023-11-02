/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const cors = require("cors")({ origin: true }); // Enable CORS for all routes
const sgMail = require("@sendgrid/mail");

// Initialize SendGrid API key
sgMail.setApiKey("YOUR_SENDGRID_API_KEY");

exports.SendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    // Your function logic here
    // You can access the request body using request.body
    // You can send emails using sgMail.send()

    // Example:
    const { firstName, lastName, email, phoneNumber, text } = request.body;

    // Send email to user
    const userMsg = {
      to: email,
      from: "giacomopedemonte@libero.it", // Replace with your verified sender email
      templateId: "d-c4825a7d9322498ebc92c784d0e5ff62", // Replace with your SendGrid template ID
      asm: {
        groupId: "23008" // Replace YOUR_UNSUBSCRIBE_GROUP_ID with the actual ID of your unsubscribe group
      },
      dynamic_template_data: {
        subject: "Il messaggio è stato inviato correttamente",
        text: `\nContenuto del messaggio inviato:\n${text}`,
      },
      // this following is relevant only if you don't have a template ID
      // subject: "Il messaggio è stato inviato correttamente",
      // text: "Grazie per il tuo messaggio. Lo abbiamo ricevuto correttamente.",
    };

    sgMail
      .send(userMsg)
      .then(() => {
        // Email sent successfully, you can handle the response if needed
      })
      .catch((error) => {
        console.error("Error sending email to user:", error);
      });

    // Send email copy to your email address
    const copyMsg = {
      to: "giacomopedemonte@libero.it", // Replace with your email address
      from: "giacomopedemonte@libero.it", // Replace with your verified sender email
      //templateId: "d-c4825a7d9322498ebc92c784d0e5ff62", // not required because we receive this message with the content
      //dynamic_template_data: {
      subject: "Nuovo messaggio dal form di contatto",
      text: `\nNuovo messaggio ricevuto da ${email}.\nContenuto:\n${text}`,
      //},
    };

    sgMail
      .send(copyMsg)
      .then(() => {
        // Email sent successfully, you can handle the response if needed
      })
      .catch((error) => {
        console.error("Error sending email copy:", error);
      });

    response.status(200).send("Message sent successfully");
  });
});
