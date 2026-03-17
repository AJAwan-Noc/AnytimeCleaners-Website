import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({
  title = 'Anytime Cleaners - Professional Commercial & Residential Cleaning Melbourne',
  description = 'Anytime Cleaners provides high-quality commercial cleaning and residential cleaning services in Melbourne. Green-Clean certified with 100% satisfaction guarantee.',
  keywords = 'commercial cleaning melbourne, office cleaning melbourne, residential cleaning melbourne, bond cleaning melbourne, house cleaning melbourne',
  canonical = 'https://anytimecleaners.com.au',
  ogType = 'website',
  ogImage = '/og-image.jpg',
}: SEOProps) {
  const siteTitle = title.includes('Anytime Cleaners') ? title : `${title} | Anytime Cleaners`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
