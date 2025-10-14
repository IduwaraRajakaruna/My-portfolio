import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// 🛠️ SKILLS SECTION - Technical skills and education
// 📝 Customize: Add your skills, education background, and achievements
const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  // 🛠️ CUSTOMIZE: Update your technical skills by category
  const skillCategories = [
    {
      title: "Frontend", // Category name
      icon: "🎨", // Category icon
      skills: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"], // Add your frontend skills
      count: 5 // Update count to match your skills array length
    },
    {
      title: "Backend", 
      icon: "⚙️",
      skills: ["ASP.NET Core", "Node.js", "Express", "REST APIs"], // Add your backend skills
      count: 4 // Updated count
    },
    {
      title: "Languages",
      icon: "💻", 
      skills: ["JavaScript", "C#", "PHP", "C/C++"], // Programming languages you know
      count: 4
    },
    {
      title: "Cloud & Tools",
      icon: "🛠️",
      skills: ["Azure", "GitHub", "Postman", "VS Code"], // Development tools you use
      count: 4
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["SQL Server", "Cosmos DB", "MongoDB", "MySQL"], // Database technologies
      count: 4
    },
    {
      title: "Others",
      icon: "⚡",
      skills: ["Agile", "Git", "Figma", "Bootstrap"], // Cloud platforms you use
      count: 4
    }
  ]

  const achievements = [
    {
      icon: "🏆",
      title: "Certifications",
      subtitle: "Full Stack Web Development",
      description: "Completed comprehensive web development course"
    },
    {
      icon: "🏆", 
      title: "Activities",
      subtitle: "Tech Club Member",
      description: "Active participant in university tech society"
    },
    {
      icon: "🏆",
      title: "Current Focus", 
      subtitle: "React Development",
      description: "Building modern web applications"
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-800" ref={ref}>
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
              Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Education</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              My academic background and professional certifications
            </motion.p>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Education
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-md p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                    UOM
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">BSc (Hons) IT & Management</h4>
                    <p className="text-purple-400 font-medium">University of Moratuwa</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">2023–2027 (Expected) | CGPA: 3.1</p>
                <div className="flex items-center">
                  <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                    Current Student
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-md p-8 rounded-2xl border border-emerald-500/30 hover:border-emerald-400/50 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                    A/L
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">G.C.E. Advanced Level</h4>
                    <p className="text-emerald-400 font-medium">Kekirawa Central College</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">2018–2021 | Z-Score: 1.7026</p>
                <div className="flex items-center">
                  <span className="inline-block px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
                    2A 1B | Physical Science
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Technical Skills Grid */}
          <motion.div 
            className="mb-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Technical Skills
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-shadow duration-300 border border-gray-700"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{category.icon}</span>
                      <h4 className="text-xl font-bold text-white">{category.title}</h4>
                    </div>
                    <span className="w-8 h-8 bg-purple-600/20 text-purple-400 rounded-full flex items-center justify-center font-bold text-sm border border-purple-500/30">
                      {category.count}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium hover:bg-purple-600/20 hover:text-purple-400 transition-colors duration-200 border border-gray-600/50"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements & Activities */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Achievements & Activities
            </motion.h3>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-purple-600/20 backdrop-blur-md rounded-2xl hover:from-purple-600/20 hover:to-blue-600/20 transition-all duration-300 border border-gray-700"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-5xl mb-4">{achievement.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                  <h5 className="text-purple-400 font-semibold mb-3">{achievement.subtitle}</h5>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="mt-20 text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-12 text-white border border-gray-700"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h4 
              className="text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Ready to Collaborate?
            </motion.h4>
            <motion.p 
              className="text-purple-200 mb-8 text-lg"
              whileHover={{ scale: 1.02 }}
            >
              Let's build something amazing together with these technologies!
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors duration-200 shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
