import React from 'react';

const PRICING_DATA = [
  {
    title: "Basic Access",
    price: "15",
    currency: "CAD",
    period: "/month",
    description: "Perfect for getting started",
    features: ["1 Month Access", "4K Quality", "Standard Support", "5,000 Channels"],
    buttonText: "Get Started",
    highlight: false
  },
  {
    title: "Standard Pack",
    price: "60",
    currency: "CAD",
    period: "/6 months",
    description: "Most popular choice",
    features: ["6 Months Access", "Priority Bandwidth", "24/7 Support", "10,000 Channels"],
    buttonText: "Get Started",
    highlight: true,
    badge: "Most Popular"
  },
  {
    title: "Elite Protocol",
    price: "89",
    currency: "CAD",
    period: "/year",
    description: "Maximum performance",
    features: ["12 Months + 1 Free", "Maximum Stability", "Instant Activation", "15,000 Channels"],
    buttonText: "Get Started",
    highlight: false
  }
];

const PricingCard = ({ plan }) => (
  <div className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
    plan.highlight 
    ? 'border-blue-600 bg-zinc-900/40 shadow-[0_0_30px_rgba(37,99,235,0.2)] scale-105 z-10' 
    : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'
  }`}>
    {plan.highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
        {plan.badge}
      </div>
    )}

    <div className="mb-8">
      <h3 className="text-xl font-bold text-white mb-1">{plan.title}</h3>
      <p className="text-zinc-500 text-xs">{plan.description}</p>
    </div>

    <div className="mb-8">
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-black text-white">${plan.price}</span>
        <span className="text-zinc-400 text-sm font-medium">{plan.currency}</span>
      </div>
      <div className="text-zinc-500 text-xs mt-1">{plan.period}</div>
    </div>

    <ul className="space-y-4 mb-10 flex-grow">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          {feature}
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group ${
      plan.highlight 
      ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20' 
      : 'bg-zinc-800 text-white hover:bg-zinc-700'
    }`}>
      {plan.buttonText}
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  </div>
);

export default function CapellaLabs() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
          Choose Your <span className="text-blue-600">Protocol</span>
        </h2>
        <p className="text-zinc-500 text-lg">Select the plan that fits your needs</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        {PRICING_DATA.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
