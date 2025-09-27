import React from 'react'

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Software Engineer with a passion for creating innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Hello! I'm Iduwara Rajakaruna
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a dedicated Software Engineer with expertise in full-stack development, 
                  specializing in modern web technologies and frameworks. I have a strong 
                  background in building scalable applications and implementing efficient solutions.
                </p>
                
                <p>
                  My journey in software development has been driven by curiosity and a 
                  commitment to continuous learning. I enjoy tackling complex problems and 
                  turning ideas into reality through clean, efficient code.
                </p>
                
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to 
                  open-source projects, and staying up-to-date with the latest industry trends.
                </p>
              </div>

              {/* Quick Facts */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600">Sri Lanka</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-1">Experience</h4>
                  <p className="text-gray-600">2+ Years</p>
                </div>
              </div>
            </div>

            {/* Right Content - Professional Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-blue-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <p className="text-gray-600 font-medium">Professional Photo</p>
                  <p className="text-sm text-gray-500">Replace with actual image</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
