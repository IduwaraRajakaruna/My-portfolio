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
    {
      icon: "🎓", // Change emoji icon
      title: "Education", // Update title
      description: "BSc (Hons) IT & Management at University of Technology", // Your actual education
      highlight: "Currently pursuing" // Current status
    },
    {
      icon: "💻", // Change to represent your specialty
      title: "Specialization", // Your main field
      description: "Full-stack web development with modern technologies", // Your expertise
      highlight: "React & Node.js" // Your tech stack
    },
    {
      icon: "🚀", // Change to represent your goals
      title: "Mission", // Your career mission
      description: "Building innovative solutions that solve real-world problems", // Your mission statement
      highlight: "User-centered design" // Your approach
    }
  ]

  // 🎯 CUSTOMIZE: Update your current focus areas / skills you're learning
  const currentFocus = [
    "React Development", // Replace with your skills
    "Full Stack Web Apps", 
    "UI/UX Design",
    "Modern JavaScript",
    "Problem Solving"
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
                  I am a dedicated software development enthusiast with a strong foundation in modern 
                  web technologies and programming principles. Currently pursuing my studies in 
                  Information Technology, I specialize in creating responsive and user-friendly 
                  web applications using React.js, JavaScript, and full-stack technologies.
                </p>
                
                <p>
                  My goal is to build innovative solutions that solve real-world problems while 
                  delivering exceptional user experiences. I am constantly learning and expanding 
                  my skill set to stay current with the latest industry trends and best practices 
                  in software development.
                </p>
                
                <p>
                  Currently seeking internship opportunities and open to collaborative projects in 
                  web development, full-stack development, and innovative tech solutions.
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
                  href="/cv.pdf"
                  className="border-2 border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-medium hover:border-purple-400 hover:text-purple-400 transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download CV
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
                    alt="Iduwara Rajakaruna - Professional Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating tech icons */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-purple-500/25"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚛️
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg shadow-orange-500/25"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  🔥
                </motion.div>
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
