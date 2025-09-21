"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Mail } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Transforming ideas into intelligent digital solutions"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Network Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Network Animation Canvas */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
              </radialGradient>
            </defs>

            {/* Animated Network Nodes */}
            <g className="animate-pulse-slow">
              <circle cx="10%" cy="20%" r="2" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="25%" cy="15%" r="1.5" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
              </circle>
              <circle cx="40%" cy="25%" r="2.5" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="5s" repeatCount="indefinite" />
              </circle>
              <circle cx="60%" cy="18%" r="1.8" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="3.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="75%" cy="30%" r="2.2" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="90%" cy="22%" r="1.6" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.8s" repeatCount="indefinite" />
              </circle>

              <circle cx="15%" cy="70%" r="1.9" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="4.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="35%" cy="80%" r="2.1" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.2;1;0.2" dur="3.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="55%" cy="75%" r="1.7" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="4.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="80%" cy="85%" r="2.3" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3.7s" repeatCount="indefinite" />
              </circle>

              <circle cx="20%" cy="50%" r="1.4" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="4.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="70%" cy="55%" r="2.0" fill="url(#nodeGradient)">
                <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.9s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Animated Connection Lines */}
            <g stroke="#22d3ee" strokeWidth="0.5" fill="none" opacity="0.4">
              <line x1="10%" y1="20%" x2="25%" y2="15%">
                <animate attributeName="stroke-opacity" values="0.1;0.6;0.1" dur="4s" repeatCount="indefinite" />
              </line>
              <line x1="25%" y1="15%" x2="40%" y2="25%">
                <animate attributeName="stroke-opacity" values="0.2;0.7;0.2" dur="5s" repeatCount="indefinite" />
              </line>
              <line x1="40%" y1="25%" x2="60%" y2="18%">
                <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3.5s" repeatCount="indefinite" />
              </line>
              <line x1="60%" y1="18%" x2="75%" y2="30%">
                <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4.2s" repeatCount="indefinite" />
              </line>
              <line x1="75%" y1="30%" x2="90%" y2="22%">
                <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="3.8s" repeatCount="indefinite" />
              </line>

              <line x1="15%" y1="70%" x2="35%" y2="80%">
                <animate attributeName="stroke-opacity" values="0.1;0.7;0.1" dur="4.5s" repeatCount="indefinite" />
              </line>
              <line x1="35%" y1="80%" x2="55%" y2="75%">
                <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3.2s" repeatCount="indefinite" />
              </line>
              <line x1="55%" y1="75%" x2="80%" y2="85%">
                <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="4.8s" repeatCount="indefinite" />
              </line>

              <line x1="20%" y1="50%" x2="70%" y2="55%">
                <animate attributeName="stroke-opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" />
              </line>
              <line x1="10%" y1="20%" x2="20%" y2="50%">
                <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="4.3s" repeatCount="indefinite" />
              </line>
              <line x1="70%" y1="55%" x2="75%" y2="30%">
                <animate attributeName="stroke-opacity" values="0.1;0.5;0.1" dur="3.6s" repeatCount="indefinite" />
              </line>
            </g>
          </svg>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400/60 rounded-full animate-float"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-blue-400/70 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-300/50 rounded-full animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-1 h-1 bg-blue-300/60 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-3/4 left-1/5 w-0.5 h-0.5 bg-sky-400/80 rounded-full animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-cyan-500/40 rounded-full animate-float"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform transition-all duration-700 group-hover:scale-110 hover-glow">
              <Image
                src="/images/kirana-photo.jpg"
                alt="Kiran G V - Full Stack Developer"
                width={320}
                height={320}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: "center top" }}
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient animate-fade-in hover:scale-105 transition-transform duration-500 cursor-default">
              Kiran G V
            </h1>

            <div className="text-xl md:text-2xl text-cyan-400 mb-4 font-semibold animate-slide-up hover:text-cyan-300 transition-colors duration-300">
              Full Stack Developer | AI/ML | IoT Enthusiast
            </div>

            <div className="text-lg md:text-xl text-gray-300 mb-8 h-8 animate-scale-in">
              {displayText}
              <span className="animate-pulse text-cyan-400">|</span>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <button onClick={scrollToProjects} className="button-primary group">
                <span className="relative z-10 flex items-center justify-center">
                  View Projects
                  <ChevronDown className="ml-2 w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </button>

              <button onClick={scrollToContact} className="button-secondary group">
                <Mail className="inline-block w-5 h-5 mr-2 transform group-hover:scale-110 transition-transform duration-300" />
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer hover:scale-125 transition-transform duration-300"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
            </div>
            <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
