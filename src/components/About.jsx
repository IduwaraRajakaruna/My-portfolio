import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// 🎯 ABOUT SECTION - Personal introduction and background
// 📝 Customize: Update personal information, education, and career goals
const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

    // 📚 CUSTOMIZE: Update your personal information cards
  const aboutCards = [
   
   

  ]

  // 🎯 CUSTOMIZE: Update your current focus areas / skills you're learning
  const currentFocus = [
    "React & Vite", // Replace with your skills
    "ASP.NET Core", 
    "Azure Cloud",
    "Full Stack Development",
    "Mern Stack"
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800" ref={ref}>
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
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Passionate Software Developer crafting innovative solutions and exploring the 
              frontiers of web development and technology.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.h3 
                variants={itemVariants}
                className="text-3xl font-bold text-white mb-8"
              >
                Hello, I'm Iduwara Rajakaruna
              </motion.h3>
              
              <motion.div 
                variants={itemVariants}
                className="space-y-6 text-gray-300 leading-relaxed"
              >
                <p>
                  I'm an undergraduate software engineer passionate about full-stack development, 
                  cloud integration, and building efficient, user-friendly web applications. 
                  Currently pursuing my BSc (Hons) in Information Technology and Management at 
                  the University of Moratuwa.
                </p>
                
                <p>
                  I enjoy working with modern technologies like React, .NET, and Azure to craft 
                  scalable solutions that solve real-world problems. My experience spans from 
                  legal workflow management systems to IoT projects and e-commerce platforms.
                </p>
                
                <p>
                  With hands-on experience in project development and a strong foundation in 
                  software engineering principles, I'm always eager to take on new challenges 
                  and contribute to innovative digital solutions.
                </p>
              </motion.div>

                            <motion.div 
                variants={itemVariants}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.a
                  href="#contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-purple-400 hover:text-purple-400 transition-all duration-200 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Content - Professional Image */}
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="relative flex justify-center"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated background circles */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-800/50 to-blue-800/50 rounded-2xl backdrop-blur-sm"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="absolute inset-4 bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-gray-700">
                  <img 
                    src="/images/profile.jpg" 
                    alt="Iduwara Rajakaruna - Software Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
             
              </div>
            </motion.div>
          </div>

          {/* About Cards */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300 border border-gray-700"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{card.title}</h4>
                <p className="text-gray-300 mb-3">{card.description}</p>
                <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                  {card.highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-12 text-white text-center border border-gray-700"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold mb-2">3+</div>
                <div className="text-purple-200">Years Learning</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-purple-200">Projects Built</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-purple-200">Technologies</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-purple-200">Learning Mode</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div 
            className="mt-16 text-center"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h4 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-8"
            >
              Current Focus
            </motion.h4>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              {currentFocus.map((focus, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 rounded-full font-medium border border-purple-500/30 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {focus}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
