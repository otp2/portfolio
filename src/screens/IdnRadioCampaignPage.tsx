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
          {/* Project Title/Header */}
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-8">
            Wrote, produced, and launched a Spanish-language radio campaign targeting Hispanic communities across Iowa
          </h1>
          
          {/* Project Description */}
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            I created and ran a 30-day Spanish-language radio campaign for Iowa Donor Network, focused on reaching Hispanic communities across key markets in the state. I led every part of the process—writing and recording the ad, researching demographic targets, and handling media buying directly through iHeartRadio.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 mb-6">
            I wrote the ad in Spanish—finally putting a decade of classes to good use. I handled production, booked airtime, and coordinated the full run across iHeartRadio stations. I researched demographic and language data to identify where Spanish-language messaging would have the most impact, and aligned placements with the broader campaign strategy to hit the right markets.
          </p>

          {/* Stack Used Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">Stack used</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="text-neutral-800 dark:text-neutral-200">iHeartRadio (media placement)</li>
              <li className="text-neutral-800 dark:text-neutral-200">Adobe Audition (voice + editing)</li>
              <li className="text-neutral-800 dark:text-neutral-200">U.S. Census + regional audience research</li>
              <li className="text-neutral-800 dark:text-neutral-200">Spanish copywriting and audio production</li>
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