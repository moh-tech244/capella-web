import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter Protocol",
      price: "15",
      period: "/month",
      features: ["1 Month Unlimited Access", "Native 4K Video Stream", "Standard Support Node", "Single Core Capacity", "Global Edge Network"],
      highlighted: false
    },
    {
      name: "Standard Pack",
      price: "60",
      period: "/6 months",
      features: ["6 Months Protocol Access", "Native 8K High-Fidelity", "24/7 VIP Concierge", "Multi-Core Priority", "Maximum Stability Core"],
      highlighted: false
    },
    {
      name: "Elite Laboratory",
      price: "89",
      period: "/year",
      badge: "MOST POPULAR",
      features: ["12 Months + 1 Bonus", "Elite Enterprise Core", "Instant Automated Deploy", "Direct R&D Channel", "Early Beta Access"],
      highlighted: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch p-6 bg-black">
      {plans.map((plan, index) => (
        <div 
          key={index}
          className={`relative p-8 rounded-2xl border transition-all duration-300 ${
            plan.highlighted 
            ? 'border-blue-500 bg-blue-500/5 shadow-[0_0_40px_-15px_rgba(59,130,246,0.5)] scale-105 z-10' 
            : 'border-zinc-800 bg-zinc-900/50'
          } flex flex-col`}
        >
          {plan.badge && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-[10px] font-bold px-4 py-1 rounded-full whitespace-nowrap">
              {plan.badge}
            </span>
          )}
          
          <h3 className="text-xl font-bold text-white mb-6">{plan.name}</h3>
          
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl font-bold text-white">${plan.price}</span>
            <span className="text-zinc-500 text-sm font-medium uppercase tracking-tighter">
              CAD {plan.period}
            </span>
          </div>

          <ul className="space-y-4 mb-10 flex-grow">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${
            plan.highlighted 
              ? 'bg-blue-600 hover:bg-blue-500 text-white' 
              : 'bg-white hover:bg-zinc-200 text-black'
          }`}>
            ACTIVATE PROTOCOL →
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
