import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, GitFork, Loader2 } from "lucide-react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

const GITHUB_USERNAME = "rskusalkar78";

// Language to technology mapping
const languageMap: Record<string, string> = {
  "TypeScript": "TypeScript",
  "JavaScript": "JavaScript",
  "Python": "Python",
  "Java": "Java",
  "C++": "C++",
  "C": "C",
  "C#": "C#",
  "Go": "Go",
  "Rust": "Rust",
  "PHP": "PHP",
  "Ruby": "Ruby",
  "Swift": "Swift",
  "Kotlin": "Kotlin",
  "Dart": "Dart",
  "HTML": "HTML",
  "CSS": "CSS",
  "SCSS": "SCSS",
  "Vue": "Vue",
  "React": "React",
  "Angular": "Angular",
  "Svelte": "Svelte",
  "Next.js": "Next.js",
  "Node.js": "Node.js",
  "Express": "Express",
  "Django": "Django",
  "Flask": "Flask",
  "Spring": "Spring",
  "Laravel": "Laravel",
  "MongoDB": "MongoDB",
  "PostgreSQL": "PostgreSQL",
  "MySQL": "MySQL",
  "Redis": "Redis",
  "Tailwind CSS": "Tailwind CSS",
  "Bootstrap": "Bootstrap",
};

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=12&type=all`,
          {
            headers: {
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Failed to fetch repositories: ${response.status} ${response.statusText}`
          );
        }

        const data: GitHubRepo[] = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error("Invalid response format from GitHub API");
        }

        // Filter out the current portfolio repository
        const filteredRepos = data
          .filter((repo) => repo.name !== "codestart-dev78" && repo.name !== "portfolio")
          .slice(0, 9); // Show top 9 repositories
        
        setRepos(filteredRepos);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An error occurred while fetching repositories";
        setError(errorMessage);
        console.error("Error fetching repositories:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  const getTechnologies = (repo: GitHubRepo): string[] => {
    const techs: string[] = [];
    
    // Add primary language if available
    if (repo.language) {
      const lang = languageMap[repo.language] || repo.language;
      if (!techs.includes(lang)) {
        techs.push(lang);
      }
    }
    
    // Add topics as technologies (filter common ones)
    if (repo.topics && Array.isArray(repo.topics)) {
      repo.topics.forEach((topic) => {
        const normalizedTopic = topic.charAt(0).toUpperCase() + topic.slice(1);
        if (languageMap[normalizedTopic] && !techs.includes(languageMap[normalizedTopic])) {
          techs.push(languageMap[normalizedTopic]);
        } else if (!techs.includes(normalizedTopic) && techs.length < 5) {
          techs.push(normalizedTopic);
        }
      });
    }

    // If no technologies found, add a default
    if (techs.length === 0) {
      techs.push(repo.language || "Code");
    }

    return techs.slice(0, 4); // Limit to 4 technologies
  };

  return (
    <section id="projects">
      <h2 className="text-2xl md:text-3xl font-bold section-title numbered-heading">
        <span className="text-black dark:text-white font-extralight text-2xl">03.</span> Projects
      </h2>
      
      {loading ? (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-black dark:text-white" />
        </div>
      ) : error ? (
        <div className="text-center py-12">
          <p className="text-black dark:text-white font-medium">Error loading repositories</p>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">{error}</p>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            Please check your GitHub username or try again later.
          </p>
          <Button
            onClick={() => window.location.reload()}
            variant="outline"
            size="sm"
            className="mt-4"
          >
            Retry
          </Button>
        </div>
      ) : repos.length === 0 ? (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          <p>No repositories found.</p>
          <p className="text-sm mt-2">Make sure your repositories are public on GitHub.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {repos.map((repo) => {
              const technologies = getTechnologies(repo);
              return (
                <Card
                  key={repo.id}
                  className="backdrop-blur-sm bg-white/40 dark:bg-black/40 border-black dark:border-white hover:shadow-xl transition-all"
                >
                  <CardHeader>
                    <CardTitle className="text-black dark:text-white flex items-center justify-between">
                      <span className="truncate">{repo.name.replace(/-/g, " ").replace(/_/g, " ")}</span>
                      <div className="flex gap-2 text-sm text-gray-600 dark:text-gray-400 ml-2">
                        {repo.stargazers_count > 0 && (
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {repo.stargazers_count}
                          </span>
                        )}
                        {repo.forks_count > 0 && (
                          <span className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            {repo.forks_count}
                          </span>
                        )}
                      </div>
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-2">
                      {repo.description || "No description available"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white border-gray-300 dark:border-gray-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="flex-1 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
                      >
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-8 text-center">
            <Button
              asChild
              variant="outline"
              className="border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;