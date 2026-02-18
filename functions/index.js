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
const { Resend } = require("resend");

exports.SendMail = functions
  .runWith({ 
    secrets: ['RESEND_API_KEY'],
    memory: '256MB',
    timeoutSeconds: 60 
  })
  .https.onRequest((request, response) => {
  
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
      // Initialize Resend with API key from Firebase Secrets
      const RESEND_API_KEY = process.env.RESEND_API_KEY;
      const resend = new Resend(RESEND_API_KEY);
      
      // Debug logging
      console.log('API Key available:', RESEND_API_KEY ? 'YES' : 'NO');
      console.log('API Key length:', RESEND_API_KEY ? RESEND_API_KEY.length : 0);
      
      // Check if Resend is configured
      if (!RESEND_API_KEY) {
        console.error('Resend API key not configured');
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

      // List of recipient email addresses (TEST con account Resend attuale)
      const recipients = [
        "giacomopedo99@gmail.com"  // Email del tuo account Resend per test
      ];

      // Email content for company notification
      const companyEmailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #0f766e; border-bottom: 2px solid #0f766e; padding-bottom: 10px;">
            Nuovo messaggio dal sito ITL
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Dati del cliente:</h3>
            <p><strong>Nome:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefono:</strong> ${phoneNumber || 'Non fornito'}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Messaggio:</h3>
            <p style="line-height: 1.6; color: #6b7280;">${text}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #9ca3af; font-size: 12px;">
            Messaggio inviato automaticamente dal sito web ITL Pulizie Genova
          </div>
        </div>
      `;

      // Email di conferma per il cliente (stile ITL)
      const customerEmailHtml = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
          <!-- Header con logo virtuale ITL -->
          <div style="background: linear-gradient(135deg, #0f766e 0%, #065f46 100%); padding: 30px 20px; text-align: center;">
            <div style="background: white; display: inline-block; padding: 15px 25px; border-radius: 12px; margin-bottom: 15px;">
              <h1 style="color: #0f766e; margin: 0; font-size: 28px; font-weight: bold;">ITL</h1>
              <p style="color: #6b7280; margin: 0; font-size: 14px;">Impresa di Pulizie Genova</p>
            </div>
            <h2 style="color: white; margin: 0; font-size: 24px; font-weight: normal;">
              Richiesta ricevuta con successo!
            </h2>
          </div>
          
          <!-- Contenuto principale -->
          <div style="padding: 30px 20px;">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Gentile <strong>${firstName} ${lastName}</strong>,
            </p>
            
            <p style="color: #6b7280; font-size: 15px; line-height: 1.6; margin-bottom: 25px;">
              Ti ringraziamo per aver scelto <strong>ITL Pulizie Genova</strong>. La tua richiesta di preventivo è stata ricevuta e sarà elaborata dal nostro team nel minor tempo possibile.
            </p>
            
            <!-- Riepilogo richiesta -->
            <div style="background: #f8fafc; border-left: 4px solid #0f766e; padding: 20px; margin: 25px 0; border-radius: 0 8px 8px 0;">
              <h3 style="color: #0f766e; margin: 0 0 15px 0; font-size: 18px;">Riepilogo della tua richiesta:</h3>
              <div style="color: #4b5563; font-size: 14px; line-height: 1.5;">
                <p style="margin: 8px 0;"><strong>Servizio richiesto:</strong></p>
                <p style="margin: 8px 0; padding-left: 10px; font-style: italic;">"${text}"</p>
                ${phoneNumber ? `<p style="margin: 8px 0;"><strong>Recapito:</strong> ${phoneNumber}</p>` : ''}
              </div>
            </div>
            
            <!-- Prossimi passi -->
            <div style="background: white; border: 2px solid #e5e7eb; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px;">📋 Cosa succede ora?</h3>
              <ul style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Il nostro team esaminerà la tua richiesta entro <strong>24 ore</strong></li>
                <li style="margin-bottom: 8px;">Ti contatteremo per concordare un <strong>sopralluogo gratuito</strong></li>
                <li style="margin-bottom: 8px;">Riceverai un <strong>preventivo dettagliato</strong> senza impegno</li>
              </ul>
            </div>
            
            <!-- Contatti diretti -->
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #0f766e; margin: 0 0 15px 0; font-size: 16px;">📞 Hai fretta? Contattaci direttamente:</h3>
              <div style="color: #4b5563; font-size: 14px;">
                <p style="margin: 5px 0;"><strong>Luciano:</strong> <a href="tel:+393351267227" style="color: #0f766e; text-decoration: none;">+39 335 126 7227</a></p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:itl.sas@virgilio.it" style="color: #0f766e; text-decoration: none;">itl.sas@virgilio.it</a></p>
                <p style="margin: 5px 0;"><strong>Indirizzo:</strong> Via Archimede 58r, Genova</p>
              </div>
            </div>
            
            <p style="color: #9ca3af; font-size: 13px; line-height: 1.5; margin-top: 30px; text-align: center;">
              ITL s.r.l. - Al servizio di Genova dal 1984<br>
              Professionalità, velocità e accuratezza per ogni esigenza di pulizia
            </p>
          </div>
          
          <!-- Footer -->
          <div style="background: #f9fafb; padding: 15px 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 11px; margin: 0;">
              Hai ricevuto questa email perché hai richiesto un preventivo su itlpuliziegenova.it
            </p>
          </div>
        </div>
      `;

      // Send company notification
      const companyEmailPromise = resend.emails.send({
        from: 'ITL Pulizie <onboarding@resend.dev>',
        to: recipients[0], // Per ora solo primo recipient
        subject: `Nuovo preventivo da ${firstName} ${lastName}`,
        html: companyEmailHtml
      });

      // Send confirmation email to customer (when domain is verified)
      const customerEmailPromise = resend.emails.send({
        from: 'ITL Pulizie Genova <onboarding@resend.dev>',
        to: email,
        subject: '✅ Richiesta preventivo ricevuta - ITL Pulizie Genova',
        html: customerEmailHtml
      });

      // Execute both email sends
      const results = await Promise.all([
        companyEmailPromise,
        customerEmailPromise
      ]);
      
      // Debug: Log full Resend response
      console.log('Resend Results:', JSON.stringify(results, null, 2));
      console.log('Results count:', results.length);
      results.forEach((result, index) => {
        console.log(`Result ${index}:`, {
          data: result.data,
          error: result.error,
          success: !result.error
        });
      });
      
      console.log('All emails sent successfully:', results.map(r => r.data?.id).join(', '));
      return response.status(200).json({ 
        message: "Message sent successfully",
        success: true,
        emailIds: results.map(r => r.data?.id)
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
