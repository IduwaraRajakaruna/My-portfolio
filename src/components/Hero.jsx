import React from 'react'
import { motion } from 'framer-motion'

// 🏠 HERO SECTION - Main landing page with introduction
// 📝 Customize: Update name, title, description, and call-to-action
const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 🎬 CUSTOMIZE: Background Video - Replace galaxy.mp4 with your video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/images/galaxy.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Animated Background Elements (Optional - can be removed if video is enough) */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <motion.span 
                className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                👋 Hello, I'm
              </motion.span>
            </motion.div>

            {/* 📝 CUSTOMIZE: Update your name */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="block">Iduwara</span> {/* Your first name */}
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Rajakaruna {/* Your last name */}
              </span>
            </motion.h1>
            
            {/* 📝 CUSTOMIZE: Update your professional title */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 mb-4 font-medium"
            >
              Software Engineer | React & .NET Developer {/* Your job title/role */}
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed"
            >
              Building modern, scalable, and elegant digital solutions. Passionate about 
              full-stack development, cloud integration, and creating efficient, user-friendly 
              web applications with React, .NET, and Azure.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-8 mb-8"
            >
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-white/80">Years Learning</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm text-white/80">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-white/80">Technologies</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a 
                href="#projects" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-center shadow-lg shadow-purple-500/25 backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:border-white hover:bg-white/10 transition-all duration-200 text-center backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div 
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="w-80 h-80 md:w-96 md:h-96 relative">

              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              animate={{ height: [12, 6, 12] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
