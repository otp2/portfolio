import { 
  ArrowLeft,
  ArrowRight,
  CodeIcon,
  ClipboardCopyIcon,
  MailIcon,
  BriefcaseIcon,
  PackageIcon,
  GlobeIcon,
  PhoneIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { Carousel, CarouselRef } from "../components/ui/carousel";
import { useState, useRef } from "react";

// Data for projects
const projects = [
  {
    id: 1,
    title: "Modern E-commerce Platform",
    period: "2024 - 2025",
    image: "/figure---modern-e-commerce-platform.png",
    url: "https://google.com",
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    period: "2023 - 2024",
    image: "/figure---ai-powered-analytics-dashboard.png",
    url: "https://google.com",
  },
];

// Transform projects for carousel
const carouselSlides = projects.map(project => ({
  title: project.title,
  button: "View Project",
  src: project.image,
  url: project.url,
  period: project.period
}));

// Add two more slides to showcase more work
const extendedCarouselSlides = [
  ...carouselSlides.map(slide => ({ ...slide, url: 'https://google.com' })),
  {
    title: "Mobile Banking App",
    button: "View Project",
    period: "2023 - 2024",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "https://google.com"
  },
  {
    title: "Travel Booking Platform",
    button: "View Project",
    period: "2022 - 2023",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    url: "https://google.com"
  }
];

// Data for services
const services = [
  {
    id: 1,
    title: "Product Design",
    price: "90",
    icon: <PackageIcon className="w-5 h-5 text-neutral-950 dark:text-white" />,
  },
  {
    id: 2,
    title: "Frontend Development",
    price: "100",
    icon: <CodeIcon className="w-5 h-5 text-neutral-950 dark:text-white" />,
  },
  {
    id: 3,
    title: "Branding",
    price: "80",
    icon: <GlobeIcon className="w-5 h-5 text-neutral-950 dark:text-white" />,
  },
];

// Data for testimonials formatted for AnimatedTestimonials component
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

// Data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Future of JavaScript: What's New in ES2025?",
    date: "August 2, 2024",
    image:
      "/link---figure---the-future-of-javascript--what-s-new-in-es2025-.png",
    url: "https://google.com",
  },
  {
    id: 2,
    title: "How AI is Transforming Software Development",
    date: "August 5, 2024",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    url: "https://google.com",
  },
  {
    id: 3,
    title: "Top 5 Programming Languages for 2024",
    date: "August 10, 2024",
    image: "/link---figure---top-5-programming-languages-for-2024.png",
    url: "https://google.com",
  },
];

export const HomePage = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const carouselRef = useRef<CarouselRef>(null);
  
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("owenpechous@gmail.com").then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  return (
    <>
      {/* Header Section */}
      <section className="mt-8 mb-16">
        <div className="flex justify-between items-start mb-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white leading-tight mb-1">Hello! I'm Owen</h1>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#ad9c5f] leading-tight">Frontend Developer</h2>
          </div>
        </div>

        <p className="text-gray-600 dark:text-neutral-400 text-lg mb-8 max-w-3xl">
          Frontend developer and design system specialist with over 9 years of experience
          focusing on user experience and design systems to create user-centered designs in SaaS
          products.
        </p>

        <div className="flex gap-4">
          <Button className="h-12 bg-[#ad9c5f] hover:bg-[#9d8d50] text-white rounded-lg px-6 text-sm font-medium" asChild>
            <a
              href="/about"
            >
              About
            </a>
          </Button>

          <Button
            variant="outline"
            className="h-12 flex items-center gap-2 text-sm font-medium border border-neutral-200 dark:border-[#222222] dark:bg-transparent dark:text-white rounded-lg"
            onClick={handleCopyEmail}
          >
            <ClipboardCopyIcon className="w-4 h-4" />
            <span className="font-medium text-neutral-950 dark:text-white">
              {copySuccess ? "Copied!" : "Copy mail"}
            </span>
          </Button>
        </div>
      </section>

      {/* Selected Work Section - Controls moved below */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white">Selected Work</h2>
          {/* REMOVED Controls from header */}
          {/* <div className="flex gap-2"> ... buttons ... </div> */}
        </div>

        <div className="relative w-full mb-4"> {/* Reduced margin below carousel to accommodate buttons */}
          <Carousel ref={carouselRef} slides={extendedCarouselSlides} />
        </div>

        {/* ADDED Controls below carousel, left-aligned */}
        <div className="flex gap-2"> 
          <button
            onClick={() => carouselRef.current?.handlePreviousClick()}
            className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-[#222222] flex items-center justify-center group/button transition-colors"
            aria-label="Previous Project"
          >
            <ArrowLeft className="h-5 w-5 text-neutral-950 dark:text-white group-hover/button:rotate-12 transition-transform duration-300" />
          </button>
          <button
            onClick={() => carouselRef.current?.handleNextClick()}
            className="h-7 w-7 rounded-full bg-neutral-100 dark:bg-[#222222] flex items-center justify-center group/button transition-colors"
            aria-label="Next Project"
          >
            <ArrowRight className="h-5 w-5 text-neutral-950 dark:text-white group-hover/button:-rotate-12 transition-transform duration-300" />
          </button>
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

      {/* Blog Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-8">Blog</h2>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="pb-6">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">{post.date}</p>
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row md:space-y-0 space-y-4 mb-4">
                <h3 className="text-neutral-950 dark:text-white text-lg font-medium hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] transition-colors duration-200">
                  <a href={post.url}>{post.title}</a>
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 flex items-center gap-2 text-[#ad9c5f] hover:text-[#9d8d50] dark:text-[#ad9c5f] dark:hover:text-[#9d8d50] hover:bg-transparent p-0 ml-0 md:ml-4"
                  asChild
                >
                  <a href={post.url}>
                    <span className="font-medium text-sm">Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>
              <Separator className="dark:bg-[#222222]" />
            </div>
          ))}
        </div>
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