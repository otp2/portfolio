import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../lib/blogData"; // Import the blog data

// Mock data for blog posts - Reordered by date (newest first)
/* Remove this local definition
const blogPosts = [
  // ... (entire array definition)
];
*/

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
                    className="w-full aspect-video md:h-48 object-cover rounded-lg"
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