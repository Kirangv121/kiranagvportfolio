"use client"

import { useEffect, useState } from "react"
import { Award, Calendar, MapPin, Trophy } from "lucide-react"

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("experience")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const experiences = [

  {
      title: "C&P Trainee",
      company: "Samsung Innovation Campus",
      period: "FEB 2024 - MAR 2024",
      location: "CITNC Bengaluru, India",
      description:
        " Learned Python and applied it to develop a data-driven prototype using machine learning, demonstrating realworld problem-solving skills",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "IoT Trainee",
      company: "Samsung Innovation Campus",
      period: "OCT 2024 - MAR 2025",
      location: "Bengaluru, India",
      description:
        "Intensive training program focusing on IoT development and AI/ML applications. Gained hands-on experience with Raspberry Pi, Bharat Pi, and  sensors while developing prototypes. Integrated real-time sensor data with AI/ML models, cloud platforms, and automated using Linux-based systems.",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
       title: "SDE Intern",
      company: "Heft Infra Solutions Ltd Mumbai",
      period: "AUG 2024 - Present",
      location: "Mumbai, Maharashtra",
      description:
        "I have been offered the role of Software Development Engineer Intern at HEFT Infra Solutions Limited (Formerly Known as Shethia Erector's and Material Handlers Limited). In this position, I will be working on both frontend development, creating intuitive and responsive user interfaces, and backend development, building reliable and scalable services.My responsibilities include contributing to the design, implementation, and integration of full-stack solutions that align with business requirements. This role provides me the opportunity to strengthen my expertise in software engineering and system development through real-world projects.",
      icon: <Award className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",

    }

  ]

  const certifications = [
    "Tata Group - Data Visualisation",
    "Microsoft Learning - Microsoft Student Ambassadors Technical Training",
    "ISRO - RS&GIS online course ",
    "Udemy - Javascript",
    "Great Learning - Frontend Development ",
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Experience & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-gray-700 hover:border-cyan-400 transition-colors duration-300"
                >
                  <div className="absolute -left-3 top-0">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center`}
                    >
                      <div className="text-white text-xs">{exp.icon}</div>
                    </div>
                  </div>

                  <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <div className="text-cyan-400 font-semibold mb-2">{exp.company}</div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{cert}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
