import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// 📧 CONTACT SECTION - Contact form and information
// 📝 Customize: Update contact information, social links, and form handling
const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
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
      value: 'iduwararajakaruna@gmail.com', // 📝 Your email address
      link: 'mailto:iduwararajakaruna@gmail.com' // 📝 Update with your email
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 77 123 4567', // 📝 Your phone number
      link: 'tel:+94771234567' // 📝 Update with your phone number
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Colombo, Sri Lanka', // 📝 Your location
      link: '#'
    }
  ]

  // 🔗 CUSTOMIZE: Update your social media links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/iduwararajakaruna', // 📝 Your GitHub profile
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/iduwararajakaruna',
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
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
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
                className="text-2xl font-bold text-gray-900 mb-8"
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
                    className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 group border border-gray-100"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-2xl mr-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-all duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-bold text-gray-900 mb-6">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-200"
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
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200"
              >
                <div className="flex items-center mb-4">
                  <motion.div 
                    className="w-4 h-4 bg-green-500 rounded-full mr-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <h4 className="font-bold text-gray-900">Available for Work</h4>
                </div>
                <p className="text-gray-600 leading-relaxed">
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
