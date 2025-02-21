import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, User, ChevronDown, Phone, MapPin, Award, ChevronLeft, ChevronRight, Building2, Instagram } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Haikal Ammar Waluya</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Developer and Designer</p>
          <div className="flex gap-4 justify-center mb-12">
            <a href="https://github.com/mantansantri" className="text-white hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/haikal-waluya-waltods/" className="text-white hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/haikal_waluya/" className="text-white hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <User className="text-blue-600" />
            About Me
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-blue-100">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQHQ-8S0yPRiLA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721775637261?e=1744848000&v=beta&t=ulmr0b9cUxsYTB-BL3BMhE6QSRGD4aG41p2GsHIOfWs"
                    alt="John Doe"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-600 leading-relaxed">
                Hello, my name is Haikal, and I'm a Software Engineering student at IDN Boarding School Solo.  
                My hometown is Bintaro, South Tangerang. I specialize in front-end web development and design, 
                and I also have experience building website back-ends.
                </p>
                <div className="mt-6 flex gap-4">
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-primary inline-flex items-center gap-2"
                  >
                    <Mail size={18} />
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code2 className="text-blue-600" />
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL', 'Tailwind', 'AJAX', 'Jquery', 'Figma'
            ].map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <p className="font-medium text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="text-blue-600" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'E-commerce Website',
                description: 'A full-stack e-commerce solution built with PHP and Laravel',
                tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'Midtrans Payment']
              },
              {
                title: 'News Website',
                description: 'A news website built with PHP and Laravel',
                tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel']
              },
              {
                title: 'Lezz Server Website',
                description: 'A main page of Lezz Server Website builf with Tailwind',
                tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind']
              },
              {
                title: 'Profile Website',
                description: 'My old profile website',
                tech: ['HTML', 'CSS', 'JavaScript']
              },
              {
                title: 'Labunda Website',
                description: 'A bakery company full-stack website built with Laravel',
                tech: ['HTML', 'CSS', 'JavaScript', 'Laravel']
              },
              {
                title: 'Kandang Bagus Website',
                description: 'A frontend farm website built with HTML and CSS',
                tech: ['HTML', 'CSS']
              },
            ].map((project) => (
              <div key={project.title} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Building2 className="text-blue-600" />
            Experience
          </h2>
          <div className="space-y-6">
            {[
              {
                role: "Design Temporary Teacher",
                company: "Fathona Junior High School",
                location: "Palembang, Indonesia",
                period: "2023",
                description: "Become a temporary design teacher who teaching about Figma basic",
                achievements: [
                  "Give students knowledge about design and Figma basic",
                ]
              },
              {
                role: "Junior Frontend Developer",
                company: "PT. Dumbways",
                location: "Depok, Indonesia",
                period: "2023",
                description: "Worked on front-end development using Tailwind",
                achievements: [
                  "Developed responsive UI components library",
                  "Contributed to the company's design system",
                  "Learning more about Tailwind"
                ]
              },
              {
                role: "Design Temporary Teacher",
                company: "Al-Fath Junior High School",
                location: "Kediri, Indonesia",
                period: "2024",
                description: "Become a temporary design teacher who teaching about Figma and Canva",
                achievements: [
                  "Give students more knowledge about Figma and Canva",
                  "Teach more than 10 student on one class"
                ]
              },
              {
                role: "Frontend Developer",
                company: "Labunda Bakery",
                location: "Solo, Indonesia",
                period: "2024",
                description: "Building a full-stack bakery company website with team",
                achievements: [
                  "Built full-stack website with team",
                  "Using HTML, CSS and Javascript as well",
                ]
              },
              {
                role: "Frontend Developer Intern",
                company: "Telkom Indonesia",
                location: "Sorong, Indonesia",
                period: "2024-2025",
                description: "Building an admin page with AJAX and Jquery",
                achievements: [
                  "Make a full website using AJAX and JQuery",
                  "Completing a website without team",
                ]
              },
            ].map((experience, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                    <p className="text-blue-600 font-medium">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="font-medium">{experience.period}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2"></span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Award className="text-blue-600" />
            Certificate
          </h2>
          <div className="space-y-6">
            {[
              {
                role: "Learning Flutter For Beginner",
                company: "Great Learning",
                period: "2024",
              },
              {
                role: "Frontend - HTML",
                company: "Great Learning",
                period: "2024",
              },
              {
                role: "Frontend - CSS",
                company: "Great Learning",
                period: "2024",
              },
              {
                role: "Pemrograman Dengan Dart",
                company: "Dicoding",
                period: "2024",
              },
              {
                role: "Programming With Laravel",
                company: "Binus Center",
                period: "2023",
              },
            ].map((experience, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{experience.role}</h3>
                    <p className="text-blue-600 font-medium">{experience.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-gray-600">
                    <div className="font-medium">{experience.period}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Mail className="text-blue-600" />
            Contact Me
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                    ammarwaluya2007@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +62 852 1532 5560
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-600">
                    Banten, Indonesia
                  </span>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/mantansantri" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/haikal-waluya-waltods/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/haikal_waluya/" className="text-gray-600 hover:text-blue-600 transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <form className="space-y-4" id='contact'>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://github.com/mantansantri" className="hover:text-gray-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/haikal-waluya-waltods/" className="hover:text-gray-300 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/haikal_waluya/" className="text-white hover:text-gray-300 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Haikal Waluya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;