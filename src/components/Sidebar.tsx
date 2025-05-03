import { 
  HomeIcon,
  LayoutDashboardIcon,
  UserIcon,
  MailIcon,
  TwitterIcon,
  BookTextIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface SidebarProps {
  isMobile: boolean;
  isMenuOpen: boolean;
}

export const Sidebar = ({ isMobile, isMenuOpen }: SidebarProps) => {
  const location = useLocation();
  
  return (
    <div 
      id="mobile-sidebar"
      className={`fixed left-0 top-0 h-full w-52 py-6 px-5 z-50 transition-transform duration-300 
      bg-[#F5F5F5] dark:bg-[#262626] border-r-0 dark:border-r dark:border-neutral-800
      ${isMobile ? (isMenuOpen ? 'translate-x-0' : '-translate-x-full') : ''}`}>
        <div className="flex items-center gap-3 mb-8">
          <Avatar className="w-10 h-10">
            <AvatarImage src="/01-png.png" alt="Owen Pechous" />
            <AvatarFallback>OP</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm text-neutral-800 dark:text-white">Owen Pechous</h3>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Designer & Developer</p>
          </div>
        </div>

        <nav className="space-y-6">
          <div className="space-y-1">
            <NavLink 
              to="/" 
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                isActive 
                  ? "text-neutral-900 dark:text-white bg-neutral-200/50 dark:bg-neutral-700/30" 
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20"
              }`}
            >
              <HomeIcon className="w-4 h-4" />
              <span>Homepage</span>
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                isActive 
                  ? "text-neutral-900 dark:text-white bg-neutral-200/50 dark:bg-neutral-700/30" 
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20"
              }`}
            >
              <LayoutDashboardIcon className="w-4 h-4" />
              <span>Projects</span>
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                isActive 
                  ? "text-neutral-900 dark:text-white bg-neutral-200/50 dark:bg-neutral-700/30" 
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20"
              }`}
            >
              <UserIcon className="w-4 h-4" />
              <span>About</span>
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                isActive || location.pathname.startsWith('/blog/')
                  ? "text-neutral-900 dark:text-white bg-neutral-200/50 dark:bg-neutral-700/30" 
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20"
              }`}
            >
              <BookTextIcon className="w-4 h-4" />
              <span>Blog</span>
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors duration-200 ${
                isActive 
                  ? "text-neutral-900 dark:text-white bg-neutral-200/50 dark:bg-neutral-700/30" 
                  : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20"
              }`}
            >
              <MailIcon className="w-4 h-4" />
              <span>Contact</span>
            </NavLink>
          </div>

          <div className="pt-5 border-t border-neutral-200 dark:border-neutral-700/50">
            <h4 className="px-3 text-xs font-medium mb-2 text-neutral-500 dark:text-neutral-400">Social</h4>
            <div className="space-y-1">
              <a 
                href="https://x.com/otp33" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20 rounded-lg"
              >
                <TwitterIcon className="w-4 h-4" />
                <span>Twitter</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/opechous/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20 rounded-lg"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/otp2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/30 dark:hover:bg-neutral-700/20 rounded-lg"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </nav>
    </div>
  );
};