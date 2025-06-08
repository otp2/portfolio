import { 
  ArrowLeft,
  ArrowRight,
  MailIcon,
  PhoneIcon,
  CalendarDaysIcon,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { Carousel, CarouselRef } from "../components/ui/carousel";
import { useRef } from "react";
import { Link } from "react-router-dom";

// Data for projects
const projects = [
  {
    id: 1,
    title: "124-column Excel file to live database",
    period: "January 2025",
    image: "/bcp-port-img.png",
    url: "/projects/bcp",
  },
  {
    id: 2,
    title: "UniFest Ticketing Platform",
    period: "May 2025",
    image: "/unifest-port-img.png",
    url: "/projects/unifest",
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
  ...carouselSlides.map(slide => ({ ...slide })),
  {
    title: "Site and Lead System Built in 48h",
    button: "View Project",
    period: "March 2025",
    src: "/sbmgmt-port-img-1.png",
    url: "/projects/sb-management"
  },
  {
    title: "Spanish Radio Ad Campaign",
    button: "View Project",
    period: "April 2024",
    src: "/radio-ad-img.png",
    url: "/projects/spanish-ad"
  }
];

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

// Data for testimonials formatted for AnimatedTestimonials component
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

// Data for blog posts - Reordered by date (newest first), showing top 3
const blogPosts = [
  // 1. (ID 2) May 1, 2025
  {
    id: 2,
    title: "From Airtable AI to Custom GPT-4 & Supabase Integration: Why and How I Made the Switch",
    date: "May 1, 2025",
    slug: "airtable-ai-to-gpt4-supabase",
    author: "Owen Pechous",
  },
  // 2. (ID 4) March 24, 2025
  {
    id: 4,
    title: "Turning Messy Client Requests into Clear Project Roadmaps",
    date: "March 24, 2025",
    slug: "client-requests-to-roadmaps",
    author: "Owen Pechous"
  },
  // 3. (ID 1) Dec 30, 2024
  {
    id: 1,
    title: "Never Stop Learning: Why Graduation Shouldn't Be the Finish Line",
    date: "December 30, 2024",
    slug: "never-stop-learning",
    author: "Owen Pechous",
  },
  // Note: Posts 3 and 5 are no longer shown in the homepage preview due to ordering
];

export const HomePage = () => {
  const carouselRef = useRef<CarouselRef>(null);
  
  return (
    <>
      {/* Header Section */}
      <section className="mt-8 mb-16">
        <div className="flex justify-between items-start mb-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white leading-tight mb-1">Owen Pechous</h1>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#ad9c5f] leading-tight">Developer & Designer</h2>
          </div>
        </div>

        <p className="text-gray-600 dark:text-neutral-400 text-lg mb-8 max-w-3xl">
          I build websites, brands, and systems—from concept to launch. My approach blends design, code, clear messaging, and real-world strategy. Self-taught, fast-paced, and committed to creating solutions that genuinely work.
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
            className="h-12 flex items-center gap-2 text-sm font-medium border border-neutral-200 dark:border-[#222222] dark:bg-transparent dark:text-white dark:hover:bg-transparent dark:hover:border-[#ad9c5f] rounded-lg transition-colors duration-200"
            asChild
          >
            <a
              href="https://cal.com/opechous/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarDaysIcon className="w-4 h-4" />
              <span className="font-medium text-neutral-950 dark:text-white">
                Schedule a call
              </span>
            </a>
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

      {/* Blog Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-8">Blog</h2>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="pb-6">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">{post.date}</p>
              <div className="flex justify-between items-start md:items-center flex-col md:flex-row md:space-y-0 space-y-4 mb-4">
                <h3 className="text-neutral-950 dark:text-white text-lg font-medium hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] transition-colors duration-200">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 flex items-center gap-2 text-[#ad9c5f] hover:text-[#9d8d50] dark:text-[#ad9c5f] dark:hover:text-[#9d8d50] hover:bg-transparent p-0 ml-0 md:ml-4"
                  asChild
                >
                  <Link to={`/blog/${post.slug}`}>
                    <span className="font-medium text-sm">Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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