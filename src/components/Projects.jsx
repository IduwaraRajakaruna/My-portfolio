import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

// 🚀 PROJECTS SECTION - Showcase your portfolio projects
// 📝 Customize: Replace with your actual projects, add screenshots, live links
const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  // 🚀 CUSTOMIZE: Replace these example projects with your actual projects
  const projects = [
    {
      id: 1,
      title: "LegalFlow - Centralized Legal Management System", // 📝 Your project name
      description: "A smart legal workflow management system that helps legal professionals manage meetings, deadlines, and documentation. Features real-time notifications and scheduling.", // 📝 Project description
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center", // 📝 Replace with your project screenshot
      technologies: ["ASP.NET Core", "React", "Vite", "Tailwind CSS", "Azure Cosmos DB", "Azure Blob Storage"], // 📝 Technologies used
      category: "Full Stack", // 📝 Project category
      challenge: "Building a comprehensive system for legal professionals with complex workflow requirements", // 📝 Main challenge faced
      solution: "Implemented modular architecture with Calendar & Scheduling + Notifications modules, real-time API integration", // 📝 How you solved it
      features: ["Calendar & Scheduling", "Real-time notifications", "Document management", "Meeting coordination"], // 📝 Key features
      liveUrl: "#", // 📝 Replace with live demo URL
      githubUrl: "https://github.com/IduwaraRajakaruna", // 📝 Replace with GitHub repository URL
      featured: true, // 📝 Set to true for featured projects
      timeline: "2nd Year Software Project | 2023–2024",
      role: "Frontend Developer - Calendar & Scheduling + Notifications modules"
    },
    {
      id: 2,
      title: "BizRates Mobile App",
      description: "A mobile app designed with Figma to help users find and review top-rated businesses. Includes leaderboards, smart recommendations, messaging, and community features.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
      technologies: ["Figma", "Mobile Design", "UX/UI", "Prototyping"],
      category: "Mobile Design",
      challenge: "Creating an intuitive user experience for business discovery and community interaction",
      solution: "Designed comprehensive UX flows with user-centered design principles and interactive prototypes",
      features: ["Business discovery", "Review system", "Leaderboards", "Smart recommendations", "Community messaging"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      timeline: "Sysco LABS Project – 2024",
      role: "UX/UI Designer - App design and UX flow development"
    },
    {
      id: 3,
      title: "Laravel E-commerce Gift Shop",
      description: "A responsive e-commerce web application with comprehensive admin dashboard, product/category management, and role-based authentication system.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      technologies: ["Laravel", "MySQL", "Bootstrap", "PHP", "Blade Templates"],
      category: "Web Application",
      challenge: "Building a complete e-commerce solution with secure authentication and admin functionality",
      solution: "Implemented Laravel's built-in authentication with role-based access control and comprehensive CRUD operations",
      features: ["Product management", "Category management", "Admin dashboard", "Role-based authentication", "Responsive design"],
      liveUrl: "#",
      githubUrl: "https://github.com/IduwaraRajakaruna",
      featured: true,
      timeline: "Individual Project | 2024",
      role: "Full-Stack Developer"
    },
    {
      id: 4,
      title: "Smart Home Receptionist (IoT)",
      description: "An automated visitor access system with smart gate control, motion detection, and Telegram bot notifications for seamless home automation.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
      technologies: ["ESP32-S3", "PIR & IR Sensors", "C/C++", "Telegram Bot API", "IoT"],
      category: "IoT Project",
      challenge: "Coordinating multiple sensors with reliable communication and automated gate control",
      solution: "Developed motion detection system with DC motor control and integrated Telegram notifications",
      features: ["Motion detection", "Automated gate control", "Telegram notifications", "Visitor management", "Real-time monitoring"],
      liveUrl: "#",
      githubUrl: "https://github.com/IduwaraRajakaruna",
      featured: false,
      timeline: "1st Year Project | 2023–2024",
      role: "IoT Developer - Motion detection and DC motor control system"
    },
    {
      id: 5,
      title: "E-Commerce Website (Ongoing)",
      description: "A modern full-stack e-commerce platform built with React, Node.js, and MongoDB. Features product management, shopping cart, and secure payment processing.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs"],
      category: "Full Stack",
      challenge: "Building a scalable e-commerce platform with modern web technologies",
      solution: "Implementing MERN stack architecture with RESTful APIs and responsive design",
      features: ["Product catalog", "Shopping cart", "User authentication", "Order management", "Responsive design"],
      liveUrl: "#",
      githubUrl: "https://github.com/IduwaraRajakaruna",
      featured: false,
      timeline: "Ongoing Project | 2024",
      role: "Full-Stack Developer"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800" ref={ref}>
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
              Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              A showcase of my recent work, featuring innovative solutions and cutting-edge technologies. 
              Each project represents a unique challenge and creative solution.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="space-y-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true, threshold: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Project Image */}
                <motion.div 
                  className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div 
                        className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Featured
                      </motion.div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex space-x-3">
                          <motion.a
                            href={project.liveUrl}
                            className="flex-1 bg-white/90 backdrop-blur-sm text-gray-900 py-3 px-6 rounded-xl font-semibold text-center hover:bg-white transition-all duration-200"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            🚀 Live Demo
                          </motion.a>
                          <motion.a
                            href={project.githubUrl}
                            className="flex-1 bg-gray-900/90 backdrop-blur-sm text-white py-3 px-6 rounded-xl font-semibold text-center hover:bg-gray-900 transition-all duration-200"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            📁 Code
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div 
                  className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    {project.timeline && (
                      <p className="text-sm text-purple-400 font-medium mb-2">
                        {project.timeline}
                      </p>
                    )}
                    {project.role && (
                      <p className="text-sm text-gray-400 mb-4">
                        {project.role}
                      </p>
                    )}
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      className="bg-red-600/20 backdrop-blur-md p-6 rounded-2xl border border-red-500/30"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <h4 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                        🎯 Challenge
                      </h4>
                      <p className="text-red-300 text-sm leading-relaxed">{project.challenge}</p>
                    </motion.div>
                    <motion.div 
                      className="bg-emerald-600/20 backdrop-blur-md p-6 rounded-2xl border border-emerald-500/30"
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <h4 className="text-lg font-bold text-emerald-400 mb-3 flex items-center">
                        💡 Solution
                      </h4>
                      <p className="text-emerald-300 text-sm leading-relaxed">{project.solution}</p>
                    </motion.div>
                  </div>

                  {/* Key Features */}
                  <motion.div>
                    <h4 className="text-lg font-bold text-white mb-4">✨ Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div>
                    <h4 className="text-lg font-bold text-white mb-4">🛠️ Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:text-purple-300 text-purple-700 rounded-full text-sm font-medium border border-purple-500/30 hover:from-purple-600/30 hover:to-blue-600/30 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 backdrop-blur-sm"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Action Buttons for Mobile */}
                  <div className="flex space-x-4 lg:hidden">
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold text-center hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      🚀 Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex-1 bg-gray-700/50 backdrop-blur-md text-white py-4 px-6 rounded-xl font-semibold text-center hover:bg-gray-600/50 transition-all duration-200 border border-gray-600"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      📁 View Code
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects Button */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.a
              href="https://github.com/iduwararajakaruna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Projects on GitHub</span>
              <motion.span
                className="ml-2 text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
