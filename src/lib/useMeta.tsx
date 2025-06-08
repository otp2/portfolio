import { useEffect } from 'react';

interface MetaOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export const useMeta = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = '/og-image-port.png',
  ogUrl
}: MetaOptions) => {
  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update Open Graph tags
    const ogTitleTag = document.querySelector('meta[property="og:title"]');
    if (ogTitleTag) {
      ogTitleTag.setAttribute('content', ogTitle || title);
    }

    const ogDescriptionTag = document.querySelector('meta[property="og:description"]');
    if (ogDescriptionTag) {
      ogDescriptionTag.setAttribute('content', ogDescription || description);
    }

    const ogImageTag = document.querySelector('meta[property="og:image"]');
    if (ogImageTag) {
      ogImageTag.setAttribute('content', `https://owenpechous.com${ogImage}`);
    }

    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag && ogUrl) {
      ogUrlTag.setAttribute('content', `https://owenpechous.com${ogUrl}`);
    }

    // Update Twitter Card tags
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitleTag) {
      twitterTitleTag.setAttribute('content', ogTitle || title);
    }

    const twitterDescriptionTag = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescriptionTag) {
      twitterDescriptionTag.setAttribute('content', ogDescription || description);
    }

    const twitterImageTag = document.querySelector('meta[name="twitter:image"]');
    if (twitterImageTag) {
      twitterImageTag.setAttribute('content', `https://owenpechous.com${ogImage}`);
    }

    const twitterUrlTag = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrlTag && ogUrl) {
      twitterUrlTag.setAttribute('content', `https://owenpechous.com${ogUrl}`);
    }
  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl]);
}; 