import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { ProjectsPage } from "./screens/ProjectsPage";
import { AboutPage } from "./screens/AboutPage";
import { ContactPage } from "./screens/ContactPage";
import { DemoPage } from "./screens/DemoPage";
import { BlogPage } from "./screens/BlogPage";
import { BlogPostPage } from "./screens/BlogPostPage";
import { Sidebar } from "./components/Sidebar";
import { MobileHeader } from "./components/MobileHeader";
import { ThemeToggle } from "./components/ui/theme-toggle";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
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
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#F5F5F5] dark:bg-[#262626]">
      {/* ScrollToTop component for page navigation */}
      <ScrollToTop />
      
      {/* Sidebar - Hidden on mobile */}
      <Sidebar 
        isMobile={isMobile} 
        isMenuOpen={isMenuOpen} 
      />

      {/* Mobile Menu Overlay */}
      {isMobile && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content with Seamless Background */}
      <div className={`relative ${isMobile ? 'w-full px-4' : 'ml-52'}`}>
        <div className={`absolute top-6 ${isMobile ? 'left-4 right-4 bottom-28' : 'left-6 right-6 bottom-28'} bg-[#FAFAFA] dark:bg-[#0A0A0A] rounded-3xl z-0`}></div>

        <div className={`relative z-10 pt-6 pb-14 ${isMobile ? 'px-4' : 'px-6'} max-w-[1150px] mx-auto`}>
          {/* Mobile Header */}
          {isMobile && (
            <MobileHeader 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
            />
          )}

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </div>

        {/* Footer - Moved outside of content container */}
        <footer className="relative z-10 w-full py-5 flex justify-between items-center max-w-[1150px] mx-auto px-6">
          <p className="text-xs text-neutral-400 dark:text-neutral-400">© 2025 Owen Pechous</p>
          <p className="text-xs text-neutral-400 dark:text-neutral-400">
            Frontend Developer
          </p>
        </footer>
      </div>

      {/* Theme Toggle - Only visible on desktop or when mobile menu is open */}
      <div className={`fixed bottom-6 left-6 z-50 ${isMobile && !isMenuOpen ? 'hidden' : 'block'}`}>
        <ThemeToggle 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode}
        />
      </div>
    </div>
  );
};