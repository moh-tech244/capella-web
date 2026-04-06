import React, { useState, useEffect } from 'react';

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const plans = [
    {
      name: "Basic Access",
      price: "15",
      period: "/month",
      desc: "Perfect for getting started",
      features: ["1 Month Access", "4K Quality", "Standard Support", "5,000 Channels"],
      popular: false,
      delay: '0.1s'
    },
    {
      name: "Standard Pack",
      price: "60",
      period: "/6 months",
      desc: "Balanced choice for users",
      features: ["6 Months Access", "Priority Bandwidth", "24/7 Support", "10,000 Channels"],
      popular: false,
      delay: '0.3s'
    },
    {
      name: "Elite Protocol",
      price: "89",
      period: "/year",
      desc: "Best Value Protocol",
      features: ["12 Months + 1 Free", "Maximum Stability", "Instant Activation", "15,000 Channels"],
      popular: true,
      delay: '0.5s'
    }
  ];

  return (
    <section id="pricing" style={{
      backgroundColor: '#000',
      color: '#fff',
      padding: isMobile ? '60px 20px' : '100px 4vw', // padding latéral fluide
      fontFamily: '"Inter", sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }}>
      {/* Styles d'animation et de remplissage */}
      <style>{`
        @keyframes pricingFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pricing-card {
          animation: pricingFadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }
        .pricing-card:hover {
          transform: translateY(-10px) !important;
          border-color: #2563eb !important;
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1) !important;
          transition: all 0.4s ease;
        }
        .bg-glow {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
      `}</style>

      <div className="bg-glow"></div>

      <div style={{ textAlign: 'center', marginBottom: '60px', zIndex: 2 }}>
        <h2 style={{ 
          fontSize: isMobile ? '36px' : '56px', 
          fontWeight: '900', 
          marginBottom: '16px',
          letterSpacing: '-1px' 
        }}>
          Choose Your <span style={{ color: '#2563eb' }}>Protocol</span>
        </h2>
        <p style={{ color: '#71717a', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Select the high-performance plan that fits your elite streaming needs.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '25px',
        maxWidth: '1400px', // Élargi pour ne pas laisser de vide
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch',
        zIndex: 2
      }}>
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="pricing-card"
            style={{
              flex: 1,
              backgroundColor: '#0a0a0a',
              borderRadius: '28px',
              padding: isMobile ? '35px 25px' : '45px 35px',
              border: plan.popular ? '2px solid #2563eb' : '1px solid #1a1a1a',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              animationDelay: plan.delay,
              transition: 'all 0.4s ease'
            }}
          >
            {plan.popular && (
              <div style={{
                position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#2563eb', color: 'white', padding: '6px 20px',
                borderRadius: '99px', fontSize: '12px', fontWeight: '800', letterSpacing: '1px'
              }}>
                MOST POPULAR
              </div>
            )}

            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px', color: '#fff' }}>{plan.name}</h3>
            <p style={{ color: '#71717a', fontSize: '14px', marginBottom: '30px' }}>{plan.desc}</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '48px', fontWeight: '900', color: '#fff' }}>${plan.price}</span>
              <span style={{ fontSize: '16px', color: '#a1a1aa', fontWeight: '700' }}>CAD</span>
            </div>
            <p style={{ color: '#71717a', fontSize: '14px', marginBottom: '35px', fontWeight: '500' }}>{plan.period}</p>

            <div style={{ flex: 1, marginBottom: '40px' }}>
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(37, 99, 235, 0.15)', borderRadius: '50%', 
                    width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span style={{ color: '#e4e4e7', fontSize: '14.5px', fontWeight: '400' }}>{feature}</span>
                </div>
              ))}
            </div>

            <button style={{
              backgroundColor: plan.popular ? '#2563eb' : 'transparent',
              color: 'white', 
              padding: '16px', 
              borderRadius: '14px', 
              border: plan.popular ? 'none' : '1px solid #27272a',
              fontWeight: '700', 
              fontSize: '15px', 
              cursor: 'pointer',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if(!plan.popular) e.currentTarget.style.backgroundColor = '#1a1a1a';
            }}
            onMouseLeave={(e) => {
              if(!plan.popular) e.currentTarget.style.backgroundColor = 'transparent';
            }}
            >
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
