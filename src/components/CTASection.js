import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { CONFIG } from '../config';

/**
 * Conversion-focused CTA component with trust signals
 * Shows multiple ways to contact (phone, email, form) with guarantees
 */
function CTASection({ title, subtitle, showTrustBadges = true }) {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;

  return (
    <section className="cta-section" style={{
      backgroundColor: '#222',
      padding: '2rem 2rem',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#fff'
    }}>
      <h2 style={{ marginBottom: '0.5rem', color: '#8ED433' }}>
        {title || t('readyToStart') || 'Ready to Transform Your Outdoor Space?'}
      </h2>
      
      {subtitle && <p style={{ fontSize: '1.1rem', color: '#ddd', marginBottom: '2rem' }}>{subtitle}</p>}

      {/* Trust Badges */}
      {showTrustBadges && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '2rem',
          fontSize: '0.95rem',
          color: '#ddd'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#8ED433' }} />
            <span>{t('freeEstimate') || 'Free Estimates'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#8ED433' }} />
            <span>{t('noObligation') || 'No Obligation'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#8ED433' }} />
            <span>{t('licensed') || 'Licensed & Insured'}</span>
          </div>
        </div>
      )}

      {/* Contact Options */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '2rem'
      }}>
        {/* Phone CTA */}
        <a 
          href={`tel:${CONFIG.contact.phone}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#8ED433',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7cc123'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8ED433'}
        >
          <FontAwesomeIcon icon={faPhone} />
          {CONFIG.contact.phoneDisplay}
        </a>

        {/* Email CTA */}
        <a 
          href={`mailto:${CONFIG.contact.email}`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#333',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#333'}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          {t('emailUs')}
        </a>

        {/* Form CTA */}
        <Link 
          to="/contact-us"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#666',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: '600',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#888'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#666'}
        >
          {t('requestEstimate') || 'Request Estimate'}
        </Link>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#999', marginTop: '1.5rem' }}>
        {t('responseTime') || 'We typically respond within 24 hours'}
      </p>
    </section>
  );
}

export default CTASection;
