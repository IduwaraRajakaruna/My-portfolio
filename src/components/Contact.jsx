import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTheme } from '../context/ThemeContext'
import emailjs from '@emailjs/browser'
import { emailConfig, emailTemplateParams } from '../config/emailConfig'

// 📧 CONTACT SECTION - Contact form and information
// 📝 Customize: Update contact information, social links, and form handling
const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  const { theme } = useTheme()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState('') // 'success' | 'error' | ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')
    setSubmitStatus('')

    try {
      // Check if EmailJS is properly configured
      if (emailConfig.publicKey === 'YOUR_PUBLIC_KEY') {
        setSubmitStatus('error')
        setSubmitMessage('Email service not configured yet. Please check EMAILJS_SETUP.md for instructions.')
        setIsSubmitting(false)
        return
      }

      const templateParams = emailTemplateParams(formData)

      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      )

      if (response.status === 200) {
        setSubmitStatus('success')
        setSubmitMessage('Thank you for your message! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('')
        setSubmitStatus('')
      }, 5000)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // 📞 CUSTOMIZE: Update your contact information
  const contactInfo = [
    {
      icon: '📧', // Contact type icon
      title: 'Email',
      value: 'iduwararajakaruna5555@gmail.com', // 📝 Your email address
      link: 'mailto:iduwararajakaruna5555@gmail.com' // 📝 Update with your email
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '071 344 8918', // 📝 Your phone number
      link: 'tel:0713448918' // 📝 Update with your phone number
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Moratuwa, Sri Lanka', // 📝 Your location
      link: '#'
    }
  ]

  // 🔗 CUSTOMIZE: Update your social media links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/IduwaraRajakaruna', // 📝 Your GitHub profile
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iduwara-rajakaruna-0a0a98279',
      icon: '💼'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800" ref={ref}>
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Contact <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Let's discuss your project or just say hello! I'm always open to new opportunities 
              and exciting collaborations.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div 
              className="bg-gray-800/50 backdrop-blur-md rounded-3xl shadow-xl shadow-purple-500/10 p-8 lg:p-12 border border-gray-700"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-white mb-8"
                variants={itemVariants}
              >
                Send Message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    variants={itemVariants}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={itemVariants}
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-700/50 text-white placeholder-gray-400 focus:bg-gray-700"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Submit Message */}
                {submitMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl text-center ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-white mb-8"
              >
                Get In Touch
              </motion.h3>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    className="flex items-center p-6 bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-200 group border border-gray-700"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-200 border border-purple-500/30">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                        {info.title}
                      </h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white dark:bg-gray-700/50 dark:backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 border border-gray-100 dark:border-gray-600 transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div 
                variants={itemVariants}
                className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 rounded-2xl border border-green-500/30 backdrop-blur-md"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-4 h-4 bg-green-500 rounded-full mr-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h4 className="font-bold text-white">Available for Work</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I'm currently available for freelance projects and full-time opportunities. 
                  Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
