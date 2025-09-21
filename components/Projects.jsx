"use client"

import { useEffect, useState, useRef } from "react"
import { ExternalLink, Github, Cpu, Lightbulb, Brain, Trash2, Shield, Building } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState(null)
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
      projectsRef.current = element
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Oil & Gas Leak Monitoring",
      description: `Built with Next.js, this intelligent dashboard system is developed for real-time leak detection, predictive analytics, and sector-specific monitoring, with a strong focus on Oil & Gas infrastructure. Designed for scalability, the platform ensures operational safety and efficiency. It provides real-time leak detection, predictive analytics, and role-based dashboards for admins and operators.`,
      icon: <Cpu className="w-8 h-8" />,
      tech: ["IoT", "Python", "AI/ML", "Next.js", "React.js", "Node.js", "Tailwind CSS"],
      color: "from-red-500 to-orange-500",
      github: "https://github.com/Kirangv121/Oil-and-Gas-leakage-Monitoring-?tab=readme-ov-file",
      demo: "https://oilandgas121.vercel.app/",
    },
    {
      title: "Ideonox Ideathon-Website",
      description: `IDEONOX Official Website for Cambridge Institute Of Technology North Campus Ideathon Event IDEONOX is the official website for the annual Ideathon event organized by Cambridge Institute Of Technology North Campus. This platform was completely designed, developed, and deployed by me as the Tech Lead for the event. It serves as a central hub for participants, mentors, and organizers to register, view schedules, explore problem statements, and get updates`,
      icon: <Lightbulb className="w-8 h-8" />,
      tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-green-500",
      github: "https://github.com/Kirangv121/ideonox_ideathon",
      demo: "https://ideonox.vercel.app/",
    },
    {
      title: "Remote Crane Monitoring & Predictive Maintenance System",
      description: `The Remote Crane Monitoring & Predictive Maintenance System is an advanced IoT-based solution designed to enhance the safety, efficiency, and predictive maintenance of cranes. This system integrates AI-driven predictive analytics, real-time monitoring, and sensor-based anomaly detection to prevent failures, reduce downtime, and optimize operational costs`,
      icon: <Brain className="w-8 h-8" />,
      tech: ["IOT", "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "AI/ML"],
      color: "from-blue-500 to-cyan-500",
      github:
        "https://github.com/Kirangv121/Remote-Equipment-Monitoring-and-Predictive-Maintenance-Dashboard?tab=readme-ov-file",
      demo: "https://v0-march-26.vercel.app/landing",
    },
    {
      title: "Smart Garbage Monitoring",
      description: `Developed an efficient, IoT-based garbage monitoring system that automates waste level detection and alerts municipal authorities when bins are nearly full, enhancing the waste management process`,
      icon: <Trash2 className="w-8 h-8" />,
      tech: ["HTML", "CSS", "Javascript", "IOT", "AI/ML"],
      color: "from-green-500 to-teal-500",
      github: "https://github.com/Kirangv121/Smart-Garbage-Monitoring?tab=readme-ov-file",
      demo: "https://kgvsmartgarbagemonitoring.netlify.app/",
    },
    {
      title: "Credit Card Fraud Detection",
      description: `The Credit Card Analysis App is a cross-platform desktop application designed to help users manage their credit cards, track financial transactions, and gain insights into spending patterns. The application aims to simplify personal finance management through secure user authentication and dynamic data visualization.`,
      icon: <Shield className="w-8 h-8" />,
      tech: [
        "AI/ML",
        "Flutter",
        "Real-time Processing",
        "Dart",
        "Win32",
        "Data Visualization",
        "Secure Storage",
        "REST API",
      ],
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/Kirangv121/Credit-Card-Fraud-Detection-using-ML?tab=readme-ov-file",
      demo: "https://github.com/Kirangv121/Credit-Card-Fraud-Detection-using-ML/blob/main/Screenshot%202024-12-14%20224118.png",
    },
    {
      title: "Smart Resource Optimization for Efficient Construction Management",
      description: `An AI-powered smart construction platform that enhances efficiency, reduces costs, and promotes sustainability in construction projects through real-time data integration and predictive modeling.`,
      icon: <Building className="w-8 h-8" />,
      tech: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Python", "Machine Learning", "Progress Tracking"],
      color: "from-indigo-500 to-purple-500",
      github:
        "https://github.com/Kirangv121Smart-Resource-Optimization-for-Efficient-Construction-Management-Final-Phase3",
      demo: "https://kzmkxe2xmhv3sk7vfjp1.lite.vusercontent.net/",
    },
  ]

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-800/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient hover:scale-105 transition-transform duration-500">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="p-6 h-full flex flex-col relative overflow-hidden">
                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 transition-opacity duration-300 ${hoveredProject === index ? "opacity-100" : "opacity-0"}`}
                ></div>

                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 self-start relative z-10`}
                >
                  <div className="text-white group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 relative z-10">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300 relative z-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gray-800 text-cyan-400 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300"
                      style={{ transitionDelay: `${techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto relative z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Demo
                  </a>
                </div>

                {/* Floating particles on hover */}
                {hoveredProject === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-8 left-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
