import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Menu, X, User, Code, Briefcase, GraduationCap, Award, FolderOpen } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">
              Jovaney Atef
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Experience', id: 'experience' },
                { name: 'Education', id: 'education' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Certifications', id: 'certifications' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Experience', id: 'experience' },
                { name: 'Education', id: 'education' },
                { name: 'Projects', id: 'projects' },
                { name: 'Skills', id: 'skills' },
                { name: 'Certifications', id: 'certifications' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
                Jovaney <span className="text-blue-600">Atef</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 font-light">
                Software Developer & AI Specialist
              </h2>
              <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
                Passionate programmer with expertise in Python, Java, C++, and machine learning. 
                Specializing in AI applications and scalable software development.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <a 
                href="/jovaneyatef.pdf" 
                download
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 px-8 py-3 border border-gray-300 rounded-lg hover:border-blue-600"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
            
            <div className="flex justify-center space-x-6 pt-8">
              <a 
                href="https://www.linkedin.com/in/jovaney-atef-35b4ab2a4" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="#" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a 
                href="mailto:jovaneyatef@gmail.com" 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-bounce"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto mb-8 overflow-hidden rounded-full shadow-2xl">
                <img 
                  src="/jovaney.jpg" 
                  alt="Jovaney Atef" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                Hello! I'm Jovaney, a passionate Software Developer based in Hurghada, Egypt.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm a dedicated programmer and software developer with a strong foundation in software engineering principles 
                and a proven track record of developing efficient, scalable, and user-friendly applications. My expertise spans 
                multiple programming languages including Python, Java, and C++, with hands-on experience in web development, 
                database management, and software testing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing my Bachelor's degree in Information Technology with a focus on AI and machine learning, 
                I'm passionate about creating innovative solutions that solve real-world problems. My problem-solving abilities, 
                attention to detail, and strong communication skills enable me to collaborate effectively with cross-functional teams.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={16} />
                    Hurghada, Egypt
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialization</h4>
                  <p className="text-gray-600">AI & Machine Learning</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">jovaneyatef@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-600">01278290565</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Trainer</h3>
                      <p className="text-blue-600 font-medium">Hurghada International Airport</p>
                      <p className="text-gray-500 text-sm">Hurghada, Egypt</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">August 2024 - September 2024</span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-600 leading-relaxed">
                      Completed 90 hours of intensive training in the Communications and IT Department, gaining expertise in 
                      network and database management, security systems, and low voltage communications.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Worked with airport systems including fire alarms, public address systems, video conferencing, and VHF communications
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Operated specialized equipment including X-ray scanners, biometric gates, CCTV, and access control systems
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        Gained hands-on experience with network infrastructure and security protocols in a high-security environment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Bachelor's in Information Technology</h3>
                      <p className="text-blue-600 font-medium">Egyptian E-learning University</p>
                      <p className="text-gray-600">Minor: AI and Machine Learning</p>
                      <p className="text-gray-500 text-sm">Hurghada, Egypt</p>
                    </div>
                    <span className="text-gray-500 font-medium mt-2 md:mt-0">Expected 2025</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Currently pursuing a comprehensive degree in Information Technology with specialized focus on 
                    Artificial Intelligence and Machine Learning. The program covers software engineering principles, 
                    database management, network security, and advanced AI applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
  <img src="/jovaney.jpg" alt="Jovaney Atef" style={{ maxWidth: "100%", height: "auto", margin: "20px 0" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "DevSpot",
                description: "Full-function website for developers to upload and share projects for learning and collaboration. Features an admin dashboard for data management and an investment section for investors to discover promising projects.",
                tech: ["Web Development", "Dashboard", "Database Management"],
                category: "Web Platform",
                image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Sentiment Analysis System", 
                description: "Python application with GUI that analyzes text to detect sentiment (positive, negative, or neutral). Implemented using natural language processing techniques with an intuitive user interface.",
                tech: ["Python", "NLP", "GUI", "Machine Learning"],
                category: "AI/ML",
                image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Named Entity Recognition System",
                description: "Advanced text processing system that extracts and categorizes various entities from text including nouns, names, locations, timezones, and other word types with detailed classification output.",
                tech: ["Python", "NLP", "Text Processing", "AI"],
                category: "AI/ML",
                image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "TicTacToe Game",
                description: "Interactive Python game featuring multiple difficulty levels (easy and hard) with multiplayer support. Built using numpy for game logic and pygame for graphics rendering.",
                tech: ["Python", "Pygame", "Numpy", "Game Development"],
                category: "Game Development",
                image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      <ExternalLink size={16} />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Skills",
                icon: <Code size={32} />,
                skills: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS", "Database Management", "Software Testing"],
                color: "blue"
              },
              {
                title: "Core Knowledge", 
                icon: <FolderOpen size={32} />,
                skills: ["Artificial Intelligence", "Machine Learning", "Software Engineering", "Network Security", "System Administration"],
                color: "purple"
              },
              {
                title: "Soft Skills",
                icon: <User size={32} />,
                skills: ["Communication", "Problem Solving", "Adaptability", "Team Collaboration", "English Fluency", "Project Management"],
                color: "green"
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                <div className={`bg-${category.color}-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <div className={`text-${category.color}-600`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2">
                      <div className={`w-2 h-2 bg-${category.color}-600 rounded-full`}></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Device Configuration and Management",
                issuer: "IT Specialist",
                year: "2024",
                description: "Demonstrated foundational knowledge in Windows devices and mobility.",
                color: "blue"
              },
              {
                title: "Switching, Routing, and Wireless Essentials",
                issuer: "CCNA",
                year: "2023", 
                description: "Successfully completed with strong knowledge of configuration, best practices, protocols, and troubleshooting.",
                color: "green"
              },
              {
                title: "Introduction to Networks",
                issuer: "CCNA",
                year: "2022",
                description: "Comprehensive understanding of networking fundamentals and protocols.",
                color: "purple"
              }
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className={`bg-${cert.color}-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <Award className={`text-${cert.color}-600`} size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                <p className={`text-${cert.color}-600 font-medium mb-1`}>{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{cert.year}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <a href="mailto:jovaneyatef@gmail.com" className="text-blue-600 hover:text-blue-800">
                    jovaneyatef@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <a href="tel:01278290565" className="text-blue-600 hover:text-blue-800">
                    01278290565
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Hurghada, Egypt</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Linkedin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/jovaney-atef-35b4ab2a4" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2025 Jovaney Atef. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;