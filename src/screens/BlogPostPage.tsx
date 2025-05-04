import { ArrowLeftIcon, MailIcon, PhoneIcon } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { blogPosts } from "../lib/blogData"; // Import the blog data

// Mock data for blog posts - Reordered by date (newest first)
/* Remove this local definition
const blogPosts = [
  // ... (entire array definition)
];
*/

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
      <>
        <div className="mt-8 text-center">
          <h1 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-6">Post not found</h1>
          <Button onClick={() => navigate('/blog')}>
            Return to Blog
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Breadcrumb navigation */}
      <div className="mt-8 mb-16">
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
          <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-950 dark:text-white mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
            <span>{post.author}</span>
            <span className="mx-2">|</span>
            <span>{post.date}</span>
          </div>
        </header>
        
        {/* Featured image */}
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-auto rounded-lg mb-8"
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
                  className="w-16 h-16 object-contain rounded-lg"
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