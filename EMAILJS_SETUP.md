# EmailJS Setup Instructions for Portfolio Contact Form

## Overview
Your portfolio contact form is now configured to send real emails to `iduwararajakaruna5555@gmail.com` using EmailJS service. Follow these steps to complete the setup.

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account (`iduwararajakaruna5555@gmail.com`)
5. Note down your **Service ID** (something like `service_xxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Portfolio Contact: {{subject}}

Hi Iduwara,

You have received a new message through your portfolio website.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to: {{reply_to}}
```

4. Save the template and note down your **Template ID** (something like `template_xxxxxxx`)

## Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key** (something like `xxxxxxxxxxxxxx`)

## Step 5: Update Contact Component
1. Open `src/components/Contact.jsx`
2. Replace these placeholders in the `handleSubmit` function:
   - `service_portfolio` → Your actual Service ID
   - `template_portfolio` → Your actual Template ID  
   - `YOUR_PUBLIC_KEY` → Your actual Public Key

```javascript
// Replace these lines in Contact.jsx:
const serviceId = 'your_actual_service_id'
const templateId = 'your_actual_template_id'
const publicKey = 'your_actual_public_key'
```

## Step 6: Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out the form and submit
4. Check your email (`iduwararajakaruna5555@gmail.com`) for the message

## Email Template Variables
The following variables are automatically populated in your emails:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (iduwararajakaruna5555@gmail.com)
- `{{reply_to}}` - Sender's email for replies

## Security Notes
- Your EmailJS keys are safe to use in frontend code
- EmailJS provides rate limiting and spam protection
- The service is free up to 200 emails/month
- Consider upgrading for higher volume if needed

## Troubleshooting
- Ensure your Gmail account allows less secure apps or use App Passwords
- Check EmailJS dashboard for delivery logs
- Verify template variables match the ones used in the code
- Test with a simple message first

## Current Status
✅ EmailJS library installed  
✅ Contact form updated with EmailJS integration  
✅ Loading states and error handling implemented  
✅ Form validation and user feedback added  
⏳ **Next: Complete EmailJS service setup with your credentials**