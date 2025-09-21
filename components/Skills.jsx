"use client"

import { useEffect, useState } from "react"

export default function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C", "SQL"],
      color: "from-blue-500 to-cyan-500",
      icon: "💻",
    },
    {
      title: "Frontend Technologies",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
      color: "from-green-500 to-teal-500",
      icon: "🎨",
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Flask", "Spring Boot", "REST APIs"],
      color: "from-purple-500 to-pink-500",
      icon: "⚙️",
    },
    {
      title: "Databases & Cloud",
      skills: ["MongoDB", "MySQL", "Google Cloud", "Firebase", "SQL"],
      color: "from-orange-500 to-red-500",
      icon: "☁️",
    },
    {
      title: "AI/ML & Data",
      skills: ["Machine Learning", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
      color: "from-indigo-500 to-purple-500",
      icon: "🤖",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "Postman", "Power BI", "Docker"],
      color: "from-cyan-500 to-blue-500",
      icon: "🛠️",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient hover:scale-105 transition-transform duration-500">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skill-card group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3 group-hover:scale-125 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3
                  className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group/skill hover:scale-105 hover:translate-x-2"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                  >
                    <span className="text-gray-300 group-hover/skill:text-white transition-colors duration-300">
                      {skill}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover/skill:opacity-100 transition-all duration-300 group-hover/skill:scale-150"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
