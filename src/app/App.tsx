import React from 'react';

const PRICING_PLANS = [
  {
    title: "Basic Access",
    price: "15",
    period: "/month",
    description: "Perfect for getting started",
    features: ["1 Month Access", "4K Quality", "Standard Support", "5,000 Channels"],
    isPopular: false
  },
  {
    title: "Standard Pack",
    price: "60",
    period: "/6 months",
    description: "High-fidelity protocol",
    features: ["6 Months Access", "Priority Bandwidth", "24/7 Support", "10,000 Channels"],
    isPopular: false
  },
  {
    title: "Elite Protocol",
    price: "89",
    period: "/year",
    description: "Most popular choice",
    features: ["12 Months + 1 Free", "Maximum Stability", "Instant Activation", "15,000 Channels"],
    isPopular: true
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white p-10 font-sans selection:bg-blue-500/30">
      <div className="text-center mb-20 pt-10">
        <h2 className="text-6xl font-black mb-4 uppercase tracking-tighter italic">
          Choose Your <span className="text-blue-600">Protocol</span>
        </h2>
        <p className="text-zinc-500 font-medium uppercase tracking-widest text-[10px]">
          Optimized tiers for global digital media infrastructure.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan, index) => (
          <div 
            key={index} 
            className={`relative flex flex-col p-10 rounded-[2.5rem] border transition-all duration-500 ${
              plan.isPopular 
              ? 'border-blue-600 bg-zinc-900/40 shadow-[0_0_40px_rgba(37,99,235,0.2)] scale-105 z-10' 
              : 'border-zinc-800 bg-zinc-950 hover:border-zinc-700'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg whitespace-nowrap">
                Most Popular
              </div>
            )}

            <div className="mb-10 text-center">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">{plan.title}</h3>
              <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest leading-relaxed">
                {plan.description}
              </p>
            </div>

            <div className="mb-10 text-center">
              <div className="flex justify-center items-baseline gap-2">
                <span className="text-6xl font-black text-white">${plan.price}</span>
                <span className="text-zinc-400 font-bold text-sm uppercase">CAD</span>
              </div>
              <div className="text-zinc-500 text-sm mt-1 font-bold">{plan.period}</div>
            </div>

            <ul className="space-y-5 mb-12 flex-grow">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-300 font-semibold text-sm">
                  <div className="w-5 h-5 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-600/20 flex-shrink-0">
                    <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
              plan.isPopular 
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl' 
              : 'bg-white text-black hover:bg-zinc-200 shadow-lg'
            }`}>
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
