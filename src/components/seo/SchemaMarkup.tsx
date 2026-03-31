import { Helmet } from 'react-helmet-async';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Anytime Cleaners",
    "image": "https://anytimecleaners.com.au/logo.png",
    "@id": "https://anytimecleaners.com.au",
    "url": "https://anytimecleaners.com.au",
    "telephone": "0383857705",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 1/236 Caroline Springs Blvd",
      "addressLocality": "Caroline Springs",
      "addressRegion": "VIC",
      "postalCode": "3023",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.7420,
      "longitude": 144.7351
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/anytimecleaners",
      "https://www.instagram.com/anytimecleaners",
      "https://www.linkedin.com/company/anytimecleaners"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function ServiceSchema({ name, description }: { name: string; description: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Anytime Cleaners"
    },
    "description": description,
    "areaServed": {
      "@type": "City",
      "name": "Melbourne"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; item: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://anytimecleaners.com.au${item.item}`
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function FAQSchema({ questions }: { questions: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export function BlogPostingSchema({ 
  title, 
  author, 
  datePublished, 
  image, 
  description 
}: { 
  title: string; 
  author: string; 
  datePublished: string; 
  image: string; 
  description: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "image": `https://anytimecleaners.com.au${image}`,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": new Date(datePublished).toISOString(),
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "Anytime Cleaners",
      "logo": {
        "@type": "ImageObject",
        "url": "https://anytimecleaners.com.au/logo.png"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
