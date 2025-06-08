import { ArrowLeftIcon, MailIcon, PhoneIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

export const UnifestProjectPage = () => {
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
            UniFest Ticketing Platform
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8">May 2025</p>
          
          {/* Project Description */}
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Built a comprehensive event ticketing system for a private music festival serving 21 Greek life organizations at Indiana University, handling real payments and attendee management for 1,500+ expected guests.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Working directly with event organizers, I developed a sophisticated multi-tenant system with organization-specific access codes, differential pricing (fraternities vs sororities), and coordinated transportation logistics. The platform processes real Stripe payments, generates QR codes for event entry, and provides administrators with real-time sales analytics.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            From database design to payment processing, I built every component from scratch—complex access control systems, inventory management per organization, group booking workflows, and a full admin dashboard. The system handles live transactions and integrates with Stripe's production APIs for secure payment processing.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8">
            This project pushed me to architect scalable database relationships, implement secure payment flows, build responsive admin interfaces, and create robust user authentication systems for a real-world business application.
          </p>

          {/* Stack Used Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Stack</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-neutral-800 dark:text-neutral-200">Next.js 15, React 19, TypeScript</li>
              <li className="text-neutral-800 dark:text-neutral-200">Supabase (PostgreSQL)</li>
              <li className="text-neutral-800 dark:text-neutral-200">Stripe payment integration (live products)</li>
              <li className="text-neutral-800 dark:text-neutral-200">QR code generation and validation</li>
              <li className="text-neutral-800 dark:text-neutral-200">Tailwind CSS (responsive design)</li>
              <li className="text-neutral-800 dark:text-neutral-200">Real-time sales analytics</li>
              <li className="text-neutral-800 dark:text-neutral-200">Multi-tenant access control</li>
              <li className="text-neutral-800 dark:text-neutral-200">Cloudflare Turnstile (security)</li>
            </ul>
          </div>

          {/* Live Site Section */}
          <div className="mb-8">
             <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Live site</h2>
             <a 
               href="https://unifest.vip" 
               target="_blank" 
               rel="noopener noreferrer"
               className="text-[#ad9c5f] hover:underline font-medium inline-flex items-center gap-1.5 break-words"
             >
               https://unifest.vip <ArrowRightIcon className="w-3.5 h-3.5 flex-shrink-0" />
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