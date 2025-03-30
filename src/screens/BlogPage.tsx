import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    slug: "future-of-javascript-es2025",
    title: "The Future of JavaScript: What's New in ES2025?",
    date: "August 2, 2024",
    excerpt: "Explore the upcoming features in JavaScript ES2025 that will make your development more efficient.",
    image: "/link---figure---the-future-of-javascript--what-s-new-in-es2025-.png",
    author: "Toby Belhome"
  },
  {
    id: 2,
    slug: "ai-transforming-software-development",
    title: "How AI is Transforming Software Development",
    date: "August 5, 2024",
    excerpt: "Artificial intelligence is changing how we develop software. Learn about the latest trends and tools.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Toby Belhome"
  },
  {
    id: 3,
    slug: "top-programming-languages-2024",
    title: "Top 5 Programming Languages for 2024",
    date: "August 10, 2024",
    excerpt: "Discover which programming languages are dominating the industry this year and why.",
    image: "/link---figure---top-5-programming-languages-for-2024.png",
    author: "Toby Belhome"
  },
  {
    id: 4,
    slug: "web3-what-developers-need-to-know",
    title: "Web3: What Developers Need to Know",
    date: "August 15, 2024",
    excerpt: "A comprehensive guide to Web3 technologies and how they're shaping the future of the internet.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Toby Belhome"
  },
  {
    id: 5,
    slug: "tips-writing-clean-code",
    title: "10 Tips for Writing Clean Code",
    date: "August 20, 2024",
    excerpt: "Improve your coding practices with these essential tips for writing clean, maintainable code.",
    image: "/link---figure---the-future-of-javascript--what-s-new-in-es2025-.png",
    author: "Toby Belhome"
  },
  {
    id: 6,
    slug: "rise-of-edge-computing-2024",
    title: "The Rise of Edge Computing in 2024",
    date: "August 25, 2024",
    excerpt: "How edge computing is revolutionizing data processing and improving application performance.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Toby Belhome"
  }
];

export const BlogPage = () => {
  return (
    <div className="p-8 max-w-[900px] mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold text-neutral-950 dark:text-white mb-3">Blog</h1>
        <p className="text-gray-600 dark:text-neutral-400 text-lg">
          Explore cutting-edge design innovations that transform ideas into reality
        </p>
      </header>

      <div className="space-y-16">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b border-neutral-200 dark:border-[#222222] pb-14 last:border-0">
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
    </div>
  );
};