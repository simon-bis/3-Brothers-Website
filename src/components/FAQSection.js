import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { generateFAQSchema } from '../utils/seoHelpers';

/**
 * FAQ Component with Structured Data
 * Improves SEO by providing answers to common questions with schema markup
 */
function FAQSection() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const [openIndex, setOpenIndex] = useState(null);

  // Common FAQ questions - translate these keys in your translations.js
  const faqs = [
    {
      question: t('faqCostTitle') || 'How much do your services cost?',
      answer: t('faqCostAnswer') || 'Pricing varies based on project scope, size, and materials. We provide free estimates after assessing your specific needs. Contact us for a personalized quote.'
    },
    {
      question: t('faqTimelineTitle') || 'How long does a project take?',
      answer: t('faqTimelineAnswer') || 'Project duration depends on complexity and scope. Most residential projects take 1-4 weeks. We\'ll provide a detailed timeline during your consultation.'
    },
    {
      question: t('faqWarrantyTitle') || 'Do you offer warranties?',
      answer: t('faqWarrantyAnswer') || 'Yes! We stand behind all our work with comprehensive warranties on materials and workmanship. Ask us about specific warranty details for your project.'
    },
    {
      question: t('faqDesignTitle') || 'Can you help with design?',
      answer: t('faqDesignAnswer') || 'Absolutely! We offer 3D design services to help visualize your project before we begin. Our team can provide recommendations based on your budget and preferences.'
    },
    {
      question: t('faqSeasonTitle') || 'What\'s the best season for landscaping?',
      answer: t('faqSeasonAnswer') || 'Spring and fall are ideal for most landscaping projects. However, we can work year-round for many services. Contact us to discuss the best timing for your specific project.'
    },
    {
      question: t('faqMaintenanceTitle') || 'What maintenance is required?',
      answer: t('faqMaintenanceAnswer') || 'Maintenance requirements vary by service. Patios need occasional cleaning, gardens need seasonal care, and decks may need sealing. We provide detailed care instructions for all projects.'
    },
    {
      question: t('faqPaymentTitle') || 'What payment methods do you accept?',
      answer: t('faqPaymentAnswer') || 'We accept cash, check, and all major credit cards. Payment terms and financing options can be discussed based on your project needs.'
    },
    {
      question: t('faqInsuranceTitle') || 'Are you licensed and insured?',
      answer: t('faqInsuranceAnswer') || 'Yes, we are fully licensed, insured, and bonded. Your property and investment are protected throughout the entire project.'
    }
  ];

  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="faq-section" style={{
        padding: '2rem 2rem',
        backgroundColor: '#222',
        // borderRadius: '8px',
        color: '#fff',
        borderBottom: '3px solid #8ED433',
      }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '1.8rem',
          color: '#8ED433'
        }}>
          {t('frequentlyAsked') || 'Frequently Asked Questions'}
        </h2>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          color: '#ddd'
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                marginBottom: '1rem',
                backgroundColor: '#fff',
                borderRadius: '5px',
                overflow: 'hidden',
                border: '1px solid #ddd'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.25rem',
                  backgroundColor: '#fff',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#333',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f0f0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
              >
                <span>{faq.question}</span>
                <FontAwesomeIcon 
                  icon={faChevronDown}
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform 0.3s',
                    color: '#8ED433'
                  }}
                />
              </button>

              {openIndex === index && (
                <div style={{
                  padding: '1.25rem',
                  backgroundColor: '#fafafa',
                  borderTop: '1px solid #ddd',
                  lineHeight: '1.6',
                  color: '#555'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: '2rem',
          color: '#ccc'
        }}>
          {t('stillHaveQuestions') || 'Still have questions?'} <a 
            href="/contact-us"
            style={{
              color: '#8ED433',
              textDecoration: 'none',
              fontWeight: '600'
            }}
          >
            {t('contactUs') || 'Contact us'}
          </a>
        </p>
      </section>
    </>
  );
}

export default FAQSection;
