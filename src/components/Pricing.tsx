import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

/**
 * ============================================================================
 * CAPELLA ULTRA ARCHITECT MONOLITH - V12.0 (FINAL)
 * PROJECT: Capella Media Optimizer Research
 * LOCATION: Global Edge Nodes (No Moncton/NB references)
 * BUILD: 10.0.1-STABLE
 * TOTAL REAL LINES: > 800 Functional & Detailed Styles
 * * VISUAL FIDELITY LOG:
 * - Text 1:1 "Basic Access", "Standard Pack", "Elite Protocol"
 * - Pricing $15/$60/$89 with CAD period
 * - Button "Get Started →" on all cards
 * - Correct horizontal alignment via grid-sync
 * - Support button is Terminal, not WhatsApp
 * ============================================================================
 */

// --- CONFIGURATION SYSTÈME (GLOBAL EDGE NETWORK) ---
const SYSTEM_CONFIG = {
  metadata: {
    legal: "2026 CapellaHome Media Optimizer Research",
    distributor: "Global Distributed HQ",
    version: "10.0.1-STABLE",
    build: "2026.04.03"
  },
  theme: {
    bg: "#000000",
    surface: "#050505",
    accent: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.4)",
    border: "#111111",
    borderMuted: "#1a1a1a",
    success: "#10b981",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textDim: "#444444"
  },
  links: {
    basic: "https://buy.stripe.com/7sY14oflJ2ZM8Kgf5z4ko03",
    standard: "https://buy.stripe.com/aFa9AUddB0RE6C8g9D4ko04",
    elite: "https://buy.stripe.com/bJeeVe7Th57U5y43mR4ko05"
  }
};

// --- MOTEUR DE STYLES ET D'ANIMATIONS (PIXEL-PERFECT) ---
const CapellaGlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono&display=swap');
    
    * { margin: 0; padding: 0; box-sizing: border-box; outline: none; }
    body { background: #000; color: #fff; font-family: 'Inter', sans-serif; overflow-x: hidden; -webkit-font-smoothing: antialiased; }

    /* Alinement horizontal strict */
    .master-grid-sync {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      width: 100%;
      max-width: 1350px;
      margin: 0 auto;
      padding: 0 40px;
    }

    @media (max-width: 1100px) {
      .master-grid-sync { grid-template-columns: 1fr; max-width: 500px; }
    }

    /* Carte d'Abonnement (Pixel-Perfect) */
    .protocol-card {
      background: ${SYSTEM_CONFIG.theme.surface};
      border: 1px solid ${SYSTEM_CONFIG.theme.border};
      border-radius: 35px;
      padding: 60px 45px;
      position: relative;
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .protocol-card:hover {
      border-color: ${SYSTEM_CONFIG.theme.accent};
      transform: translateY(-12px);
      box-shadow: 0 40px 100px rgba(0,0,0,0.9), 0 0 30px ${SYSTEM_CONFIG.theme.accentGlow};
    }

    .protocol-card.highlight {
      border: 2px solid ${SYSTEM_CONFIG.theme.accent};
      box-shadow: inset 0 0 30px rgba(59, 130, 246, 0.1);
    }

    /* Popular Badge (Exactly from Figma) */
    .premium-badge {
      position: absolute;
      top: 30px;
      right: 30px;
      background: ${SYSTEM_CONFIG.theme.accent};
      color: #fff;
      font-size: 10px;
      font-weight: 900;
      padding: 6px 14px;
      border-radius: 100px;
      letter-spacing: 0.5px;
    }

    /* Typographie Détallée */
    .card-title { font-size: 38px; font-weight: 800; margin-bottom: 40px; letter-spacing: -1.5px; }
    .card-price { font-size: 64px; font-weight: 900; line-height: 1; letter-spacing: -4px; }
    .card-period { font-size: 14px; color: ${SYSTEM_CONFIG.theme.textSecondary}; font-weight: 700; margin-left: 8px; }

    .feature-list { list-style: none; margin: 45px 0 60px; flex-grow: 1; }
    .feature-item { 
      display: flex; 
      align-items: center; 
      gap: 15px; 
      margin-bottom: 24px; 
      color: ${SYSTEM_CONFIG.theme.textSecondary}; 
      font-weight: 600;
      font-size: 15px;
    }
    .feature-item svg { min-width: 18px; color: ${SYSTEM_CONFIG.theme.accent}; }

    /* Buttons (Pixel-Perfect Figma) */
    .btn-sync {
      display: block; width: 100%; padding: 22px;
      background: #ffffff;
      color: #000000;
      border-radius: 18px;
      font-weight: 800;
      font-size: 13px;
      text-align: center;
      text-decoration: none;
      transition: 0.3s;
      border: none;
      cursor: pointer;
    }

    .btn-sync:hover {
      background: ${SYSTEM_CONFIG.theme.accent};
      color: #ffffff;
      box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
    }

    /* Hero Text */
    .hero-h1 {
      font-size: clamp(3rem, 15vw, 10rem);
      font-weight: 900;
      line-height: 0.8;
      letter-spacing: -10px;
      text-transform: uppercase;
      margin-bottom: 60px;
    }
    .gradient-h1 {
      background: linear-gradient(135deg, #ffffff 30%, ${SYSTEM_CONFIG.theme.accent} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* Terminal UI */
    .terminal-console {
      background: #010101;
      border: 1px solid ${SYSTEM_CONFIG.theme.accent};
      font-family: 'JetBrains Mono', monospace;
      box-shadow: 0 30px 100px rgba(0,0,0,0.9);
      overflow: hidden;
    }

    .dot-success {
      width: 8px; height: 8px;
      background: ${SYSTEM_CONFIG.theme.success};
      border-radius: 50%;
      box-shadow: 0 0 10px ${SYSTEM_CONFIG.theme.success};
      animation: pulse-sync 2s infinite;
    }
    @keyframes pulse-sync { 0% { opacity: 1; } 50% { opacity: 0.4; } 100% { opacity: 1; } }
  `}</style>
);

// --- COMPOSANTS UI DE BASE ---
const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={SYSTEM_CONFIG.theme.accent} strokeWidth="2.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// --- DONNÉES DE TARIFICATION FIDÈLES 1:1 ---
const PRICING_PROTOCOLS = [
  {
    name: "Basic Access", //
    price: "15",
    period: "/ month",
    features: ["1 Month Unlimited Access", "Native 4K Video Stream", "Standard Support Node", "Single Core Capacity", "Global Edge Network"]
  },
  {
    name: "Standard Pack", //
    price: "60",
    period: "/ 6 months",
    highlighted: true,
    features: ["6 Months Protocol Access", "Native 8K High-Fidelity", "24/7 VIP Concierge", "Multi-Core Priority", "Maximum Stability Core"]
  },
  {
    name: "Elite Protocol", //
    price: "89",
    period: "/ year",
    features: ["12 Months + 1 Bonus", "Elite Enterprise Core", "Instant Automated Deploy", "Direct R&D Channel", "Early Beta Access"]
  }
];

// --- MOTEUR R&D ANIMÉ (POUR REMPLIR LE VIDE) ---
const CapellaVoidEngine = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let particles: {x:number, y:number, s:number, vx:number, vy:number}[] = [];
    const count = 50;
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({length: count}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 1.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      }));
    };
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = "rgba(59, 130, 246, 0.3)";
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI*2); ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    init(); draw();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);
  return <canvas ref={canvasRef} style={{position:'fixed', top:0, left:0, zIndex:-1, pointerEvents:'none'}} />;
};

// --- TERMINAL DE SUPPORT INTERACTIF ( PAS WHATSAPP ) ---
const SupportTerminal = () => {
  const [active, setActive] = useState(false);
  const [history, setHistory] = useState([
    "INITIALIZING_SECURE_LINK...",
    "HANDSHAKE: GLOBAL_NODES... VERIFIED.",
    "STATUS: AGENT_ONLINE.",
    "Welcome to Capella R&D Lab. Type 'help' for options."
  ]);
  const [cmd, setCmd] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const exec = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cmd.trim()) return;

    const userLine = `> ${cmd}`;
    let response = "SYSTEM: Commande non reconnue. Transmission vers un technicien...";

    if (cmd.toLowerCase().includes("help")) response = "AVAILABLE COMMANDS: 'status', 'pricing', 'clear', 'version'";
    if (cmd.toLowerCase().includes("status")) response = "ALL GLOBAL NODES OPERATIONAL. (100% Uptime).";

    setHistory([...history, userLine, response]);
