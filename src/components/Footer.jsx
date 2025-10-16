import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// 🦶 FOOTER SECTION - Bottom section with links and contact info
// 📝 Customize: Update branding, links, newsletter, and social media
const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })
  
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      alert('Thank you for subscribing!')
      setEmail('')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/IduwaraRajakaruna',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iduwara-rajakaruna-0a0a98279',
      icon: '💼'
    },
    {
      name: 'Email',
      url: 'mailto:iduwararajakaruna5555@gmail.com',
      icon: '📧'
    }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 py-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
           

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-200 text-lg group flex items-center"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Skills Badge */}
              
            </motion.div>

            {/* Connect */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-8 text-white">Let's Connect</h4>
              
              <div className="space-y-6">
                {/* Social Links */}
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target={social.name !== 'Email' ? "_blank" : undefined}
                      rel={social.name !== 'Email' ? "noopener noreferrer" : undefined}
                      className="w-14 h-14 bg-gray-700/50 rounded-2xl flex items-center justify-center text-2xl hover:bg-blue-600 transition-all duration-200 border border-gray-600/50"
                      whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <motion.a 
                    href="mailto:iduwararajakaruna@gmail.com"
                    className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-3 text-lg">📧</span>
                    <span className="group-hover:underline">iduwararajakaruna@gmail.com</span>
                  </motion.a>
                  <motion.div 
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-3 text-lg">📍</span>
                    <span>Colombo, Sri Lanka</span>
                  </motion.div>
                </div>

                {/* Status Indicator */}
                <motion.div 
                  className="flex items-center p-3 bg-green-600/20 rounded-xl border border-green-500/30"
                  animate={{ borderColor: ['rgba(34, 197, 94, 0.3)', 'rgba(34, 197, 94, 0.6)', 'rgba(34, 197, 94, 0.3)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full mr-3"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-green-300 font-medium text-sm">Available for hire</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-gray-700/50 py-8"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <motion.p 
                className="text-gray-400 mb-4 md:mb-0"
                whileHover={{ scale: 1.05 }}
              >
                © 2025 Iduwara Rajakaruna. All Rights Reserved.
              </motion.p>
              <motion.div 
                className="flex items-center space-x-6"
                whileHover={{ scale: 1.05 }}
              >
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  About
                </a>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Projects
                </a>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                  Contact
                </a>
                {/* Back to Top Button */}
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title="Back to top"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </footer>
  )
}

export default Footer
