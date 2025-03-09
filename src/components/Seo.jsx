import React, { useEffect } from 'react';

const Seo = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update the document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    return () => {
      // Cleanup function not needed for our purposes
    };
  }, [title, description, keywords]);

  return null; // This component doesn't render anything
};

export default Seo;