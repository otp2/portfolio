import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import { ProjectsPage } from "./screens/ProjectsPage";
import { AboutPage } from "./screens/AboutPage";
import { ContactPage } from "./screens/ContactPage";
import { BlogPage } from "./screens/BlogPage";
import { BlogPostPage } from "./screens/BlogPostPage";
import { ProjectDetailPage } from "./screens/ProjectDetailPage";
import { BcpProjectPage } from "./screens/BcpProjectPage";
import { IdnRadioCampaignPage } from "./screens/IdnRadioCampaignPage";
import { Sidebar } from "./components/Sidebar";
import { MobileHeader } from "./components/MobileHeader";
import { ThemeToggle } from "./components/ui/theme-toggle";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1280);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1280);
    };
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, isMobile]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#F5F5F5] dark:bg-[#262626]">
      <ScrollToTop />
      <Sidebar isMobile={isMobile} isMenuOpen={isMenuOpen} />

      {isMobile && isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Main Content with Seamless Background - Reverted Structure */}
      <div className={`relative ${isMobile ? 'w-full px-4' : 'ml-52'} mb-1.5`}> 
        <div className={`absolute top-6 ${isMobile ? 'left-4 right-4 bottom-6' : 'left-6 right-6 bottom-6'} bg-[#FAFAFA] dark:bg-[#0A0A0A] rounded-3xl z-0`}></div>
        <div className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16`}>
          {isMobile && (
            <MobileHeader 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
            />
          )}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/projects/sb-management" element={<ProjectDetailPage />} />
            <Route path="/projects/bcp" element={<BcpProjectPage />} />
            <Route path="/projects/spanish-ad" element={<IdnRadioCampaignPage />} />
          </Routes>
        </div>
      </div>

      {/* Footer - Outside main content div */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex justify-between items-center">
          <p className="text-xs text-neutral-400 dark:text-neutral-400">© 2025 Owen Pechous</p>
          <p className="text-xs text-neutral-400 dark:text-neutral-400">
            Designer & Developer
          </p>
      </footer>

      {/* Theme Toggle */}
      <div className={`fixed bottom-6 left-6 z-50 ${isMobile && !isMenuOpen ? 'hidden' : 'block'}`}>
        <ThemeToggle 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode}
        />
      </div>

    </div>
  );
};