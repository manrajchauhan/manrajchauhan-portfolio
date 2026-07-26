'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { useLeadModal } from './LeadCaptureContext';

const serviceOptions = [
  'Web Apps & Product Frontends',
  'System Architecture',
  'Design & Motion Systems',
  'Technical Leadership',
];

const budgetOptions = [
  '<$5,000',
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000+',
];

export default function LeadCaptureModal() {
  const { isOpen, selectedService, closeLeadModal } = useLeadModal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: selectedService || 'Web Apps & Product Frontends',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeLeadModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLeadModal]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      // Attempt API POST submission (Web3Forms / Formspree endpoint format)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Fallback handled gracefully if key unconfigured
          subject: `New Lead Inquiry: ${formData.name} (${formData.service})`,
          from_name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok || (result && result.success)) {
        setIsSubmitted(true);
      } else {
        // Fallback to client mailto trigger so no lead is ever lost
        const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.service} (${formData.name})`);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Brief:\n${formData.message}`
        );
        window.location.href = `mailto:contact@manrajchauhan.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        setIsSubmitted(true);
      }
    } catch (err) {
      // Direct mailto fallback on network catch
      const mailtoSubject = encodeURIComponent(`Project Inquiry: ${formData.service} (${formData.name})`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Brief:\n${formData.message}`
      );
      window.location.href = `mailto:contact@manrajchauhan.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setErrorMessage('');
    closeLeadModal();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLeadModal}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(5, 5, 5, 0.82)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '620px',
              maxHeight: '90vh',
              overflowY: 'auto',
              background: '#0e0e0e',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '16px',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.9)',
              padding: '36px var(--page-pad)',
              color: 'var(--color-paper)',
              zIndex: 10000,
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeLeadModal}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: 'var(--color-paper)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 10px' }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--color-lime)',
                    color: 'var(--color-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 800, margin: '0 0 12px' }}>
                  Inquiry Received!
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.72)', fontSize: '15px', lineHeight: '1.6', maxWidth: '440px', margin: '0 auto 28px' }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. I will review your project scope and get back to you within 24 hours.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="action-button action-button--light"
                  style={{ padding: '12px 28px', cursor: 'pointer' }}
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <div>
                <div style={{ marginBottom: '28px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--color-lime)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px' }}>
                    <Sparkles size={12} /> Project Inquiry & Collaboration
                  </span>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, margin: 0 }}>
                    Let&apos;s Build Something Impactful.
                  </h2>
                  <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '14px', marginTop: '8px' }}>
                    Fill in your details below and I&apos;ll get back to you within 24 hours with project scope & availability.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Name & Email Inputs */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '8px',
                          color: 'var(--color-paper)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.16)',
                          borderRadius: '8px',
                          color: 'var(--color-paper)',
                          fontSize: '14px',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>

                  {/* Service Selection Pills */}
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Service Needed
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {serviceOptions.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: srv })}
                          style={{
                            padding: '7px 12px',
                            borderRadius: '999px',
                            border: formData.service === srv ? '1px solid var(--color-lime)' : '1px solid rgba(255, 255, 255, 0.14)',
                            background: formData.service === srv ? 'var(--color-lime)' : 'rgba(255, 255, 255, 0.04)',
                            color: formData.service === srv ? 'var(--color-ink)' : 'rgba(255, 255, 255, 0.8)',
                            fontWeight: formData.service === srv ? 700 : 400,
                            fontFamily: 'var(--font-code)',
                            fontSize: '11px',
                            cursor: 'pointer',
                            transition: 'all 0.18s ease',
                          }}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Project Budget Range
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {budgetOptions.map((bgt) => (
                        <button
                          key={bgt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: bgt })}
                          style={{
                            padding: '7px 12px',
                            borderRadius: '999px',
                            border: formData.budget === bgt ? '1px solid var(--color-lime)' : '1px solid rgba(255, 255, 255, 0.14)',
                            background: formData.budget === bgt ? 'var(--color-lime)' : 'rgba(255, 255, 255, 0.04)',
                            color: formData.budget === bgt ? 'var(--color-ink)' : 'rgba(255, 255, 255, 0.8)',
                            fontWeight: formData.budget === bgt ? 700 : 400,
                            fontFamily: 'var(--font-code)',
                            fontSize: '11px',
                            cursor: 'pointer',
                            transition: 'all 0.18s ease',
                          }}
                        >
                          {bgt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Brief */}
                  <div>
                    <label style={{ display: 'block', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-code)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Project Brief / Goals *
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Describe your project, timeline, key features, or objectives..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        borderRadius: '8px',
                        color: 'var(--color-paper)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="action-button action-button--light"
                    style={{
                      width: '100%',
                      padding: '14px',
                      marginTop: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: isSubmitting ? 'wait' : 'pointer',
                    }}
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span> <Send size={14} />
                      </>
                    )}
                  </button>

                  <div style={{ textAlign: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <a
                      href="https://wa.me/?text=Hi%20Manraj,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'rgba(255, 255, 255, 0.72)',
                        fontFamily: 'var(--font-code)',
                        fontSize: '12px',
                        textDecoration: 'none',
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Or chat directly on WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
