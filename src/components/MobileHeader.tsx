import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MobileHeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export const MobileHeader = ({ isMenuOpen, setIsMenuOpen }: MobileHeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center overflow-hidden">
        <div className={`flex items-center transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full absolute'}`}>
          <Avatar className="w-10 h-10 mr-3">
            <AvatarImage src="/01-png.png" alt="Owen Pechous" />
            <AvatarFallback>OP</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-sm text-neutral-900 dark:text-white">Owen Pechous</h3>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400">Creative Technologist</p>
          </div>
        </div>
      </div>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-3 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-sidebar"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
  );
};