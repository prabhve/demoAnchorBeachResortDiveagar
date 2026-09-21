import React, { useState } from 'react';
import { 
  Waves, 
  Compass, 
  Palmtree, 
  Sparkles, 
  Check, 
  Clock, 
  MessageCircle, 
  Phone,
  ShieldCheck,
  Award
} from 'lucide-react';
import { ACTIVITIES, RESORT_INFO } from '../data/resortData';

export const ActivitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'water-sports' | 'beach' | 'resort'>('all');

  const filteredActivities = activeTab === 'all'
    ? ACTIVITIES
    : ACTIVITIES.filter(a => a.category === activeTab);

  return (
    <section id="activities" className="py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3 border border-amber-500/30">
            <Compass className="w-3.5 h-3.5" />
            ACTIVITIES & WATER SPORTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Thrill, Adventure & Beachside Serenity
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            From adrenaline-pumping parasailing and jet skiing across Diveagar's waves to our swimming pool, cozy evening bonfires, and children’s playground, every day brings unforgettable memories.
          </p>

          {/* Category Switcher Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Activities' },
              { id: 'water-sports', label: 'Water Sports' },
              { id: 'beach', label: 'Beach Adventures' },
              { id: 'resort', label: 'Resort & Lawn Leisure' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 shadow-lg'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700/80 hover:text-white border border-stone-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActivities.map((act) => (
            <div
              key={act.id}
              className="bg-stone-800/90 rounded-2xl overflow-hidden border border-stone-700/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col group shadow-lg hover:shadow-2xl"
            >
              {/* Image Banner */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-[#081a2e]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-300 border border-white/10 uppercase tracking-wider">
                  {act.category.replace('-', ' ')}
                </div>

                {act.timing && (
                  <div className="absolute bottom-3 left-3 right-3 bg-stone-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] text-stone-300 flex items-center gap-1.5 border border-white/10">
                    <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{act.timing}</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition">
                    {act.title}
                  </h3>

                  <p className="mt-2 text-xs text-stone-300 leading-relaxed">
                    {act.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-3.5 space-y-1.5 pt-3 border-t border-stone-700/60">
                    {act.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-stone-400">
                        <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center justify-between text-[11px] text-amber-400/90 font-medium">
                  <span>{act.pricingNote || 'Guest Service'}</span>
                  <a
                    href={`https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20want%20information%20on%20${encodeURIComponent(act.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-300 hover:text-white flex items-center gap-1 hover:underline"
                  >
                    <span>Inquire</span>
                    <MessageCircle className="w-3 h-3 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Water Sports Concierge Desk Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0b2545] via-[#103b6b] to-[#081a2e] rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-400/30">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>DIRECT RESORT CONCIERGE ASSISTANCE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Planning Water Sports for Your Family or Group?
              </h3>
              <p className="mt-3 text-stone-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Diveagar Beach water sports operators are located just 200 meters from our gate. Our host Rahul Parkhe and team gladly arrange verified operators, best group combo tariffs, lifejackets, and flexible slot timings without agent markups.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-amber-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Certified Safety Equipment
                </span>
                <span className="flex items-center gap-1.5">
                  <Waves className="w-3.5 h-3.5 text-sky-400" /> 2-Minute Walk to Activity Point
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Combo Ride Packages Available
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20want%20to%20know%20about%20Water%20Sports%20packages%20in%20Diveagar`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl text-center shadow-lg transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp for Activity Packages</span>
              </a>

              <a
                href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-3 px-5 bg-stone-800 hover:bg-stone-700 text-white font-medium text-sm rounded-xl text-center border border-stone-600 transition flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Host: {RESORT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
