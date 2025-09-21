"use client"

import { useEffect, useState } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Code, Instagram, Youtube, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form processing
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)

      // Reset form
      setFormData({ name: "", email: "", message: "" })

      // Hide success message and refresh page after 1 second
      setTimeout(() => {
        setShowSuccess(false)
        window.location.reload()
      }, 1000)
    }, 500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const openEmailClient = () => {
    const mailtoLink = "mailto:kirangv121@gmail.com?subject=Portfolio Contact&body=Hello Kiran,"
    window.open(mailtoLink, "_blank")
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/kirana-g-v-b1039b279/",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Kirangv121",
      color: "hover:text-gray-400",
    },
    {
      name: "HackerRank",
      icon: <Code className="w-6 h-6" />,
      url: "https://www.hackerrank.com/profile/kirangv121",
      color: "hover:text-green-500",
    },
    {
      name: "LeetCode",
      icon: <Code className="w-6 h-6" />,
      url: "https://leetcode.com/u/kiran_gv_121/",
      color: "hover:text-yellow-500",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://x.com/Kiran_gv_2203",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/kiran_gv_121/",
      color: "hover:text-pink-500",
    },
    {
      name: "Youtube",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://www.youtube.com/@Kiran_Tech_121",
      color: "hover:text-red-500",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient hover:scale-105 transition-transform duration-500">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600 focus:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:border-gray-600 focus:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-cyan-400 transition-colors duration-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none hover:border-gray-600 focus:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-gray-800 border border-cyan-400/50 rounded-xl p-8 text-center animate-scale-in shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-4">Thank you for reaching out. I'll get back to you soon!</p>
                  <div className="text-sm text-cyan-400">Refreshing page in a moment...</div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info & Social Links */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="space-y-4">
                  <button
                    onClick={openEmailClient}
                    className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:translate-x-2 group"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span>kirangv121@gmail.com</span>
                  </button>
                  <div className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 hover:translate-x-2 group">
                    <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span>Bengaluru, Karnataka, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link ${link.color} group`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {link.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="achievement-card">
                <h4 className="text-xl font-semibold text-white mb-3 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Available for
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Full Stack Development Projects
                  </li>
                  <li className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    AI/ML Consulting
                  </li>
                  <li className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    IoT Solutions Development
                  </li>
                  <li className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Technical Mentoring
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Quick Contact</h4>
                <p className="text-gray-300 text-sm mb-4">
                  For immediate response, you can also reach me directly via email by clicking the email address above.
                </p>
                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Usually responds within 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-800">
        <div className="text-center text-gray-400">
          <p className="hover:text-cyan-400 transition-colors duration-300">
            &copy; 2025 Kiran G V. All rights reserved.
          </p>
          <p className="mt-2 hover:text-cyan-400 transition-colors duration-300">Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}
