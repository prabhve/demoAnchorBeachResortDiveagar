import React from 'react';
import { 
  Waves, 
  Palmtree, 
  UtensilsCrossed, 
  Zap, 
  Wifi, 
  Car, 
  Smile, 
  Compass, 
  ShieldCheck, 
  Flame, 
  HeartPulse, 
  BellRing 
} from 'lucide-react';
import { AMENITIES } from '../data/resortData';

// Map icon string to Lucide icon component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves,
  Palmtree,
  UtensilsCrossed,
  Zap,
  Wifi,
  Car,
  Smile,
  Compass,
  ShieldCheck,
  Flame,
  HeartPulse,
  BellRing,
};

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-stone-50 text-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest mb-3">
            FACILITIES & EXPERIENCES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Designed for Effortless Relaxation
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            From our sparkling outdoor swimming pool to dependable 24/7 power backup and beach watersports assistance, we have anticipated every need of your coastal getaway.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AMENITIES.map((amenity) => {
            const IconComponent = iconMap[amenity.icon] || Waves;
            return (
              <div
                key={amenity.id}
                className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-stone-950 transition duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {amenity.tag && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                        {amenity.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-stone-900 group-hover:text-amber-700 transition">
                    {amenity.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pool Feature Highlight Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0b2545] to-[#134e5e] text-white rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="inline-block text-amber-400 font-semibold text-xs uppercase tracking-widest mb-2">
                Resort Spotlight
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Sparkling Swimming Pool with Kids Zone
              </h3>
              <p className="mt-3 text-stone-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                Beat the coastal sun and dip into our filtered pool surrounded by towering coconut palms. We maintain pristine hygiene with daily filtration and safety checks, along with comfortable reclining sun beds.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-amber-300 font-medium">
                <span>✓ Pool Timings: 7:00 AM – 8:00 PM</span>
                <span>✓ Shallow safe depth for children</span>
                <span>✓ Complimentary pool towels provided</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center w-full max-w-xs">
                <span className="block text-2xl font-serif font-bold text-amber-400">100% Family Safe</span>
                <span className="block text-xs text-stone-200 mt-1">
                  Ideal for couples, family holidays, and weekend getaways from Pune & Mumbai.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
