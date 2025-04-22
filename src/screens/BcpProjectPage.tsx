import { ArrowLeftIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

export const BcpProjectPage = () => {
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
        {/* Using prose class for similar typography styling */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Project Title/Header */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-8">
            Transformed a 2,000-row spreadsheet into a scalable mental health provider search tool built for clarity, speed, and real-time updates
          </h1>
          
          {/* Project Description */}
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Behavioral Care Partners was publishing a 124-column spreadsheet of mental health providers as a PDF. It was dense, impossible to search, and disconnected from the actual experience people needed when looking for care.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            I worked directly with their leadership and admin teams to understand how the old file was being used—what mattered most, what filters people needed, and how to translate those functions into something usable. From there, I built a fully searchable, filterable provider directory backed by Supabase.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            The system ingests raw spreadsheet data and runs it through a custom pipeline I wrote using SQL functions, triggers, and table logic. Once processed, provider info is live on the site—searchable by location, specialty, age group, language, and more. It's fast, accurate, and designed for internal teams to manage without technical help.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8">
            This project pushed me to build a real backend pipeline from scratch, structure relational data for scale, and think like a product strategist inside a healthcare org. It also taught me how to match institutional workflows with modern frontend systems without overcomplicating the stack.
          </p>

          {/* Stack Used Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Stack used</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-neutral-800 dark:text-neutral-200">Supabase</li>
              <li className="text-neutral-800 dark:text-neutral-200">PostgreSQL triggers and functions</li>
              <li className="text-neutral-800 dark:text-neutral-200">Custom SQL cleaning and mapping</li>
              <li className="text-neutral-800 dark:text-neutral-200">Tailored filter logic and UI components</li>
              <li className="text-neutral-800 dark:text-neutral-200">Javascript</li>
              <li className="text-neutral-800 dark:text-neutral-200">Typescript</li>
              <li className="text-neutral-800 dark:text-neutral-200">Tailwind</li>
              <li className="text-neutral-800 dark:text-neutral-200">Structured provider taxonomy schema</li>
              <li className="text-neutral-800 dark:text-neutral-200">Automated data sync from spreadsheet to site</li>
            </ul>
          </div>

          {/* Live Site Section */}
          <div className="mb-8">
             <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Live site</h2>
             <a 
               href="https://behavioralcarepartners.com/find-provider" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#ad9c5f] hover:underline break-words" 
             >
               https://behavioralcarepartners.com/find-provider
             </a>
          </div>

        </div>
      </article>
      
      {/* Contact Section (copied from original detail page) */}
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
            href="https://cal.com/opechous/portfolio" // Uses the updated cal link
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