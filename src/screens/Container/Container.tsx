import { 
  ArrowRightIcon,
  CodeIcon,
  CopyIcon,
  ExternalLinkIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MailIcon,
  MapPinIcon,
  PaintbrushIcon,
  PaletteIcon,
  PhoneIcon,
  ShoppingBagIcon,
  TwitterIcon,
  UserIcon,
  FacebookIcon,
  DribbbleIcon,
  Component,
  ClipboardCopyIcon,
  PackageIcon,
  GlobeIcon,
  BookTextIcon,
} from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

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

// Data for testimonials
const testimonials = [
  {
    id: 1,
    content:
      "The attention to detail and expertise in design systems are unmatched. Our SaaS product now feels more polished than ever.",
    name: "Robert Brown",
    company: "InnovateX",
    avatar: "/01-png.png",
  },
  {
    id: 2,
    content:
      "Their frontend development work is outstanding. They understood our requirements perfectly and delivered beyond expectations.",
    name: "Emily Davis",
    company: "NextGen Tech",
    avatar: "/02-png.png",
  },
  {
    id: 3,
    content:
      "The tools and systems they provided have made a huge impact on our design and development process. Exceptional work!",
    name: "Michael Wilson",
    company: "GlobalSoft",
    avatar: "/03-png.png",
  },
  {
    id: 4,
    content:
      "Their dedication to creating user-centered designs is evident in every aspect of their work. Truly a pleasure to work with.",
    name: "Sarah Martinez",
    company: "Bright Ideas Co.",
    avatar: "/04-png.png",
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

export const Container = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#f5f5f5] dark:bg-black">
      {/* Sidebar - Hidden on mobile */}
      <div className={`fixed left-0 top-0 h-full w-64 py-6 px-5 z-50 transition-transform duration-300 
        bg-white dark:bg-black border-r border-neutral-200 dark:border-[#222222]
        ${isMobile ? (isMenuOpen ? 'translate-x-0' : '-translate-x-full') : ''}`}>
          <div className="flex items-center gap-3 mb-8">
            <Avatar className="w-10 h-10">
              <AvatarImage src="/01-png.png" alt="Owen Pechous" />
              <AvatarFallback>OP</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-sm text-neutral-950 dark:text-white">Owen Pechous</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Frontend Developer</p>
            </div>
          </div>

          <nav className="space-y-6">
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-neutral-950 dark:text-white bg-neutral-100 dark:bg-[#222222]">
                <HomeIcon className="w-4 h-4" />
                <span>Homepage</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222]">
                <LayoutDashboardIcon className="w-4 h-4" />
                <span>Projects</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222] rounded-lg">
                <ShoppingBagIcon className="w-4 h-4" />
                <span>Store</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222] rounded-lg">
                <UserIcon className="w-4 h-4" />
                <span>About</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222] rounded-lg">
                <LayoutDashboardIcon className="w-4 h-4" />
                <span>Blog</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222] rounded-lg">
                <MailIcon className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

            <div className="pt-5 border-t border-neutral-200 dark:border-[#222222]">
              <h4 className="px-3 text-xs font-medium mb-2 text-neutral-500 dark:text-neutral-400">Social</h4>
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222] rounded-lg">
                  <TwitterIcon className="w-4 h-4" />
                  <span>Twitter</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222] rounded-lg">
                  <FacebookIcon className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#222222] rounded-lg">
                  <DribbbleIcon className="w-4 h-4" />
                  <span>Dribbble</span>
                </a>
              </div>
            </div>
          </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content with Seamless Background */}
      <div className={`relative ${isMobile ? 'w-full px-4' : 'ml-64'}`}>
        <div className={`absolute top-6 ${isMobile ? 'left-4 right-4 bottom-6' : 'left-6 right-6 bottom-6'} bg-white dark:bg-black rounded-3xl z-0`}></div>

        <div className={`relative z-10 pt-6 pb-16 ${isMobile ? 'px-4' : 'px-6'} max-w-[1200px] mx-auto`}>
          {/* Mobile Header */}
          {isMobile && (
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="/01-png.png" alt="Owen Pechous" />
                  <AvatarFallback>OP</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-sm text-neutral-950 dark:text-white">Owen Pechous</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Frontend Developer</p>
                </div>
              </div>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {isMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          )}

          {/* Content Container */}
          <div className="p-8 max-w-[900px] mx-auto">
            {/* Header Section */}
            <section className="mb-16">
              <div className="flex justify-between items-start mb-6">
                <div className="w-full">
                  <h1 className="text-5xl font-semibold text-neutral-950 dark:text-white leading-tight mb-1">Hello! I'm Owen</h1>
                  <h2 className="text-5xl font-semibold text-[#ad9c5f] leading-tight">Creative Technologist</h2>
                </div>
              </div>

              <p className="text-gray-600 dark:text-neutral-400 text-base mb-6">
                I build websites, brands, and systems from the ground up. My work spans design, development, messaging, and just about anything else you can think of. I'm self-taught, fast-moving, and focused on making things that actually work.<br />
              </p>

              <div className="flex gap-3">
                <Button className="h-10 bg-[#ad9c5f] hover:bg-[#9d8d50] text-white rounded-lg px-5 text-sm" asChild>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    About
                  </a>
                </Button>

                <Button
                  variant="outline"
                  className="h-10 flex items-center gap-2 text-sm border border-neutral-200 dark:border-[#222222] dark:bg-transparent dark:text-white rounded-lg"
                >
                  <ClipboardCopyIcon className="w-4 h-4" />
                  <span className="font-medium text-neutral-950 dark:text-white">
                    Copy mail
                  </span>
                </Button>
              </div>
            </section>

            {/* Selected Work Section */}
            <section className="mb-14">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-950 dark:text-white">Selected Work</h2>

                <Button
                  variant="ghost"
                  className="flex items-center gap-1 text-[#ad9c5f] p-0 hover:bg-transparent"
                  asChild
                >
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-medium text-sm">View All</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </Button>
              </div>

              <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-6'}`}>
                {projects.map((project) => (
                  <div key={project.id} className="flex flex-col">
                    <div
                      className="w-full h-[230px] rounded-xl bg-cover bg-center mb-3"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] mb-1 text-base"
                    >
                      {project.title}
                    </a>
                    <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                      {project.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Services Section */}
            <section className="mb-14">
              <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-6">Services</h2>

              <div className="space-y-3">
                {services.map((service) => (
                  <div key={service.id} className="flex items-center justify-between py-3.5 border-b border-neutral-100 dark:border-[#222222] last:border-b-0">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-9 h-9 bg-[#f9f6ec] dark:bg-[#222222] rounded-full mr-3">
                        {service.icon}
                      </div>
                      <span className="text-neutral-950 dark:text-white text-base">{service.title}</span>
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

            {/* Testimonials Section */}
            <section className="mb-14">
              <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-6">What clients say</h2>

              <div className="space-y-4">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-[#f9f9f9] dark:bg-[#222222] p-6 rounded-lg">
                    <p className="text-neutral-950 dark:text-white mb-5 text-base">{testimonial.content}</p>
                    <div className="flex items-center">
                      <Avatar className="w-10 h-10 mr-3">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-neutral-950 dark:text-white text-sm">{testimonial.name}</p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Blog Section */}
            <section className="mb-14">
              <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-6">Blog</h2>

              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <div key={post.id} className="pb-4">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">{post.date}</p>
                    <div className={`flex justify-between items-center ${isMobile ? 'flex-col space-y-4' : ''} mb-3`}>
                      <h3 className={`text-lg font-medium text-neutral-950 dark:text-white ${isMobile ? 'w-full' : 'mr-4 flex-1'}`}>{post.title}</h3>
                      <div 
                        className={`${isMobile ? 'w-full h-[140px]' : 'w-[120px] h-[80px]'} rounded-lg bg-cover bg-center flex-shrink-0`}
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                    </div>
                    <Separator className="mb-3 bg-neutral-100 dark:bg-[#222222]" />
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#ad9c5f] font-medium flex items-center hover:underline text-sm"
                    >
                      Read
                      <ArrowRightIcon className="w-3.5 h-3.5 ml-1.5" />
                    </a>
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

              <div className={`${isMobile ? 'space-y-4' : 'grid grid-cols-2 gap-6'} mb-6`}>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#f9f6ec] dark:bg-black rounded-full mr-3 flex-shrink-0">
                    <MailIcon className="w-4 h-4 text-[#ad9c5f]" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">E-mail</p>
                    <a
                      href="mailto:owenpechous@gmail.com"
                      className="text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] text-sm"
                    >
                      owenpechous@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-[#f9f6ec] dark:bg-black rounded-full mr-3 flex-shrink-0">
                    <PhoneIcon className="w-4 h-4 text-[#ad9c5f]" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">Phone</p>
                    <a
                      href="tel:6308411167"
                      className="text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] text-sm"
                    >
                      630-841-1167
                    </a>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="border border-neutral-200 dark:border-[#333333] dark:bg-transparent dark:text-white rounded-lg px-4 py-2 h-auto text-sm"
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
          </div>

          {/* Footer */}
          <footer className="w-full px-8 py-5 flex justify-between items-center max-w-[900px] mx-auto">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">© 2025 Neofolio</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Made by{" "}
              <a
                href="https://bundui.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f]"
              >
                bundui.io
              </a>
            </p>
          </footer>
        </div>
      </div>

      {/* Get Template Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          className="pl-4 pr-4 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-xl flex items-center gap-2 h-auto"
          asChild
        >
          <a
            href="https://shadcnuikit.com/template/neofolio-portfolio-template"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold flex items-center text-sm"
          >
            Get Template
            <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5" />
          </a>
        </Button>
      </div>

      {/* Theme Toggle */}
      <div className="fixed bottom-6 left-6 p-2 rounded-full border shadow-sm z-50 bg-white dark:bg-[#222222] border-neutral-200 dark:border-[#333333]">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-7 h-7 flex items-center justify-center text-neutral-500 dark:text-neutral-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isDarkMode ? (
              <>
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="M5 5l1.5 1.5"></path>
                <path d="M17.5 17.5L19 19"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="M5 19l1.5-1.5"></path>
                <path d="M17.5 6.5L19 5"></path>
              </>
            ) : (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};