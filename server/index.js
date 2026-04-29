import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              background: #0a0a0a;
              color: #ffffff;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
            }
            .card {
              background: #111111;
              border-radius: 16px;
              padding: 30px 20px;
              border: 1px solid #222222;
            }
            .header {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 25px;
            }
            .icon-wrapper {
              width: 48px;
              height: 48px;
              background: #ffffff;
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
            }
            .header-text h1 {
              font-size: 24px;
              font-weight: 700;
              color: #ffffff;
              margin: 0;
            }
            .header-text p {
              font-size: 14px;
              color: #888888;
              margin: 4px 0 0 0;
            }
            .content {
              background: #0a0a0a;
              border-radius: 12px;
              padding: 20px;
              border: 1px solid #1a1a1a;
            }
            .field {
              margin-bottom: 16px;
            }
            .field:last-child {
              margin-bottom: 0;
            }
            .label {
              font-size: 12px;
              color: #666666;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              font-weight: 600;
              margin-bottom: 4px;
            }
            .value {
              font-size: 16px;
              color: #ffffff;
              font-weight: 500;
              word-wrap: break-word;
            }
            .message-section {
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #1a1a1a;
            }
            .message-box {
              background: #111111;
              border-radius: 8px;
              padding: 16px;
              border: 1px solid #1a1a1a;
            }
            .message-text {
              font-size: 15px;
              color: #cccccc;
              line-height: 1.6;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              margin-top: 25px;
              text-align: center;
            }
            .footer p {
              font-size: 12px;
              color: #555555;
            }
            @media only screen and (max-width: 480px) {
              body {
                padding: 10px;
              }
              .card {
                padding: 20px 15px;
              }
              .header {
                margin-bottom: 20px;
              }
              .icon-wrapper {
                width: 40px;
                height: 40px;
              }
              .header-text h1 {
                font-size: 20px;
              }
              .header-text p {
                font-size: 12px;
              }
              .content {
                padding: 15px;
              }
              .value {
                font-size: 14px;
              }
              .message-text {
                font-size: 14px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="card">
              <div class="header">
                <div class="header-text">
                  <h1>New Message</h1>
                  <p>Portfolio Contact Form</p>
                </div>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">From</div>
                  <div class="value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email Address</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">Subject</div>
                  <div class="value">${subject}</div>
                </div>
                
                <div class="message-section">
                  <div class="label">Message</div>
                  <div class="message-box">
                    <div class="message-text">${message}</div>
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <p>This message was sent from your portfolio website</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
