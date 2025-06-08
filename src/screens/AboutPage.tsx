import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { 
  MailIcon, 
  PhoneIcon,
  // CodeIcon, // Remove if unused
  // PaletteIcon, // Remove if unused
} from "lucide-react";
import { Button } from "../components/ui/button";

// Data for services
const services = [
  {
    id: 1,
    title: "Design",
    price: "90",
    icon: <span className="material-symbols-outlined flex items-center justify-center text-xl text-neutral-950 dark:text-[#ad9c5f]">brand_family</span>,
  },
  {
    id: 2,
    title: "Development",
    price: "90",
    icon: <span className="material-symbols-outlined flex items-center justify-center text-xl text-neutral-950 dark:text-[#ad9c5f]">code</span>,
  },
  {
    id: 3,
    title: "Strategy",
    price: "80",
    icon: <span className="material-symbols-outlined flex items-center justify-center text-xl text-neutral-950 dark:text-[#ad9c5f]">automation</span>,
  },
];

// Data for testimonials
const testimonials = [
  {
    quote: "Owen's strategic clarity and creative execution consistently produce exceptional results. His attention to detail and ability to deliver polished, engaging solutions stand out, even among seasoned professionals.",
    name: "Jeffrey Grisamore",
    designation: "President & CEO, EGR International & BlackLab Media",
    src: "/j-grisamore.png",
  },
  {
    quote: "Owen's marketing insights and digital strategies have significantly elevated our outreach efforts. His creativity and precision have directly improved our community engagement and impact.",
    name: "Anne Casey",
    designation: "Manager, Community Affairs & Development, Iowa Donor Network",
    src: "/a-casey.png",
  },
  {
    quote: "Owen expertly blends creativity with practical strategy, demonstrating a rare talent for turning complex ideas into clear, compelling results. His work consistently exceeds professional standards.",
    name: "Adam Kempenaar",
    designation: "Professor of Practice, University of Iowa | Former VP, Chicago Blackhawks",
    src: "/a-kemp.png",
  },
  {
    quote: "Working with Owen reveals his sharp, strategic mindset and outstanding ability to effectively communicate complex ideas. His thoughtful approach consistently enhances clarity and impact.",
    name: "Munachim Amah",
    designation: "Managing Editor, Journal of Communication Inquiry | Former CNN Journalist",
    src: "/m-chim.png",
  },
  {
    quote: "Owen rebuilt our entire brand quickly and precisely. His strategic vision and ability to deliver immediate, measurable outcomes transformed our digital presence and operational effectiveness.",
    name: "Matthew Sutter",
    designation: "Co-Founder, SB Management Group",
    src: "/m-sutt.png",
  },
];

export const AboutPage = () => {
  return (
    <>
      {/* About Header Section - Updated */}
      <section className="mt-8 mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-8">
          <div className="flex-1">
            {/* Updated h1 text */}
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2">About Me</h1> 
            {/* Updated h2 text */}
            <h2 className="text-2xl font-semibold text-[#ad9c5f] mb-6">Developer & Designer</h2> 
            
            {/* Updated description paragraphs */}
            <p className="text-gray-600 dark:text-neutral-400 text-base mb-4">
              I'm a designer and developer focused on making things clear, practical, and effective. Since graduating, I've dedicated myself to continuously learning and building solutions that genuinely work—whether it's crafting brand identities, launching websites in days, or turning cumbersome data into elegant tools.
            </p>
            <p className="text-gray-600 dark:text-neutral-400 text-base mb-6">
              My work combines strategy, technical know-how, and intuitive design. Every project is built not just to look good but to function flawlessly in real-world conditions. I thrive in fast-paced environments where adaptability and clarity matter most, delivering tangible results that clients can see and feel immediately.
            </p>
          </div>
          
          <div className="flex-shrink-0 md:w-[315px]">
            {/* Updated to use new main-image.svg */}
            <img 
              src="/main-image.svg" 
              alt="Owen Pechous profile picture" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-8">Services</h2>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between py-4 border-b border-neutral-100 dark:border-[#222222] last:border-b-0">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-[#f9f6ec] dark:bg-[#222222] rounded-full mr-4">
                  {service.icon}
                </div>
                <span className="text-neutral-950 dark:text-white text-base font-medium">{service.title}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-neutral-500 dark:text-neutral-400 mr-1">from</span>
                <span className="text-neutral-950 dark:text-white font-medium">${service.price}</span>
                <span className="text-neutral-500 dark:text-neutral-400">/hr</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Clients Say Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-8">What clients say</h2>
        <AnimatedTestimonials testimonials={testimonials} />
      </section>

      {/* Contact Section */}
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
                className="text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] text-base font-medium"
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