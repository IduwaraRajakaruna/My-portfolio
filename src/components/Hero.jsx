import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse-slow delay-75"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-100 rounded-full opacity-20 animate-pulse-slow delay-150"></div>
          <div className="absolute bottom-32 right-10 w-12 h-12 bg-blue-100 rounded-full opacity-20 animate-pulse-slow delay-300"></div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-blue-500 p-1">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-600">IR</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Hi, I'm <span className="text-gradient">Iduwara</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-slide-up delay-100">
            Software Engineer
          </p>
          
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto animate-slide-up delay-200">
            Passionate about building innovative solutions and creating exceptional user experiences 
            with modern technologies and best practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
