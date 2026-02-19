/**
 * centralized Configuration
 * All environment variables are loaded and exported from here
 */

export const CONFIG = {
  // Google Analytics
  ga: {
    measurementId: process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-QMQ9T0FGM5',
  },

  // Website Domain
  domain: process.env.REACT_APP_DOMAIN || 'https://www.3brothersottawalandscaping.ca',

  // Contact Information
  contact: {
    email: process.env.REACT_APP_EMAIL || '3brothersottawalandscaping@gmail.com',
    phone: process.env.REACT_APP_PHONE || '+16137983968',
    phoneDisplay: process.env.REACT_APP_PHONE_DISPLAY || '(613) 798-3968',
  },

  // Form Configuration
  form: {
    endpoint: process.env.REACT_APP_FORM_ENDPOINT || 'https://formspree.io/f/mykyqjbe',
  },

  // Canonical URLs
  urls: {
    home: process.env.REACT_APP_DOMAIN ? `${process.env.REACT_APP_DOMAIN}/` : 'https://www.3brothersottawalandscaping.ca/',
    about: process.env.REACT_APP_DOMAIN ? `${process.env.REACT_APP_DOMAIN}/about-us` : 'https://www.3brothersottawalandscaping.ca/about-us',
    contact: process.env.REACT_APP_DOMAIN ? `${process.env.REACT_APP_DOMAIN}/contact-us` : 'https://www.3brothersottawalandscaping.ca/contact-us',
  },
};
