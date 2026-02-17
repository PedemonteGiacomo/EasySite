/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const cors = require("cors")({ 
  origin: ["http://localhost:9000", "https://itl-impresadipulizie-genova.web.app", "https://itl-impresadipulizie-genova.firebaseapp.com"],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
});
const sgMail = require("@sendgrid/mail");

// Initialize SendGrid API key from environment variables
const SENDGRID_API_KEY = functions.config().sendgrid?.key || process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

exports.SendMail = functions.https.onRequest((request, response) => {
  // Handle preflight OPTIONS request
  if (request.method === 'OPTIONS') {
    response.set('Access-Control-Allow-Origin', request.headers.origin || '*');
    response.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.set('Access-Control-Max-Age', '3600');
    return response.status(204).send('');
  }
  
  return cors(request, response, async () => {
    try {
      // Check if SendGrid is configured
      if (!SENDGRID_API_KEY) {
        console.error('SendGrid API key not configured');
        return response.status(500).json({ 
          error: 'Email service not configured',
          success: false 
        });
      }

      // Only allow POST requests for actual email sending
      if (request.method !== 'POST') {
        return response.status(405).json({ 
          error: 'Method not allowed',
          success: false 
        });
      }

      const { firstName, lastName, email, phoneNumber, text } = request.body;

      // Validate required fields
      if (!firstName || !lastName || !email || !text) {
        return response.status(400).json({ 
          error: 'Missing required fields',
          success: false 
        });
      }

      // Send email to user
      const userMsg = {
        to: email,
        from: {
          email: "noreply@itlpuliziegenova.it",
          name: "ITL Pulizie Genova",
        },
        templateId: "d-c4825a7d9322498ebc92c784d0e5ff62",
        asm: {
          groupId: 23008,
        },
        dynamic_template_data: {
          subject: "Il messaggio è stato inviato correttamente",
          text: `\nContenuto del messaggio inviato:\n${text}`,
        },
      };

      // List of recipient email addresses
      const recipients = [
        "giacomopedemonte@libero.it",
        "itl.sas@virgilio.it", 
        "fmorasrl96@gmail.com",
        "sas.ilforte@gmail.com",
        "lufracla7@icloud.com"
      ];

      // Send email copies to company recipients
      const companyEmails = recipients.map(recipient => {
        const copyMsg = {
          to: recipient,
          from: {
            email: "noreply@itlpuliziegenova.it",
            name: "ITL Pulizie Genova",
          },
          subject: "Nuovo messaggio dal form di contatto",
          text: `Nuovo messaggio ricevuto da:\n - Email: ${email}\n - Nome: ${firstName}\n - Cognome: ${lastName}\n - Numero di Telefono: ${phoneNumber || 'Non fornito'}\n\nContenuto del messaggio:\n${text}`,
        };
        return sgMail.send(copyMsg);
      });

      // Send all emails concurrently
      const emailPromises = [
        sgMail.send(userMsg),
        ...companyEmails
      ];

      await Promise.all(emailPromises);
      
      console.log('All emails sent successfully');
      return response.status(200).json({ 
        message: "Message sent successfully",
        success: true 
      });

    } catch (error) {
      console.error("Error in SendMail function:", error);
      return response.status(500).json({ 
        error: 'Failed to send email',
        success: false,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  });
});
