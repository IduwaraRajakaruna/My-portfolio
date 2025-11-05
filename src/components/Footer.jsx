import React from 'react'
import { motion } from 'framer-motion'

// 🦶 MODERN MINIMAL FOOTER - Dark themed footer with clean typography
// 📝 Features: Collaboration CTA, contact info, and elegant bottom bar
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-gray-300 px-8 py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Section - Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Let's build something
          </h2>
          <p className="text-gray-400 max-w-xl mb-6 leading-relaxed">
            Open to collaborations around systems, web development, and creative digital experiences.
            If you have an ambitious or challenging project — reach out.
          </p>
          <motion.a
            href="mailto:iduwararajakaruna5555@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 inline-flex items-center transition-all duration-300 group"
            whileHover={{ x: 5 }}
          >
            <span className="border-b border-transparent group-hover:border-cyan-300 transition-all duration-300">
              iduwararajakaruna5555@gmail.com
            </span>
            <motion.span 
              className="ml-2 transition-all duration-300"
              whileHover={{ x: 3, y: -3 }}
            >
              ↗
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500"
        >
          {/* Left Side - Version & Update Info */}
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <motion.span 
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-mono"
              whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
              transition={{ duration: 0.2 }}
            >
              v1.0.4
            </motion.span>
            <span className="text-gray-500">Last Updated: 2025-11-05</span>
          </div>
          
          {/* Right Side - Links */}
          <div className="flex gap-6">
            <motion.a 
              href="#reading" 
              className="hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Reading
            </motion.a>
            <span className="text-gray-700">|</span>
            <motion.a 
              href="https://github.com/IduwaraRajakaruna" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Code
            </motion.a>
            <span className="text-gray-700">|</span>
            <motion.a 
              href="https://www.linkedin.com/in/iduwara-rajakaruna-0a0a98279" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-600 mt-8"
        >
          © 2025 Iduwara Rajakaruna • Built with React + Tailwind CSS
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default Footer
