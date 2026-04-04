import React, { useState, useEffect } from 'react';

export default function Features() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const featureList = [
    {
      title: "4K Performance",
      desc: "Experience ultra-high definition streaming with zero buffering and maximum clarity.",
      icon: <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8l3 3 7-7" /> // Simplifié
    },
    {
      title: "Enterprise Security",
      desc: "Military-grade encryption and security protocols to protect your media streams.",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    },
    {
      title: "Instant Activation",
      desc: "Get up and running in seconds with our automated deployment system.",
      icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    },
    {
      title: "Global Network",
      desc: "Optimized delivery across 200+ global edge locations for minimal latency.",
      icon: <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    },
    {
      title: "Maximum Uptime",
      desc: "99.9% SLA guarantee with intelligent failover and redundancy systems.",
      icon: <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    },
    {
      title: "24/7 Support",
      desc: "Round-the-clock expert assistance for all your technical needs.",
      icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    }
  ];

  return (
    <section id="features" style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: isMobile ? '60px 20px' : '100px 60px',
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(rgba(26, 32, 44, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 32, 44, 0.2) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      <h2 style={{ fontSize: isMobile ? '30px' : '42px', fontWeight: '800', marginBottom: '10px', textAlign: 'center' }}>
        Enterprise-Grade <span style={{ color: '#2563eb' }}>Features</span>
      </h2>
      <p style={{ color: '#71717a', marginBottom: '60px', fontSize: '16px', textAlign: 'center', maxWidth: '600px' }}>
        Built for performance, reliability, and scalability at every level
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: '24px',
        maxWidth: '1100px',
        width: '100%'
      }}>
        {featureList.map((f, i) => (
          <div key={i} style={{
            backgroundColor: 'rgba(10, 10, 10, 0.5)',
            border: '1px solid #1a1a1a',
            borderRadius: '16px',
            padding: '30px',
            transition: 'border-color 0.3s',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
              border: '1px solid rgba(37, 99, 235, 0.2)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {f.icon}
              </svg>
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: '700', marginBottom: '12px' }}>{f.title}</h3>
            <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: '1.6' }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
