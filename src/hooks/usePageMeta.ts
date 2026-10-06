import { useEffect } from 'react';

export const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    // Update document title
    const fullTitle = title.includes('Ruan Pinheiro')
      ? title
      : `${title} — Ruan Pinheiro`;
    document.title = fullTitle;

    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
  }, [title, description]);
};
