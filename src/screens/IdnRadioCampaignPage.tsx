import { ArrowLeftIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { AudioPlayerCard } from "../components/ui/AudioPlayerCard"; // Import the player

export const IdnRadioCampaignPage = () => {
  
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
        {/* Using prose class */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Project Title/Header - Updated */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-2">
            Spanish Radio Ad Campaign
          </h1>
          {/* Adjusted Date format */}
          <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-8">April 2024</p>
          
          {/* Project Description - Updated */}
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Planned, wrote, and produced a targeted Spanish-language radio ad campaign for the Iowa Donor Network, strategically engaging Hispanic communities statewide.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            Leveraging deep research into local demographics and language preferences, I created impactful Spanish-language messaging. I managed every aspect—copywriting, audio production, media placement through iHeartRadio—and aligned the campaign seamlessly with broader organizational goals.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-8">
            This campaign allowed me to combine strategic thinking, targeted demographic research, and hands-on creative production to deliver measurable impact in key regional markets.
          </p>

          {/* Stack Used Section - Updated */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Stack</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-neutral-800 dark:text-neutral-200">iHeartRadio (media placement)</li>
              <li className="text-neutral-800 dark:text-neutral-200">Adobe Audition (audio production)</li>
              <li className="text-neutral-800 dark:text-neutral-200">Regional demographic targeting (U.S. Census data)</li>
              <li className="text-neutral-800 dark:text-neutral-200">Spanish-language copywriting</li>
              {/* Removed items not in new list */}
            </ul>
          </div>
        </div>
        
        {/* Audio Player Section */}
        <div className="mt-12">
           <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Ad Aired on Radio</h2>
           <AudioPlayerCard 
             title="iHeart Radio Ad"
             genre="Spanish Radio"
             audioSrc="/audio/KZAT Ad Final.mp3"
             coverImageSrc="/idn-port-img.png"
           />
           {/* You could add more players here for the other MP3s if needed */}
        </div>

      </article>
      
      {/* Contact Section (Optional - can keep or remove) */}
      <section className="bg-white dark:bg-[#222222] rounded-lg border border-neutral-200 dark:border-[#333333] p-8 shadow-sm">
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