import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Mail, Github, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with back button */}
        <div className="mb-8 flex justify-between items-center">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
          <Button 
            onClick={() => window.print()} 
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Rohan Shankar Kusalkar</h1>
            <p className="text-xl mb-4">Software Developer & Full-Stack Engineer</p>
            <div className="flex justify-center gap-6 flex-wrap text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:rkusalkar78@gmail.com" className="hover:underline">
                  rkusalkar78@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a href="https://www.linkedin.com/in/rohan-kusalkar-455ab1329" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href="https://codestart.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  CodeStart.dev
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <a href="https://github.com/rohanshankarkusalkar" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://www.instagram.com/rohhann.6?igsh=bDRzdXF6OHJqajJi" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Passionate Software Developer with expertise in modern web technologies and full-stack development. 
                Experienced in building scalable, responsive applications using React, TypeScript, and modern development tools. 
                Strong problem-solving skills with a focus on creating exceptional user experiences and writing clean, 
                maintainable code. Currently pursuing Bachelor of Engineering in Electronics and Telecommunication.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Education
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800">
                  Bachelor of Engineering in Electronics and Telecommunication
                </h3>
                <p className="text-blue-600 font-medium">Dhole Patil College of Engineering, Kharadi</p>
                <p className="text-gray-600">2024 - 2028</p>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Backend & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'MongoDB', 'Git', 'Vite', 'Docker'].map((skill) => (
                      <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Featured Projects
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Portfolio Website</h3>
                  <p className="text-gray-700 mb-2">
                    Modern, responsive portfolio website showcasing professional work and skills. 
                    Features smooth animations, dark/light theme support, and optimized performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
                      <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Web Development Projects</h3>
                  <p className="text-gray-700 mb-2">
                    Various web applications built during learning journey, focusing on responsive design, 
                    user experience, and modern development practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'React'].map((tech) => (
                      <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Experience & Learning
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Self-Directed Learning & Projects</h3>
                <p className="text-blue-600 font-medium mb-2">2024 - Present</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Developed multiple responsive web applications using modern frameworks</li>
                  <li>• Learned and applied best practices in web development and software engineering</li>
                  <li>• Built projects focusing on user experience and performance optimization</li>
                  <li>• Continuously expanding knowledge through online courses and documentation</li>
                </ul>
              </div>
            </section>

            {/* Interests */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
                Interests & Goals
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  Passionate about web development and creating digital solutions that make a difference. 
                  Currently focusing on mastering full-stack development, learning new technologies, 
                  and building projects that solve real-world problems. Eager to contribute to meaningful 
                  projects and collaborate with experienced developers to grow professionally.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body { margin: 0; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:rounded-none { border-radius: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default ResumePage;