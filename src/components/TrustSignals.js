import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faAward, faHandshake, faClock, faStar } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

/**
 * Trust Signals Component
 * Displays certifications, warranties, and social proof to build customer confidence
 */
function TrustSignals() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;

  const signals = [
    {
      icon: faShieldAlt,
      title: t('warrantyTitle') || 'Warranty Coverage',
      description: t('warrantyDesc') || 'Full warranty on workmanship and materials for lasting peace of mind'
    },
    {
      icon: faAward,
      title: t('experienceTitle') || '10+ Years Experience',
      description: t('experienceDesc') || 'Trusted by hundreds of local homeowners and businesses'
    },
    {
      icon: faHandshake,
      title: t('guaranteeTitle') || '100% Satisfaction Guaranteed',
      description: t('guaranteeDesc') || 'If you\'re not satisfied, we\'ll make it right'
    },
    {
      icon: faClock,
      title: t('onTimeTitle') || 'On-Time Completion',
      description: t('onTimeDesc') || 'We respect your time and deliver projects on schedule'
    },
    {
      icon: faStar,
      title: t('ratedTitle') || '4.9/5 Star Rated',
      description: t('ratedDesc') || 'Consistently excellent reviews from satisfied customers'
    },
    {
      icon: faShieldAlt,
      title: t('licensedTitle') || 'Licensed & Insured',
      description: t('licensedDesc') || 'Fully licensed and insured for your protection'
    }
  ];

  return (
    <section className="trust-signals-section" style={{
      padding: '2rem 2rem',
      backgroundColor: '#222',
      borderTop: '3px solid #8ED433',
      borderBottom: '3px solid #8ED433',
      paddingBottom: '3rem',
      color: '#fff'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        fontSize: '1.8rem',
        color: '#8ED433'
      }}>
        {t('whyChooseUs') || 'Why Choose 3 Brothers Landscaping?'}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {signals.map((signal, index) => (
          <div 
            key={index}
            style={{
              padding: '1.5rem',
              backgroundColor: '#333',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #444',
              transition: 'transform 0.3s, box-shadow 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              fontSize: '2.5rem',
              color: '#8ED433',
              marginBottom: '1rem'
            }}>
              <FontAwesomeIcon icon={signal.icon} />
            </div>
            <h3 style={{
              fontSize: '1.1rem',
              color: '#fff',
              marginBottom: '0.5rem',
              fontWeight: '600'
            }}>
              {signal.title}
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#ddd',
              lineHeight: '1.5'
            }}>
              {signal.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustSignals;
