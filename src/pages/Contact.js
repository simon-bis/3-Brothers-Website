import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { CONFIG } from '../config';
import interlockImg from '../assets/Interlock/interlock_01.webp';
import landscapingImg from '../assets/Landscaping/landscaping_01.webp';
import decksImg from '../assets/Decks_&_Railings/deck_01.webp';
import wallImg from '../assets/Retaining_Walls/retaining_01.webp';
import stampedPadImg from '../assets/Stamped_Concrete/stamped_01.webp';
import pergolaImg from '../assets/Pergolas/pergola_01.webp';
import repairImg from '../assets/Relevels_&_Repairs/relevel_01.webp';
import drivewayImg from '../assets/Driveways/driveway_01.webp';
import fenceImg from '../assets/Fences/fence_01.webp';
import pressureImg from '../assets/Pressure_Washing_&_Resand/pressure_01.webp';

const Contact = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const FORM_ENDPOINT = CONFIG.form.endpoint;
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));

    // inline validation with field-specific errors
    setErrors((prev) => {
      const newErr = { ...prev };
      
      if (name === 'name') {
        if (!value.trim()) {
          newErr.name = t('nameRequired');
        } else {
          delete newErr.name;
        }
      } else if (name === 'email') {
        if (!value.trim()) {
          newErr.email = t('emailRequired');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErr.email = t('emailInvalid');
        } else {
          delete newErr.email;
        }
      } else if (name === 'message') {
        if (!value.trim()) {
          newErr.message = t('messageRequired');
        } else {
          delete newErr.message;
        }
      }
      
      return newErr;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // validate all fields on submit
    const newErrors = {};
    if (!form.name || !form.name.trim()) {
      newErrors.name = t('nameRequired');
    }
    if (!form.email || !form.email.trim()) {
      newErrors.email = t('emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t('emailInvalid');
    }
    if (!form.message || !form.message.trim()) {
      newErrors.message = t('messageRequired');
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus({ type: 'error', message: t('fillRequired') });
      return;
    }

    setStatus({ type: 'loading', message: t('sendingMessage') });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      
      if (res.ok) {
        let successMsg = t('messageSent');
        if (form.phone) {
          const template = t('callWithin24');
          successMsg += ' ' + template.replace('{phone}', form.phone);
        }
        setStatus({ type: 'success', message: successMsg });
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });

        // --- NEW: Meta Pixel / CRM Conversion Tracking ---
        // Checks if the Facebook Pixel is loaded on the page
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Contact Form',
            value: 0.00, // Optional: You can assign a value to a lead if you want
            currency: 'CAD'
          });
        }
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
         event: 'form_submission_success'
        });
      } else {
        setStatus({ type: 'error', message: data.error || t('sendingFailed') });
      }
    } catch (err) {
      setStatus({ type: 'error', message: t('networkError') });
    }
  };

  const projectImages = [interlockImg, landscapingImg, decksImg, wallImg, stampedPadImg, pergolaImg, repairImg, drivewayImg, fenceImg, pressureImg];

  return (
    <div className="contact-page">
      <Helmet>
        <title>{t('contactTitle')}</title>
        <meta name="description" content={t('contactPageMeta')} />
        <meta name="keywords" content="contact 3 Brothers Landscaping, get a quote, landscaping estimate, free consultation, Ottawa" />
        <link rel="canonical" href={CONFIG.urls.contact} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CONFIG.urls.contact} />
        <meta property="og:title" content={t('contactTitle')} />
        <meta property="og:description" content={t('contactPageMeta')} />
        <meta property="og:site_name" content="3 Brothers Ottawa Landscaping" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('contactTitle')} />
        <meta name="twitter:description" content={t('contactPageMeta')} />
      </Helmet>
      <div className="contact-container">
        {/* Left Section: Contact Info */}
        <section className="contact-info-section">
          <h2>{t('connectWithUs')}</h2>
          <p className="intro-text">{t('projectInMind')}</p>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h4>{t('location')}</h4>
              <p>{t('ottawa')}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h4>{t('phone')}</h4>
              <p><a href={`tel:${CONFIG.contact.phone}`}>{CONFIG.contact.phoneDisplay}</a></p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h4>{t('email')}</h4>
              <p><a href={`mailto:${CONFIG.contact.email}`}>{CONFIG.contact.email}</a></p>
            </div>
          </div>
        </section>

        {/* Right Section: Contact Form */}
        <section className="contact-form-section">
          <p className="response-note">{t('respond24')}</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field-group">
                <label htmlFor="name">{t('yourName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>
              <div className="field-group">
                <label htmlFor="email">{t('yourEmail')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="phone">{t('phoneNumber')} ({t('optional')})</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
            </div>


            <div className="field-group">
              <label htmlFor="message">{t('yourMessage')}</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>

            {/* Trust & Privacy Notice */}
            <div className="form-notice">
              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>
                ✓ <strong>Free, no-obligation quote</strong> | Your information is secure and will never be shared
              </p>
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">{t('sendBtn')}</button>
            </div>

            {status && (
              <div className={`form-status ${status.type}`}>{status.message}</div>
            )}
          </form>
        </section>
      </div>

      {/* Project Gallery Below */}
      <div className="contact-projects">
        <h3>{t('projectsTitle')}</h3>
        <div className="projects-grid">
          {projectImages.map((img, idx) => {
            const projectTypes = [t('interlock'), t('landscaping'), t('decking'), t('retainingWalls'), t('stampedConcrete'), t('pergolas'), t('relevel'), t('driveways'), t('fences'), t('pressureWashing')];
            const projectType = projectTypes[idx % projectTypes.length];
            return (
              <div key={idx} className="project-thumb">
                <img src={img} alt={`${projectType} ${t('projectAltSuffix')}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;