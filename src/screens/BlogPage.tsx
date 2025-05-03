import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

// Mock data for blog posts - Reordered by date (newest first)
const blogPosts = [
  // 1. (ID 2) May 1, 2025
  {
    id: 2,
    slug: "airtable-ai-to-gpt4-supabase",
    title: "From Airtable AI to Custom GPT-4 & Supabase Integration: Why and How I Made the Switch",
    date: "May 1, 2025",
    excerpt: "How hitting limitations with Airtable's AI pushed me to build a more powerful, affordable solution.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Owen Pechous"
  },
  // 2. (ID 4) March 24, 2025
  {
    id: 4,
    slug: "client-requests-to-roadmaps",
    title: "Turning Messy Client Requests into Clear Project Roadmaps",
    date: "March 24, 2025",
    excerpt: "A practical method for translating ambiguous client ideas into structured, achievable outcomes.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Owen Pechous"
  },
  // 3. (ID 1) Dec 30, 2024
  {
    id: 1,
    slug: "never-stop-learning",
    title: "Never Stop Learning: Why Graduation Shouldn't Be the Finish Line",
    date: "December 30, 2024",
    excerpt: "A year after graduating taught me more about learning than four years of college ever did.",
    image: "/link---figure---the-future-of-javascript--what-s-new-in-es2025-.png",
    author: "Owen Pechous"
  },
  // 4. (ID 3) Nov 16, 2024
  {
    id: 3,
    slug: "developer-branding-advantage",
    title: "Why Every Developer Should Understand Branding (And Vice Versa)",
    date: "November 16, 2024",
    excerpt: "The unexpected advantage of combining design, development, and strategic messaging skills.",
    image: "/link---figure---top-5-programming-languages-for-2024.png",
    author: "Owen Pechous"
  },
  // 5. (ID 5) Sept 18, 2024
  {
    id: 5,
    slug: "mastering-web-frameworks-guide",
    title: "The Beginner's Guide to Mastering Modern Web Frameworks",
    date: "September 18, 2024",
    excerpt: "Practical insights into quickly learning React, Next.js, and Tailwind for efficient frontend work.",
    image: "/link---figure---the-future-of-javascript--what-s-new-in-es2025-.png",
    author: "Owen Pechous"
  },
  // Removing the post with id: 6
  /*
  {
    id: 6,
    slug: "rise-of-edge-computing-2024",
    title: "The Rise of Edge Computing in 2024",
    date: "August 25, 2024",
    excerpt: "How edge computing is revolutionizing data processing and improving application performance.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Toby Belhome"
  }
  */
];

export const BlogPage = () => {
  return (
    <>
      <header className="mt-8 mb-16">
        <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-3">Stuff I've learned building things</h1>
        <p className="text-gray-600 dark:text-neutral-400 text-lg">
          Quick hits on design, code, and figuring it out as I go.
        </p>
      </header>

      <div>
        {blogPosts.map((post) => (
          <article key={post.id} className="mb-16 last:mb-0">
            <div className="mb-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{post.date}</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-2/3">
                <Link to={`/blog/${post.slug}`} className="block">
                  <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-4 hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f] transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-600 dark:text-neutral-400 mb-6">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#ad9c5f] font-medium hover:underline text-sm"
                >
                  Read
                  <ArrowRightIcon className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </div>
              
              <div className="md:w-1/3">
                <Link to={`/blog/${post.slug}`} className="block">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};