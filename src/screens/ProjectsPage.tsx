import { ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Data for all projects
const allProjects = [
  {
    id: 1,
    title: "124-column Excel file to live database",
    period: "January 2025",
    image: "/bcp-port-img.png",
    url: "/projects/bcp",
  },
  {
    id: 2,
    title: "Site and Lead System Built in 48h",
    period: "March 2025",
    image: "/sbmgmt-port-img-1.png",
    url: "/projects/sb-management",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    period: "2023 - 2025",
    image: "/figure---modern-e-commerce-platform.png", // Placeholder image
    url: "https://google.com",
  },
  {
    id: 4,
    title: "Real Estate Management System",
    period: "2022 - 2023",
    image: "/figure---ai-powered-analytics-dashboard.png", // Placeholder image
    url: "https://google.com",
  },
];

export const ProjectsPage = () => {
  return (
    <>
      <header className="mt-8 mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-3">Things I've built that actually shipped</h1>
        <p className="text-gray-600 dark:text-neutral-400 text-lg">
          Design, code, automation, systems, and more
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allProjects.map((project) => (
          <div key={project.id} className="flex flex-col">
            <div
              className="w-full h-[280px] rounded-xl bg-cover bg-center mb-4 relative group overflow-hidden 
                         after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/70 after:to-transparent 
                         after:opacity-0 group-hover:after:opacity-100 after:transition-opacity after:duration-300"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <Link 
                  to={project.url} 
                  className="bg-white text-black dark:bg-[#151515] dark:text-white rounded-lg py-2 px-4 flex items-center gap-2 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 relative z-10"
                >
                  <span>View Project</span>
                  {!project.url.startsWith('/') && <ExternalLinkIcon className="w-4 h-4" />}
                </Link>
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
    </>
  );
};