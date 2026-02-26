import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { CONFIG } from '../config';
import CTASection from '../components/CTASection';
import heroImg from '../assets/Landscaping/landscaping_01.webp';
// import owners from '../assets/About_us/owners.png';
import equipment from '../assets/About_us/bobcat.png';
import warranty from '../assets/About_us/warranty.png';
import clear_stone from '../assets/About_us/clear_stone.png';

const About = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const canonical = CONFIG.urls.about;

  return (
    <div className="about-page">
      <Helmet>
        <title>{t('aboutTitle')}</title>
        <meta name="description" content={t('aboutMeta')} />
        <meta name="keywords" content="3 Brothers Landscaping, about us, experience, warranty, team, Ottawa landscaping company" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={t('aboutTitle')} />
        <meta property="og:description" content={t('aboutMeta')} />
        <meta property="og:site_name" content="3 Brothers Ottawa Landscaping" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t('aboutTitle')} />
        <meta name="twitter:description" content={t('aboutMeta')} />
      </Helmet>

      <header className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="about-hero-inner">
          <h1>{t('aboutTitle')}</h1>
        </div>
      </header>

      <section className="about-content">
        {/* Why Choose Section */}
        <article className="about-section full-width">
          <div className="section-inner">
            <div className="section-text centered">
              <h2>{t('aboutWhyTitle')}</h2>
              <p>{t('aboutWhy')}</p>
            </div>
          </div>
        </article>

        {/* Warranty Section */}
        <article className="about-section full-width">
          <div className="section-inner">
            <div className="section-text">
              <h2>{t('aboutWarrantyTitle')}</h2>
              <p>{t('aboutWarranty')}</p>
            </div>
            <div className="section-image">
              <img src={warranty} alt="Warranty guarantee" />
            </div>
          </div>
        </article>

        {/* Clear Stone Section */}
        <article className="about-section full-width">
          <div className="section-inner">
            <div className="section-image">
              <img src={clear_stone} alt="Clear stone advantage" />
            </div>
            <div className="section-text">
              <h2>{t('aboutClearStoneTitle')}</h2>
              <ul>
                <li>{t('aboutClearStoneIntro')}</li>
                <li>{t('aboutClearStoneMethod')}</li>
                <li>{t('aboutClearStoneWhy')}</li>
              </ul>
            </div>
          </div>
        </article>

        {/* Equipment Section */}
        <article className="about-section full-width">
          <div className="section-inner">
            <div className="section-text">
              <h2>{t('aboutEquipmentTitle')}</h2>
              <ul>
                <li>{t('aboutEquipmentBobcat')}</li>
                <li>{t('aboutEquipmentCompaction')}</li>
                <li>{t('aboutEquipmentHauling')}</li>
                <li>{t('aboutEquipmentTools')}</li>
              </ul>
            </div>
            <div className="section-image">
              <img src={equipment} alt="Professional equipment" />
            </div>
          </div>
        </article>

        {/* Promise Section */}
        <article className="about-section full-width">
          <div className="section-inner">
            <div className="section-image">
              <img src={heroImg} alt="Our promise to you" />
            </div>
            <div className="section-text">
              <h2>{t('aboutPromiseTitle')}</h2>
              <ul>
                <li>{t('aboutPromiseBilingual')}</li>
                <li>{t('aboutPromiseEstimate')}</li>
                <li>{t('aboutPromiseLocal')}</li>
                <li>{t('aboutPromiseSatisfaction')}</li>
              </ul>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <CTASection 
          title={t('readyToStart')}
          subtitle={t('connectWithUs')}
          showTrustBadges={true}
        />
      </section>
    </div>
  );
};

export default About;
