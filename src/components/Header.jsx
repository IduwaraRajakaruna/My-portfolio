import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'projects', 'skills']
      let currentSection = 'home'

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element?.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = sections[i]
          break
        }
      }
      
      const footer = document.querySelector('footer')
      if (footer?.getBoundingClientRect().top <= window.innerHeight / 2) {
        currentSection = 'footer'
      }

      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: 'footer' }
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = href === 'footer' 
      ? document.querySelector('footer')
      : document.querySelector(href)
    
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsOpen(false)
  }

  const menuVariants = {
    closed: { opacity: 0, scale: 0.8 },
    open: { opacity: 1, scale: 1 }
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-purple-500/10 border-b border-gray-700' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
              <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
                <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent' 
                    : 'text-white'
                }`}>
                  Iduwara
                </h1>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const isActive = item.href === 'footer' 
                    ? activeSection === 'footer' 
                    : activeSection === item.href.substring(1)
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                        scrolled
                          ? isActive
                            ? 'text-purple-400 bg-purple-500/20 backdrop-blur-sm'
                            : 'text-gray-300 hover:text-purple-400 hover:bg-gray-700/50'
                          : isActive
                          ? 'text-purple-400 bg-white/20 backdrop-blur-sm'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isActive && (
                        <motion.div
                          className={`absolute inset-0 rounded-full ${
                            scrolled ? 'bg-purple-500/20 backdrop-blur-sm' : 'bg-white/20'
                          }`}
                          layoutId="activeTab"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              {/* CTA Button */}
              <motion.a
                href="footer"
                onClick={(e) => handleNavClick(e, 'footer')}
                className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30'
                    : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-lg hover:shadow-xl'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Let's Talk</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  scrolled
                    ? 'text-gray-300 hover:bg-gray-700/50'
                    : 'text-white hover:bg-white/10'
                }`}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className={`block h-0.5 w-6 rounded-sm ${
                      scrolled ? 'bg-gray-300' : 'bg-white'
                    }`}
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block h-0.5 w-6 rounded-sm mt-1.5 ${
                      scrolled ? 'bg-gray-300' : 'bg-white'
                    }`}
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block h-0.5 w-6 rounded-sm mt-1.5 ${
                      scrolled ? 'bg-gray-300' : 'bg-white'
                    }`}
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-xl shadow-purple-500/10 border-t border-gray-700 ${
          isOpen ? 'block' : 'hidden'
        }`}
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <div className="px-6 py-8 space-y-2">
          {navItems.map((item, index) => {
            const isActive = item.href === 'footer' 
              ? activeSection === 'footer' 
              : activeSection === item.href.substring(1)
            return (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-purple-400 bg-purple-500/20'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-gray-700/50'
                }`}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            )
          })}
          
          {/* Mobile CTA */}
          <motion.div 
            className="pt-4"
            variants={itemVariants}
          >
            <a
              href="footer"
              onClick={(e) => handleNavClick(e, 'footer')}
              className="block w-full text-center px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  )
}

export default Header
