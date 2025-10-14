// EmailJS Configuration
// 🔧 Update these values with your actual EmailJS credentials

export const emailConfig = {
  // Replace with your EmailJS Service ID (from Email Services section)
  serviceId: 'service_portfolio', // TODO: Replace with your actual service ID
  
  // Replace with your EmailJS Template ID (from Email Templates section)
  templateId: 'template_portfolio', // TODO: Replace with your actual template ID
  
  // Replace with your EmailJS Public Key (from Account > General section)
  publicKey: 'YOUR_PUBLIC_KEY', // TODO: Replace with your actual public key
  
  // Your email address (where contact form messages will be sent)
  recipientEmail: 'iduwararajakaruna5555@gmail.com'
}

// Template parameters mapping
export const emailTemplateParams = (formData) => ({
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
  to_email: emailConfig.recipientEmail,
  reply_to: formData.email
})