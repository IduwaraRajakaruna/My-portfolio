import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

// 🎓 EDUCATION SECTION - Timeline layout for academic background
// 📝 Customize: Update education details and timeline
const Education = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const timelineData = [
    {
      id: 1,
      year: "2023–2027",
      status: "Expected",
      institution: "University of Moratuwa",
      degree: "BSc (Hons) in Information Technology and Management",
      details: "CGPA: 3.1",
      description: "",
      achievements: [
        "Software Engineering",
        "Qulity Assurance Engineering",
      ],
      icon: "🎓",
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 2,
      year: "2018–2021",
      status: "Completed",
      institution: "Kekirawa Central College",
      degree: "G.C.E. Advanced Level Examination",
      details: "2A 1B | Z-Score: 1.7026",
      description: "Commerce Stream",
      achievements: ["With ICT"
      ],
      icon: "📚",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-gray-800" ref={ref}>
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
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Education <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              My academic path in technology and software engineering
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <motion.div 
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-800">
                    <motion.div
                      className="w-4 h-4 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-md p-8 rounded-3xl shadow-xl dark:shadow-purple-500/10 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                      {/* Header */}
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mr-4 shadow-lg`}>
                          {item.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-600/20 px-3 py-1 rounded-full">
                              {item.year}
                            </span>
                            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                              item.status === 'Expected' 
                                ? 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-600/20' 
                                : 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-600/20'
                            }`}>
                              {item.status}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">
                            {item.degree}
                          </h3>
                          <p className="text-purple-600 dark:text-purple-400 font-semibold">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="mb-6">
                        <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                          {item.details}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                          Key Highlights
                        </h4>
                        <ul className="space-y-2">
                          {item.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-20"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 dark:from-purple-600/10 dark:to-blue-600/10 backdrop-blur-md rounded-3xl p-12 border border-purple-200/20 dark:border-gray-700"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Continuous Learning Journey
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-300 mb-8 text-lg max-w-2xl mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                Always expanding knowledge in emerging technologies, software engineering best practices, and innovative solutions.
              </motion.p>
              <motion.a
                href="#contact"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Discuss Opportunities
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education