import { ExternalLinkIcon } from "lucide-react";
import { Button } from "./ui/button";

export const GetTemplateButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        className="pl-4 pr-4 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-xl flex items-center gap-2 h-auto"
        asChild
      >
        <a
          href="https://shadcnuikit.com/template/neofolio-portfolio-template"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold flex items-center text-sm"
        >
          Get Template
          <ExternalLinkIcon className="w-3.5 h-3.5 ml-1.5" />
        </a>
      </Button>
    </div>
  );
};