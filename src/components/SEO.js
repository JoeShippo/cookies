// components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  author = "Cookie's Auto",
  type = "website",
}) => (
  <Helmet>
    {/* Page title */}
    <title>{title}</title>

    {/* Primary Meta Tags */}
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index,follow" />
    <meta name="author" content={author} />

    {/* Open Graph Meta Tags for Social Sharing */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image} />
    <meta property="og:site_name" content="Cookie's Auto" />

    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    {/* Structured Data for Local Business (JSON-LD) */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "Cookie's Auto",
        "description": description,
        "image": image,
        "url": url,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Olney",
          "addressRegion": "Buckinghamshire",
          "addressCountry": "UK",
        },
        "areaServed": [
          "Olney",
          "Milton Keynes",
          "Newport Pagnell",
          "Bedford",
          "Northampton",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+44 7123 456789",
          "contactType": "Customer Service",
        },
      })}
    </script>
  </Helmet>
);

export default SEO;