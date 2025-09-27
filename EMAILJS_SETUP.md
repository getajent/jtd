# EmailJS Setup Guide

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (since you want to send to jevgenidesign@gmail.com)
4. Connect your Gmail account (jevgenidesign@gmail.com)
5. Copy the **Service ID** (you'll need this)

### 3. Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID**

### 4. Get Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key**

### 5. Update the Code
Replace these placeholders in `script.js`:

```javascript
// Line 301: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 314: Replace YOUR_SERVICE_ID  
'YOUR_ACTUAL_SERVICE_ID'

// Line 315: Replace YOUR_TEMPLATE_ID
'YOUR_ACTUAL_TEMPLATE_ID'
```

## 📧 What Happens When User Submits Form

1. User fills out the form
2. Clicks "TRANSMIT VISION"
3. Form shows "TRANSMITTING..." animation
4. EmailJS sends email to jevgenidesign@gmail.com
5. Shows "REALITY TRANSMITTED!" on success
6. Shows "TRANSMISSION FAILED" on error
7. Form resets after 2 seconds

## 🎯 Email Content Structure

The email will contain:
- **From Name**: User's name
- **From Email**: User's email  
- **Subject**: User's subject line
- **Message**: User's message
- **To**: jevgenidesign@gmail.com

## 🔧 Testing

1. Fill out the form on your website
2. Click "TRANSMIT VISION"
3. Check jevgenidesign@gmail.com inbox
4. You should receive the email within seconds

## 💡 Free Tier Limits

- 200 emails per month (free)
- Perfect for portfolio contact forms
- No credit card required

## 🆘 Troubleshooting

If emails don't arrive:
1. Check spam folder
2. Verify EmailJS service is connected
3. Check browser console for errors
4. Ensure all IDs are correct in the code
