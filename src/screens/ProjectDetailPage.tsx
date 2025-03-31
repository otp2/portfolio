import { ArrowLeftIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

// No specific project data fetching needed here as content is static for this example
// In a real scenario, you might fetch project details based on a slug or ID

export const ProjectDetailPage = () => {
  const navigate = useNavigate();
  
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
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-8">
            Built a full brand and lead-gen site for a financial services business from zero in one weekend
          </h1>
          
          {/* Project Description */}
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            SB Management had no digital presence and needed to look legit fast. I created the brand identity from scratch, designed the full site experience, and built it with Next.js and React. Every component is custom but still fast to edit. I set up lead capture using Google Sheets, webhooks, and n8n so the client gets notified instantly when someone submits the form. No backend, no extra tools, just clean automation. Went from nothing to live in under 48 hours.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8">
            This project forced me to move fast without cutting corners. I leveled up my skills in systems thinking, frontend performance, and API-based automation. It also pushed me to balance speed with design quality and think holistically about how a site communicates trust and value to a cold audience.
          </p>

          {/* Stack Used Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Stack used</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-neutral-800 dark:text-neutral-200">Next.js</li>
              <li className="text-neutral-800 dark:text-neutral-200">React</li>
              <li className="text-neutral-800 dark:text-neutral-200">Figma</li>
              <li className="text-neutral-800 dark:text-neutral-200">n8n</li>
              <li className="text-neutral-800 dark:text-neutral-200">Google Sheets</li>
              <li className="text-neutral-800 dark:text-neutral-200">Netlify</li>
              <li className="text-neutral-800 dark:text-neutral-200">Custom webhook routing</li>
            </ul>
          </div>

          {/* Live Site Section */}
          <div className="mb-8">
             <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Live site</h2>
             <a 
               href="https://sbmgmt.co" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#ad9c5f] hover:underline break-words" 
             >
               https://sbmgmt.co
             </a>
          </div>

        </div>
      </article>
      
      {/* Contact Section */}
      <section className="bg-white dark:bg-[#222222] rounded-lg border border-neutral-200 dark:border-[#333333] p-8 mb-6 shadow-sm">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-3">Got questions?</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base">
            Happy to talk shop or help you figure out what to build. Shoot me a message or schedule a call
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
            href="https://cal.com/owen-pechous-ohsdk3/30min" // Assuming this link is consistent
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