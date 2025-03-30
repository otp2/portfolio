import { 
  MailIcon, 
  PhoneIcon,
  SendIcon
} from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // This would be where you'd send the form data to a server
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage({
        type: 'success',
        text: 'Message sent successfully! I will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-[900px] mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold text-neutral-950 dark:text-white mb-3">Contact</h1>
        <p className="text-gray-600 dark:text-neutral-400 text-lg">
          I'm always excited to collaborate on innovative and exciting projects!
        </p>
      </header>

      <div className="space-y-10">
        {/* Got Questions Section */}
        <section className="bg-white dark:bg-[#222222] rounded-lg border border-neutral-200 dark:border-[#333333] p-8 shadow-sm">
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
              href="https://cal.com/owen-pechous-ohsdk3/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a call
            </a>
          </Button>
        </section>

        {/* Send a Message Section */}
        <section>
          <h2 className="text-2xl font-semibold text-neutral-950 dark:text-white mb-6">Send a message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-[#222222] rounded-lg border border-neutral-200 dark:border-[#333333] p-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-200 dark:border-[#333333] dark:bg-[#222222] rounded-lg focus:ring-2 focus:ring-[#ad9c5f] focus:border-transparent outline-none text-neutral-900 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-neutral-200 dark:border-[#333333] dark:bg-[#222222] rounded-lg focus:ring-2 focus:ring-[#ad9c5f] focus:border-transparent outline-none text-neutral-900 dark:text-white"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-neutral-200 dark:border-[#333333] dark:bg-[#222222] rounded-lg focus:ring-2 focus:ring-[#ad9c5f] focus:border-transparent outline-none text-neutral-900 dark:text-white resize-none"
              />
            </div>
            
            {submitMessage && (
              <div className={`text-sm py-2 px-3 rounded-md ${
                submitMessage.type === 'success' 
                  ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                  : 'bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300'
              }`}>
                {submitMessage.text}
              </div>
            )}
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-[#ad9c5f] hover:bg-[#9d8d50] text-white rounded-lg px-5 text-sm flex items-center justify-center"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span>Submit</span>
              )}
            </Button>
          </form>
        </section>
      </div>
    </div>
  );
};