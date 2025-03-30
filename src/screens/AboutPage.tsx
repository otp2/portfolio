import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { 
  FileTextIcon, 
  ClipboardCopyIcon, 
  MailIcon, 
  PhoneIcon 
} from "lucide-react";

export const AboutPage = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("owenpechous@gmail.com").then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  // Metrics data
  const metrics = [
    { name: "Years Experience", value: "9+" },
    { name: "Projects Completed", value: "100+" },
    { name: "Satisfaction Rate", value: "100%" },
  ];

  // Skills data
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "NodeJS",
    "Redux",
    "UI/UX Design",
    "System Design",
    "Frontend Architecture",
    "Design Systems",
    "Web Performance",
    "Web Accessibility",
    "Figma",
    "Git",
  ];

  // Work History data
  const workHistory = [
    {
      company: "GlobalTech Solutions",
      role: "Senior Frontend Engineer",
      period: "2022 - Present",
      description: "Led the development of design systems and component libraries that improved development efficiency by 40%. Implemented performance optimizations that reduced load times by 60%.",
    },
    {
      company: "Innovation Labs",
      role: "Frontend Developer",
      period: "2019 - 2022",
      description: "Architected and built responsive web applications with React and TypeScript. Created reusable component libraries and collaborated with designers to implement pixel-perfect interfaces.",
    },
    {
      company: "Digital First Agency",
      role: "UI Developer",
      period: "2015 - 2019",
      description: "Developed interactive frontend solutions for clients across various industries. Worked with design teams to transform concepts into functional interfaces using modern web technologies.",
    },
  ];

  return (
    <div className="p-8 max-w-[900px] mx-auto">
      {/* About Header Section */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
          <div className="flex-shrink-0">
            <Avatar className="w-32 h-32 border-4 border-white dark:border-[#222222] shadow-sm">
              <AvatarImage 
                src="/01-png.png" 
                alt="Owen Pechous" 
                className="object-cover"
              />
              <AvatarFallback className="text-3xl">OP</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
              <div>
                <h1 className="text-3xl font-semibold text-neutral-950 dark:text-white">Owen Pechous</h1>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">Frontend Developer</p>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="h-10 flex items-center gap-2 text-sm font-medium border border-neutral-200 dark:border-[#222222] dark:bg-transparent dark:text-white rounded-lg"
                  onClick={handleCopyEmail}
                >
                  <ClipboardCopyIcon className="w-4 h-4" />
                  <span className="font-medium text-neutral-950 dark:text-white">
                    {copySuccess ? "Copied!" : "Copy mail"}
                  </span>
                </Button>

                <Button 
                  className="h-10 bg-[#ad9c5f] hover:bg-[#9d8d50] text-white rounded-lg px-5 text-sm font-medium" 
                  asChild
                >
                  <a
                    href="/contact"
                  >
                    Contact
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-gray-600 dark:text-neutral-400 text-base mb-6">
              Frontend developer and design system specialist with over 9 years of experience focusing on user experience and design systems to create user-centered designs in SaaS products. I specialize in building scalable and maintainable frontend architectures that deliver exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <p className="text-xl font-semibold text-neutral-950 dark:text-white">{metric.value}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{metric.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 gap-4">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 bg-[#f9f6ec] dark:bg-[#222222] rounded-full mr-4 flex-shrink-0">
              <MailIcon className="w-4 h-4 text-[#ad9c5f]" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">E-mail</p>
              <a
                href="mailto:owenpechous@gmail.com"
                className="text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] text-base font-medium"
              >
                owenpechous@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-10 h-10 bg-[#f9f6ec] dark:bg-[#222222] rounded-full mr-4 flex-shrink-0">
              <PhoneIcon className="w-4 h-4 text-[#ad9c5f]" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Phone</p>
              <a
                href="tel:6308411167"
                className="text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] text-base font-medium"
              >
                630-841-1167
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-8">Skills</h2>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index}
              className="bg-[#f9f6ec] hover:bg-[#f2ecd7] dark:bg-[#222222] dark:hover:bg-[#2a2a2a] text-neutral-800 dark:text-neutral-200 border-0 py-1.5 px-3 rounded-lg"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Work History Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-8">Work History</h2>
        
        <div className="space-y-8">
          {workHistory.map((job, index) => (
            <div key={index} className="relative pl-8 pb-1">
              {/* Timeline dot and line */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#ad9c5f]"></div>
              {index !== workHistory.length - 1 && (
                <div className="absolute left-2 top-6 w-0.5 h-full bg-neutral-200 dark:bg-[#333333]"></div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">{job.role}</h3>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-base text-[#ad9c5f]">{job.company}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{job.period}</p>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-base">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="bg-white dark:bg-[#222222] rounded-lg border border-neutral-200 dark:border-[#333333] p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 bg-[#f9f6ec] dark:bg-black rounded-full flex-shrink-0">
              <FileTextIcon className="w-5 h-5 text-[#ad9c5f]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">Download Resume</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">Get a complete overview of my experience</p>
            </div>
          </div>
          
          <Button 
            className="h-12 bg-[#ad9c5f] hover:bg-[#9d8d50] text-white rounded-lg px-6 text-sm font-medium"
          >
            Download PDF
          </Button>
        </div>
      </section>
    </div>
  );
};