import { ArrowLeftIcon, MailIcon, PhoneIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

// No specific project data fetching needed here as content is static for this example
// In a real scenario, you might fetch project details based on a slug or ID

export const ProjectDetailPage = () => {
  // Removed unused navigate variable
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Breadcrumb navigation */}
      <div className="mt-8 mb-16">
        <Link 
          to="/projects" 
          className="inline-flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f]"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5 mr-1.5" />
          Back to Projects
        </Link>
      </div>
      
      {/* Project content */}
      <article className="mb-16">
        {/* Using prose class for similar typography styling to blog posts */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Project Title/Header */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-2">
             Brand and Lead-gen Site in 48 Hours
          </h1>
          {/* Adjusted Date format */}
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8">March 2025</p>
          
          {/* Project Description */}
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Built a polished brand identity and lead-generation website for SB Management in just one weekend—taking them from zero online presence to full legitimacy overnight.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
             Designed and coded entirely in Next.js and React, the site features custom-built, easily editable components. For lead capture, I integrated a lightweight yet powerful automation workflow using Google Sheets and n8n. The result was an instantly effective, professional web presence.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8">
            This high-intensity project enhanced my skills in rapid development, frontend optimization, automation, and strategic design—delivering exceptional quality under intense time constraints.
          </p>

          {/* Stack Used Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Stack</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-neutral-800 dark:text-neutral-200">Next.js, React</li>
              <li className="text-neutral-800 dark:text-neutral-200">Figma (design)</li>
              <li className="text-neutral-800 dark:text-neutral-200">n8n automation</li>
              <li className="text-neutral-800 dark:text-neutral-200">Google Sheets (lead capture)</li>
              <li className="text-neutral-800 dark:text-neutral-200">Netlify hosting</li>
              <li className="text-neutral-800 dark:text-neutral-200">Custom webhook integration</li>
            </ul>
          </div>

          {/* Live Site Section - Reverted link text to full URL */}
          <div className="mb-8">
             <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Live site</h2>
             <a 
               href="https://sbmgmt.co" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#ad9c5f] hover:underline font-medium inline-flex items-center gap-1.5 break-words"
             >
               https://sbmgmt.co <ArrowRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
             </a>
          </div>

        </div>
      </article>
      
      {/* Contact Section */}
      <section className="bg-white dark:bg-[#222222] rounded-lg border border-neutral-200 dark:border-[#333333] p-8 mb-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-3">Got questions?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base">
            I'm always happy to talk through ideas or help you figure out your next steps. Shoot me a message or schedule a call.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 bg-[#f9f6ec] dark:bg-black rounded-full mr-4 flex-shrink-0">
              <MailIcon className="w-5 h-5 text-[#ad9c5f]" />
            </div>
            <div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">E-mail</p>
              <a
                href="mailto:owenpechous@gmail.com"
                className="text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] text-base font-medium break-words"
              >
                owenpechous@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-12 h-12 bg-[#f9f6ec] dark:bg-black rounded-full mr-4 flex-shrink-0">
              <PhoneIcon className="w-5 h-5 text-[#ad9c5f]" />
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
        
        <Button 
          className="h-12 bg-[#ad9c5f] hover:bg-[#9d8d50] text-white rounded-lg px-6 text-sm font-medium"
          asChild
        >
          <a
            href="https://cal.com/opechous/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a call
          </a>
        </Button>
      </section>
    </>
  );
}; 