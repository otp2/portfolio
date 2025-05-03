import { ArrowLeftIcon, MailIcon, PhoneIcon, ArrowRightIcon } from "lucide-react";
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
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-2">
            124-column Excel file to live database
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8">January 2025</p>
          
          {/* Project Description */}
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Transformed a dense 2,000-row spreadsheet into a clean, fast, scalable provider-search tool built for real people looking for mental health care.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Behavioral Care Partners previously published a huge PDF spreadsheet that was impossible to navigate. I collaborated directly with their leadership to pinpoint critical user needs—location filtering, provider specialties, demographics, and more.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            From scratch, I built a streamlined search tool powered by Supabase. My custom backend processes raw Excel data using SQL functions, triggers, and logic I designed. Provider information is instantly accessible on the website through an intuitive interface—no tech support needed.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8">
            This project challenged me to develop robust backend architecture, handle complex data relationships, and align modern tech with real-world institutional needs.
          </p>

          {/* Stack Used Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Stack</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-neutral-800 dark:text-neutral-200">Supabase</li>
              <li className="text-neutral-800 dark:text-neutral-200">PostgreSQL (triggers, custom functions)</li>
              <li className="text-neutral-800 dark:text-neutral-200">SQL data cleaning and mapping</li>
              <li className="text-neutral-800 dark:text-neutral-200">React, JavaScript, TypeScript</li>
              <li className="text-neutral-800 dark:text-neutral-200">Tailwind CSS</li>
              <li className="text-neutral-800 dark:text-neutral-200">Automated data pipeline</li>
            </ul>
          </div>

          {/* Live Site Section */}
          <div className="mb-8">
             <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Live site</h2>
             <a 
               href="https://behavioralcarepartners.com/find-provider" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#ad9c5f] hover:underline font-medium inline-flex items-center gap-1.5 break-words"
             >
               https://behavioralcarepartners.com/find-provider <ArrowRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
             </a>
          </div>

        </div>
      </article>
      
      {/* Contact Section (copied from original detail page) */}
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