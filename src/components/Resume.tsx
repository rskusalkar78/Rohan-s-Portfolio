
import { FC } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Download } from "lucide-react";
const Resume: FC = () => {
  // Replace work experiences with interests and technologies
  const interests = [{
    title: "Web Development",
    period: "2024 - Present",
    description: "Passionate about creating responsive and interactive web applications.",
    technologies: ["HTML5 - Building the structure of web pages", "CSS3 - Styling and responsive design", "Node.js - Backend development", "Data Structures & Algorithms - Problem-solving"]
  }];
  return (
    <section id="resume" className="bg-white dark:bg-black">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading text-black dark:text-white">
        <span className="text-2xl font-normal text-zinc-950">05.</span> Resume
      </h2>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4 font-sans">
            As a fresher in the field of software development, I'm enthusiastic about learning and growing. Here's a snapshot of my educational background and interests.
          </p>
        </div>
        
        <Button asChild variant="outline" className="border border-black dark:border-white text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 py-3 px-5 flex items-center gap-2 whitespace-nowrap">
          <a href="/resume" target="_blank">
            <ArrowRight className="w-4 h-4" />
            View Resume
          </a>
        </Button>
      </div>
      
      <div className="space-y-6">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center mb-8">
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-sans">
            Click the button above to view my complete resume in a new tab.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-sans">
            The resume includes detailed information about my education, skills, and projects.
          </p>
        </div>
        
        <h3 className="text-xl font-semibold text-black dark:text-white mb-6 font-heading">
          Education
        </h3>
        
        <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between mb-3">
              <h4 className="text-lg font-semibold text-black dark:text-white font-heading">
                Bachelor of Engineering in Electronics and Telecommunication
              </h4>
              <span className="text-black dark:text-white font-mono text-sm">
                2024 - 2028
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-sans">Dhole Patil College of Engineering, Kharadi</p>
          </CardContent>
        </Card>
        
        <h3 className="text-xl font-semibold text-black dark:text-white mb-6 mt-8 font-heading">
          Interests & Technologies
        </h3>
        
        <div className="space-y-6">
          {interests.map((interest, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-3">
                  <h4 className="text-lg font-semibold text-black dark:text-white font-heading">
                    {interest.title}
                  </h4>
                  <span className="text-black dark:text-white font-mono text-sm">
                    {interest.period}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 font-sans">{interest.description}</p>
                
                <ul className="space-y-2">
                  {interest.technologies.map((technology, i) => (
                    <li key={i} className="flex text-gray-700 dark:text-gray-300 font-sans">
                      <span className="text-black dark:text-white mr-2">▹</span>
                      <span>{technology}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-black dark:text-white mb-4 font-heading">As a Beginner</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-4 font-sans">
            I'm at the start of my software development journey, eager to learn and apply new technologies. While I don't have professional experience yet, I'm committed to continuous learning through online courses, personal projects, and practice.
          </p>
          <p className="text-gray-700 dark:text-gray-300 font-sans">
            I'm currently focusing on building a strong foundation in web development fundamentals and looking for opportunities to collaborate on meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Resume;
