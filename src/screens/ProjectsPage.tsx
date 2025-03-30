import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Data for all projects
const allProjects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    period: "2024 - 2025",
    image: "/figure---modern-e-commerce-platform.png",
    url: "https://neofolio.shadcnuikit.com/projects/modern-ecommerce-platform",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    period: "2023 - 2024",
    image: "/figure---ai-powered-analytics-dashboard.png",
    url: "https://neofolio.shadcnuikit.com/projects/ai-analytics-dashboard",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    period: "2023 - 2025",
    image: "/figure---modern-e-commerce-platform.png", // Placeholder image
    url: "https://neofolio.shadcnuikit.com/projects/mobile-banking-app",
  },
  {
    id: 4,
    title: "Real Estate Management System",
    period: "2022 - 2023",
    image: "/figure---ai-powered-analytics-dashboard.png", // Placeholder image
    url: "https://neofolio.shadcnuikit.com/projects/real-estate-management",
  },
];

export const ProjectsPage = () => {
  return (
    <div className="p-8 max-w-[1000px] mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold text-neutral-950 dark:text-white mb-3">Projects</h1>
        <p className="text-gray-600 dark:text-neutral-400 text-lg">
          Explore cutting-edge design innovations that transform ideas into reality
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allProjects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <div
              className="w-full h-[280px] rounded-xl bg-cover bg-center mb-4 relative group overflow-hidden"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-black dark:bg-[#151515] dark:text-white rounded-lg py-2 px-4 flex items-center gap-2 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span>View Project</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-1">
              {project.title}
            </h3>
            <span className="text-neutral-500 dark:text-neutral-400 text-sm">
              {project.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};