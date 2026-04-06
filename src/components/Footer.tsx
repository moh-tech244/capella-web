import React, { useState } from 'react';

const FooterSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const faqs = [
    { q: "Zero buffering on 4K?", a: "Yes. Our Elite Protocol uses 200+ Global Edge locations to eliminate latency, even during peak live sports events." },
    { q: "Which devices work?", a: "Plug & Play on FireStick, Apple TV, Android, iOS, and Smart TVs. No complex setup required." },
    { q: "Is activation instant?", a: "Immediately. Your access is generated and delivered to your dashboard the second your payment is confirmed." }
  ];

  return (
    <>
      {/* SECTION FAQ - LA MACHINE À CONFIANCE */}
      <section style={{ padding: '100px 20px', backgroundColor: '#000', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', textAlign: 'center', marginBottom: '50px', color: '#fff' }}>
            Technical FAQ
          </h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {faqs.map((faq, i) => (
              <div 
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ 
                  padding: '25px', 
                  backgroundColor: '#09090b', 
                  borderRadius: '16px', 
                  border: hovered === i ? '1px solid #3b82f6' : '1px solid #18181b',
                  transition: 'all 0.3s ease'
                }}
              >
                <h3 style={{ fontSize: '18px', color: hovered === i ? '#3b82f6' : '#fff', marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ color: '#71717a', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER FINAL - STYLE APPLE/SAAS */}
      <footer style={{ padding: '80px 20px', backgroundColor: '#000', borderTop: '1px solid #111' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', marginBottom: '15px' }}>CAPELLA</h3>
            <p style={{ color: '#52525b', fontSize: '14px', lineHeight: '1.5' }}>
              The gold standard in media optimization. Private protocols for elite performance.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '60px' }}>
            <div>
              <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '15px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#52525b', fontSize: '14px', lineHeight: '2' }}>
                <li>Status Page</li>
                <li>Documentation</li>
                <li>Reddit Support</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '15px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: '#52525b', fontSize: '14px', lineHeight: '2' }}>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', color: '#27272a', fontSize: '12px', borderTop: '1px solid #09090b', paddingTop: '30px' }}>
          © 2026 CAPELLA HOME MEDIA OPTIMIZER. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
