import { ThemeToggle as NewThemeToggle } from "./ui/theme-toggle";

interface ThemeToggleProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

// This is just a wrapper component that will redirect to our new theme toggle
// to ensure backward compatibility with the existing code
export const ThemeToggle = ({ isDarkMode, setIsDarkMode }: ThemeToggleProps) => {
  return (
    <NewThemeToggle 
      isDarkMode={isDarkMode} 
      setIsDarkMode={setIsDarkMode} 
    />
  );
};