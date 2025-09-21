"use client"

import { useEffect, useState } from "react"
import { MapPin, GraduationCap, Calendar, Code } from "lucide-react"

export default function About() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "Cambridge Institute of Technology North Campus, Bengaluru",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "Bengaluru, Karnataka, India",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Specialization",
      description: "AI/ML, IoT, Full Stack Development",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Experience",
      description: "1+ Years in Development",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in AI/ML and IoT technologies. Currently
              pursuing my education at Cambridge Institute of Technology, Bengaluru, I specialize in creating
              intelligent digital solutions that bridge the gap between innovative ideas and practical implementations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              My expertise spans across modern web technologies, machine learning algorithms, and IoT systems. I'm
              particularly interested in developing applications that leverage artificial intelligence to solve
              real-world problems, from predictive maintenance systems to smart monitoring solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me exploring the latest tech trends, participating in hackathons, or
              contributing to open-source projects. I believe in continuous learning and staying at the forefront of
              technological innovation.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
