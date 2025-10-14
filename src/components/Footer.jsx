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
      url: 'https://github.com/iduwararajakaruna',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/iduwararajakaruna',
      icon: '💼'
    },
    {
      name: 'Email',
      url: 'mailto:iduwararajakaruna@gmail.com',
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
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.h3 
                className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Iduwara Rajakaruna
              </motion.h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Full-stack developer passionate about creating innovative digital solutions 
                and meaningful user experiences. Always learning, always building.
              </p>
              
              {/* Newsletter Signup */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <h4 className="text-xl font-semibold mb-4 text-white">Stay Updated</h4>
                <p className="text-gray-300 mb-4">Get notified about my latest projects and articles.</p>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <motion.input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </motion.div>

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
              <motion.div 
                className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-blue-300 font-medium">💡 Always Learning</p>
                <p className="text-gray-300 text-sm mt-1">Currently exploring AI/ML technologies</p>
              </motion.div>
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
                © {currentYear} Iduwara Rajakaruna. Built with ❤️ using React & Tailwind CSS.
              </motion.p>
              <motion.div 
                className="flex space-x-6"
                whileHover={{ scale: 1.05 }}
              >
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Terms
                </a>
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
