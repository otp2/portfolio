import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { 
  FileTextIcon, 
  ClipboardCopyIcon, 
  MailIcon, 
  PhoneIcon,
  CodeIcon,
  PaintbrushIcon,
  PaletteIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

// Data for services
const services = [
  {
    id: 1,
    title: "Product Design",
    price: "90",
    icon: <PaintbrushIcon className="w-5 h-5 text-neutral-950 dark:text-white" />,
  },
  {
    id: 2,
    title: "Frontend Development",
    price: "90",
    icon: <CodeIcon className="w-5 h-5 text-neutral-950 dark:text-white" />,
  },
  {
    id: 3,
    title: "Branding",
    price: "80",
    icon: <PaletteIcon className="w-5 h-5 text-neutral-950 dark:text-white" />,
  },
];

// Data for testimonials
const testimonials = [
  {
    quote: "The attention to detail and expertise in design systems are unmatched. Our SaaS product now feels more polished than ever.",
    name: "Robert Brown",
    designation: "InnovateX",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "Their frontend development work is outstanding. They understood our requirements perfectly and delivered beyond expectations.",
    name: "Emily Davis",
    designation: "NextGen Tech",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "The tools and systems they provided have made a huge impact on our design and development process. Exceptional work!",
    name: "Michael Wilson",
    designation: "GlobalSoft",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "Their dedication to creating user-centered designs is evident in every aspect of their work. Truly a pleasure to work with.",
    name: "Sarah Martinez",
    designation: "Bright Ideas Co.",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

export const AboutPage = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("owenpechous@gmail.com").then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <>
      {/* About Header Section */}
      <section className="mt-8 mb-16">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-8">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-950 dark:text-white mb-2">Hello! I'm Owen</h1>
            <h2 className="text-2xl font-semibold text-[#ad9c5f] mb-6">Frontend Developer</h2>
            
            <p className="text-gray-600 dark:text-neutral-400 text-base mb-6">
              Frontend developer and design system specialist with over 9 years of experience focusing on user experience and design systems to create user-centered designs in SaaS products. I specialize in building scalable and maintainable frontend architectures that deliver exceptional user experiences.
            </p>
          </div>
          
          <div className="flex-shrink-0 md:w-[350px]">
            <div className="w-full h-[350px] bg-neutral-200 dark:bg-neutral-800 rounded-lg">
            </div>
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
                <span className="text-neutral-950 dark:text-white font-medium mr-1">${service.price}</span>
                <span className="text-neutral-500 dark:text-neutral-400">per hour</span>
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
            I'm always excited to collaborate on innovative and exciting projects!
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
            href="https://cal.com/owen-pechous-ohsdk3/30min"
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