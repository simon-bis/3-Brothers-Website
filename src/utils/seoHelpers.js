/**
 * SEO Helper Functions
 * Generates consistent JSON-LD schemas and meta tags for SEO optimization
 */

import { CONFIG } from '../config';

/**
 * Generate Service Schema for structured data
 */
export const generateServiceSchema = (serviceName, description, imageUrl = null) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      '@id': 'https://www.3brothersottawalandscaping.ca/#business',
      'name': '3 Brothers Ottawa Landscaping',
      'telephone': '+1-613-798-3968',
      'url': CONFIG.domain,
      'logo': 'https://www.3brothersottawalandscaping.ca/logo.png',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Ottawa',
        'addressRegion': 'ON',
        'addressCountry': 'CA'
      }
    },
    'areaServed': 'Ottawa, Ontario, Canada',
    ...(imageUrl && { 'image': imageUrl })
  };
};

/**
 * Generate Breadcrumb Schema for navigation
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
};

/**
 * Generate FAQ Schema for common questions
 */
export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
};

/**
 * Generate Aggregate Rating Schema from reviews
 */
export const generateAggregateRatingSchema = (rating = '4.9', reviewCount = 50, ratingValue = 5) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateOffer',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': ratingValue.toString(),
      'ratingCount': reviewCount.toString(),
      'bestRating': '5',
      'worstRating': '1'
    }
  };
};

/**
 * Generate Local Business Schema
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org/',
    '@type': 'LocalBusiness',
    '@id': 'https://www.3brothersottawalandscaping.ca/#business',
    'name': '3 Brothers Ottawa Landscaping',
    'image': 'https://www.3brothersottawalandscaping.ca/logo.png',
    'description': 'Professional landscaping, interlock, decks, and fencing services in Ottawa. Free estimates. Over 10 years of experience.',
    'telephone': '+1-613-798-3968',
    'email': '3brothersottawalandscaping@gmail.com',
    'url': CONFIG.domain,
    'priceRange': '$$$',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Ottawa',
      'addressRegion': 'ON',
      'postalCode': '',
      'addressCountry': 'CA'
    },
    'areaServed': [
      {
        '@type': 'City',
        'name': 'Ottawa'
      },
      {
        '@type': 'City',
        'name': 'Kanata'
      },
      {
        '@type': 'City',
        'name': 'Nepean'
      }
    ],
    'sameAs': [
      'https://www.facebook.com/p/3-Brothers-Ottawa-Landscaping-61578217040373/',
      'https://www.instagram.com/3_brothers_ottawa_landscaping/'
    ]
  };
};

/**
 * Generate Open Graph Meta Tags (returns object for use with Helmet)
 */
export const generateOpenGraphTags = (title, description, url, imageUrl = null) => {
  return {
    'og:type': 'website',
    'og:title': title,
    'og:description': description,
    'og:url': url,
    ...(imageUrl && { 'og:image': imageUrl }),
    'og:site_name': '3 Brothers Ottawa Landscaping',
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    ...(imageUrl && { 'twitter:image': imageUrl })
  };
};

/**
 * Generate Offer Schema (for pricing/services)
 */
export const generateOfferSchema = (serviceName, priceFrom, priceTo = null, description = '') => {
  const offer = {
    '@type': 'Offer',
    'name': serviceName,
    'description': description,
    'priceCurrency': 'CAD',
    'price': priceFrom
  };

  if (priceTo) {
    offer.priceRange = `$${priceFrom} - $${priceTo}`;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': serviceName,
    'description': description,
    'provider': {
      '@type': 'LocalBusiness',
      'name': '3 Brothers Ottawa Landscaping',
      'telephone': '+1-613-798-3968'
    },
    'offers': offer
  };
};

/**
 * Get canonical URL helper
 */
export const getCanonicalUrl = (path) => {
  return `${CONFIG.domain}${path}`;
};

/**
 * Generate structured data for testimonials/reviews  
 */
export const generateReviewSchema = (reviewText, authorName, rating = 5) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': rating.toString(),
      'bestRating': '5'
    },
    'author': {
      '@type': 'Person',
      'name': authorName
    },
    'reviewBody': reviewText
  };
};
