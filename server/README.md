# Email Server Setup

This server handles sending emails from the contact form using Nodemailer.

## Setup Instructions

1. Install dependencies:
   ```bash
   cd server
   npm install
   ```

2. Configure email settings:
   - Copy `.env.example` to `.env`
   - Update the `.env` file with your email credentials
   - For Gmail, use an App Password (not your regular password)
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password at: https://myaccount.google.com/apppasswords

3. Start the server:
   ```bash
   npm start
   ```
   Or for development:
   ```bash
   npm run dev
   ```

The server runs on port 3001 by default.

## Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to Security → App Passwords
4. Select "Mail" for the app and "Other (Custom name)" for the device
5. Enter a name (e.g., "Portfolio Contact Form")
6. Copy the generated 16-character password
7. Use this password in the `.env` file as `EMAIL_PASS`
