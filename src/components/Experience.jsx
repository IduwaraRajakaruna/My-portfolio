import React from 'react'

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "Remote",
      description: [
        "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance",
        "Participated in code reviews and contributed to technical documentation"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]
    },
    {
      title: "Junior Software Developer",
      company: "Digital Innovations Ltd.",
      period: "2021 - 2022",
      location: "Colombo, Sri Lanka",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Worked on database design and API development",
        "Assisted in testing and debugging applications",
        "Learned agile development methodologies and version control systems"
      ],
      technologies: ["JavaScript", "React", "MySQL", "Git", "REST APIs"]
    },
    {
      title: "Intern Software Developer",
      company: "StartUp Hub",
      period: "2020 - 2021",
      location: "Colombo, Sri Lanka",
      description: [
        "Gained hands-on experience in software development lifecycle",
        "Contributed to frontend development using HTML, CSS, and JavaScript",
        "Participated in team meetings and project planning sessions",
        "Learned about software testing and quality assurance practices"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-primary-200"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <p className="text-primary-600 font-semibold mb-1">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500">
                        <span>{exp.period}</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
