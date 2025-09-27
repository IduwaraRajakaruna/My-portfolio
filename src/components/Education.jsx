import React from 'react'

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of Technology",
      period: "2018 - 2022",
      location: "Colombo, Sri Lanka",
      gpa: "3.8/4.0",
      description: "Comprehensive study of software engineering principles, algorithms, data structures, and modern development practices.",
      highlights: [
        "Dean's List for 3 consecutive semesters",
        "Final year project on AI-powered web applications",
        "Active member of Computer Science Society",
        "Completed internship program with distinction"
      ]
    },
    {
      degree: "Advanced Level - Physical Science Stream",
      institution: "National High School",
      period: "2016 - 2018",
      location: "Galle, Sri Lanka",
      gpa: "A/A/B",
      description: "Focused on Mathematics, Physics, and Chemistry with strong analytical and problem-solving foundation.",
      highlights: [
        "Ranked in top 5% of district",
        "Mathematics Olympiad participant",
        "Science exhibition award winner",
        "Prefect and student council member"
      ]
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-REACT-2022-456"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2021",
      credentialId: "FCC-JS-2021-789"
    }
  ]

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Education & <span className="text-gradient">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My academic background and professional certifications
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-primary-600 font-semibold mb-1">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-500 mb-2">
                        <span>{edu.period}</span>
                        <span>{edu.location}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">GPA: {edu.gpa}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{edu.description}</p>

                    {/* Highlights */}
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Key Highlights:</h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="text-primary-600 mr-2 mt-1">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-4 border border-primary-100">
                    <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                    <p className="text-primary-600 font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 mb-2">{cert.date}</p>
                    <p className="text-xs text-gray-400">ID: {cert.credentialId}</p>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl text-white text-center">
                <h4 className="font-bold mb-2">Continuous Learning</h4>
                <p className="text-sm opacity-90 mb-4">
                  Always expanding my knowledge through online courses and professional development
                </p>
                <button className="bg-white text-primary-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                  View All Certificates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
