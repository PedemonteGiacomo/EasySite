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
      from: { // if you don't have an AUTHORIZED DOMAIN you need to replace this with a Verified Sender as Sengrid asks
        email: "noreply@itlpuliziegenova.it", // Use your authenticated domain to not get email goes into SPAM
        name: "Luciano Tanzi", // Replace with your sender name
      },
      templateId: "d-c4825a7d9322498ebc92c784d0e5ff62", // Replace with your SendGrid template ID
      asm: {
        groupId: 23008, // Replace with your actual unsubscribe group ID
      },
      dynamic_template_data: {
        subject: "Il messaggio è stato inviato correttamente",
        text: `\nContenuto del messaggio inviato:\n${text}`,
      },
    };

    sgMail
      .send(userMsg)
      .then(() => {
        // Email sent successfully, you can handle the response if needed
      })
      .catch((error) => {
        console.error("Error sending email to user:", error);
      });

    // List of recipient email addresses
    const recipients = [
      "giacomopedemonte@libero.it",
      "itl.sas@virgilio.it",
      "fmorasrl96@gmail.com",
      "sas.ilforte@gmail.com",
      "lufracla7@icloud.com"
    ];

    // email for the "owner" of the "company" which the site belongs to
    recipients.forEach((recipient) => {
      const copyMsg = {
        to: recipient,
        from: {
          email: "noreply@itlpuliziegenova.it", // Replace with your verified sender email using your domain
          name: "Luciano Tanzi", // Replace with your sender name
        },
        //from: senderEmail, // replace with your SENDER validated account
        subject: "Nuovo messaggio dal form di contatto",
        text: `Nuovo messaggio ricevuto da:\n - Email: ${email}\n - Nome: ${firstName}\n - Cognome: ${lastName}.\n - Numero di Telefono: ${phoneNumber}\n\n Contenuto del messaggio:\n${text}`,
      };

      sgMail
        .send(copyMsg)
        .then(() => {
          // Email sent successfully to individual recipient
        })
        .catch((error) => {
          console.error(`Error sending email copy to ${recipient}:`, error);
        });
    });

    response.status(200).send("Message sent successfully");
  });
});
