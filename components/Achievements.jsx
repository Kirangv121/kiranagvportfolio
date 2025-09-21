"use client"

import { useEffect, useState } from "react"
import { Trophy, Users, Star, Target } from "lucide-react"

export default function Achievements() {
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

    const element = document.getElementById("achievements")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const achievements = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Dynamic Hackathon 2025 Champion ",
      description: "Winner of the Dynamic Hackathon 2025, organized by Dynamic Crane Engineers Pvt. Ltd & powered by Inter Institutional Inclusive Innovations Centre",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Runner-Up HackToFuture 3.0 2025",
      description: "Secured Runners Up position in this grueling 36-hour National Level Hackathon being Hosted at St Joseph Engineering College,Mangalore in association with EG A/S,EG Hairtools and EG Digital Welfare Denmark",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Top 3 performer Salesforce Trailblazer",
      description: "Successfully completed the 5k Walkathon and Tree Plantation Drive organized by Salesforce Bengaluru Trailblazer Community in collaboration with Bengaluru Dreamin' and Decathlon-Sarjapur on April 20th, 2024",
      color: "from-blue-500 to-cyan-500",
    },
   {
      icon: <Star className="w-8 h-8" />,
      title: "NER TECH Hackathon2.0 Finalist",
      description: "Selected for the finalist of the NER TECH Hackathon2.0 2025 organized bt the Amantya Technologiesand got an incredible opportunity to visit and  gain access to cutting-edge 5G labs across 8 prime locations in North East India",
      color: "from-blue-500 to-cyan-500",
    },



    {
      icon: <Users className="w-8 h-8" />,
      title: "Event Organizer",
      description: "Successfully organized Ideathon event in our college as an technical lead",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Leadership Excellence",
      description: "Led cross-functional teams in various technical projects",
      color: "from-green-500 to-teal-500",
    },
  ]

  const stats = [
    { number: "6+", label: "Projects Completed" },
    { number: "10+", label: "Participated in Hackathons, Ideathons, Competitions" },
    { number: "2", label: "Hackathon Wins" },
    { number: "6+", label: "Certifications" },
    { number: "1+", label: "Years Experience" },
  ]

  return (
    <section id="achievements" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{achievement.icon}</div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {achievement.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
