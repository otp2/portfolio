import { ArrowLeftIcon, ArrowRightIcon, MailIcon, PhoneIcon } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    slug: "future-of-javascript-es2025",
    title: "The Future of JavaScript: What's New in ES2025?",
    date: "August 2, 2024",
    excerpt: "Explore the upcoming features in JavaScript ES2025 that will make your development more efficient.",
    image: "/link---figure---the-future-of-javascript--what-s-new-in-es2025-.png",
    author: "Toby Belhome",
    content: [
      {
        type: "paragraph",
        text: "JavaScript is continuously evolving with new features and improvements. ES2025 introduces several exciting capabilities that will enhance developer productivity and make code more maintainable."
      },
      {
        type: "paragraph",
        text: "ES2025 (also known as ES16) brings some of the most anticipated features like pattern matching, module blocks, and faster asynchronous operations. Let's explore these changes in detail."
      },
      {
        type: "section",
        title: "Why is it important?",
        content: [
          "These updates improve developer productivity and make JavaScript code more maintainable.",
          "New features address common pain points in async programming, type safety, and module composition.",
          "Performance optimizations make JavaScript faster without requiring code changes."
        ]
      },
      {
        type: "section",
        title: "What's Next?",
        content: [
          "Stay tuned for more news features that will shape the future of JavaScript."
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "ai-transforming-software-development",
    title: "How AI is Transforming Software Development",
    date: "August 5, 2024",
    excerpt: "Artificial intelligence is changing how we develop software. Learn about the latest trends and tools.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Toby Belhome",
    content: [
      {
        type: "paragraph",
        text: "Artificial intelligence is revolutionizing software development in unprecedented ways. From code generation to quality assurance, AI tools are enhancing developer productivity and code quality."
      },
      {
        type: "section",
        title: "Key AI Development Tools",
        content: [
          "Code completion systems that understand context and intent",
          "Automated testing platforms that identify edge cases",
          "Bug prediction algorithms that find issues before they occur",
          "Architectural assistants that help with system design decisions"
        ]
      },
      {
        type: "section",
        title: "Real-World Applications",
        content: [
          "AI-powered code refactoring that maintains functionality while improving structure",
          "Natural language requirements that translate directly to code specifications",
          "Predictive maintenance systems that anticipate component failures"
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "top-programming-languages-2024",
    title: "Top 5 Programming Languages for 2024",
    date: "August 10, 2024",
    excerpt: "Discover which programming languages are dominating the industry this year and why.",
    image: "/link---figure---top-5-programming-languages-for-2024.png",
    author: "Toby Belhome",
    content: [
      {
        type: "paragraph",
        text: "The programming language landscape continues to evolve in 2024. Some languages are gaining popularity due to new capabilities, while others remain strong due to their established ecosystems."
      }
    ]
  },
  {
    id: 4,
    slug: "web3-what-developers-need-to-know",
    title: "Web3: What Developers Need to Know",
    date: "August 15, 2024",
    excerpt: "A comprehensive guide to Web3 technologies and how they're shaping the future of the internet.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Toby Belhome",
    content: [
      {
        type: "paragraph",
        text: "Web3 represents the next evolution of the internet, focusing on decentralization, blockchain technologies, and user ownership of data and digital assets."
      }
    ]
  },
  {
    id: 5,
    slug: "tips-writing-clean-code",
    title: "10 Tips for Writing Clean Code",
    date: "August 20, 2024",
    excerpt: "Improve your coding practices with these essential tips for writing clean, maintainable code.",
    image: "/link---figure---the-future-of-javascript--what-s-new-in-es2025-.png",
    author: "Toby Belhome",
    content: [
      {
        type: "paragraph",
        text: "Writing clean, maintainable code is an essential skill for any developer. These tips will help you improve code quality and collaboration."
      }
    ]
  },
  {
    id: 6,
    slug: "rise-of-edge-computing-2024",
    title: "The Rise of Edge Computing in 2024",
    date: "August 25, 2024",
    excerpt: "How edge computing is revolutionizing data processing and improving application performance.",
    image: "/link---figure---how-ai-is-transforming-software-development.png",
    author: "Toby Belhome",
    content: [
      {
        type: "paragraph",
        text: "Edge computing brings computation and data storage closer to where it's needed, reducing latency and bandwidth usage while improving application performance."
      }
    ]
  }
];

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the current post
  const post = blogPosts.find(post => post.slug === slug);
  
  // Find related posts (excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 3);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // If post not found
  if (!post) {
    return (
      <div className="p-8 max-w-[900px] mx-auto text-center">
        <h1 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-6">Post not found</h1>
        <Button onClick={() => navigate('/blog')}>
          Return to Blog
        </Button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-[750px] mx-auto">
      {/* Breadcrumb navigation */}
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-sm text-neutral-500 dark:text-neutral-400 hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f]"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5 mr-1.5" />
          Back to Blog
        </Link>
      </div>
      
      {/* Article header */}
      <article className="mb-16">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-neutral-950 dark:text-white mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </header>
        
        {/* Featured image */}
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-auto rounded-lg mb-8 object-cover"
          style={{maxHeight: '400px'}}
        />
        
        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index} className="text-neutral-800 dark:text-neutral-200 mb-6">{block.text}</p>;
            }
            
            if (block.type === 'section' && block.content) {
              return (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-4">{block.title}</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {block.content.map((item, i) => (
                      <li key={i} className="text-neutral-800 dark:text-neutral-200">{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
            
            return null;
          })}
        </div>
      </article>
      
      {/* Related posts section */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-neutral-950 dark:text-white mb-6">Related posts</h2>
        
        <div className="space-y-6">
          {relatedPosts.map(relatedPost => (
            <div key={relatedPost.id} className="flex gap-4 items-center">
              <div className="flex-1">
                <Link 
                  to={`/blog/${relatedPost.slug}`}
                  className="text-base font-medium text-neutral-950 dark:text-white hover:text-[#ad9c5f] dark:hover:text-[#ad9c5f]"
                >
                  {relatedPost.title}
                </Link>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{relatedPost.date}</p>
              </div>
              <Link to={`/blog/${relatedPost.slug}`}>
                <img 
                  src={relatedPost.image} 
                  alt={relatedPost.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Button 
            className="w-full justify-center h-12 bg-[#ad9c5f] hover:bg-[#9d8d50] text-white rounded-lg px-6 text-sm font-medium"
            asChild
          >
            <Link to="/blog">
              All posts
            </Link>
          </Button>
        </div>
      </section>
      
      {/* Contact section */}
      <section className="bg-white dark:bg-[#222222] rounded-lg border border-neutral-200 dark:border-[#333333] p-8 mb-6 shadow-sm">
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
            href="https://cal.com/user"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a call
          </a>
        </Button>
      </section>
    </div>
  );
};