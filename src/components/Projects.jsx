import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "User authentication and authorization",
        "Product catalog with search and filters",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "Admin dashboard for inventory management"
      ]
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "📋",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time collaboration",
        "Drag and drop task organization",
        "Team member assignment",
        "Progress tracking and analytics",
        "Mobile responsive design"
      ]
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A comprehensive weather application with location-based forecasts and interactive maps.",
      image: "🌤️",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Current weather conditions",
        "7-day weather forecast",
        "Interactive weather maps",
        "Location-based search",
        "Weather data visualization"
      ]
    },
    {
      id: 4,
      title: "API Gateway Service",
      description: "A scalable API gateway with rate limiting, authentication, and request routing capabilities.",
      image: "🔌",
      technologies: ["Node.js", "Express", "Redis", "JWT", "Docker"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Request routing and load balancing",
        "Rate limiting and throttling",
        "Authentication and authorization",
        "API documentation generation",
        "Monitoring and analytics"
      ]
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization and reporting.",
      image: "📊",
      technologies: ["React", "D3.js", "Express", "PostgreSQL", "AWS"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Multi-platform social media integration",
        "Real-time analytics and reporting",
        "Custom dashboard creation",
        "Automated report generation",
        "Team collaboration tools"
      ]
    },
    {
      id: 6,
      title: "Mobile Food Delivery",
      description: "Cross-platform mobile app for food delivery with real-time tracking and payment integration.",
      image: "🍕",
      technologies: ["React Native", "Firebase", "Google Maps", "Stripe"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
      features: [
        "Real-time order tracking",
        "GPS-based delivery routing",
        "Multiple payment options",
        "Restaurant management system",
        "Customer rating and reviews"
      ]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and technical projects
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-blue-100 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="flex-1 bg-primary-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/iduwararajakaruna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
