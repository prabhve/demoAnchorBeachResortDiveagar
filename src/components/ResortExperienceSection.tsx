import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Utensils, 
  Waves, 
  Compass, 
  ShieldCheck, 
  Clock, 
  Check, 
  MessageCircle, 
  Sparkles,
  Wifi,
  Car,
  Zap,
  Coffee,
  Heart
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export const ResortExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dining' | 'pool' | 'activities' | 'comfort'>('dining');

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#FAF7F2] text-stone-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-amber-700 uppercase">
            Curated Living
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-stone-900 tracking-tight mt-2">
            The Resort Experience
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base font-light leading-relaxed">
            From the aroma of heirloom Konkani spice blends to refreshing dips in the pool and golden sunsets on Diveagar Beach.
          </p>

          {/* Elegant Experience Switcher Tabs (Fluid Horizontal Scroll on Mobile) */}
          <div className="mt-6 sm:mt-8 w-full max-w-full overflow-x-auto no-scrollbar pb-2">
            <div className="inline-flex p-1 bg-stone-200/70 rounded-full min-w-max mx-auto border border-stone-300/40 shadow-inner">
              {[
                { id: 'dining', label: 'Coastal Dining', icon: Utensils },
                { id: 'pool', label: 'Pool & Lawns', icon: Waves },
                { id: 'activities', label: 'Beach & Sports', icon: Compass },
                { id: 'comfort', label: 'Resort Comforts', icon: ShieldCheck },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer select-none ${
                      isActive
                        ? 'bg-white text-stone-900 shadow-sm font-bold'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-600' : 'text-stone-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          {/* Tab 1: Coastal Dining */}
          {activeTab === 'dining' && (
            <motion.div 
              key="dining"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  Authentic Malvani & Konkan Kitchen
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  Fresh Catch from the Arabian Sea, Spiced by Hand
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  Experience authentic coastal culinary heritage. Our kitchen sources the morning's freshest catch from nearby fishing harbors and prepares traditional Malvani masala thalis with fresh grated coconut and kokum.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/70 flex justify-between items-center hover:shadow-xs transition-shadow">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Authentic Surmai & Pomfret Tawa Fry</h4>
                      <p className="text-[11px] text-stone-500 font-light">Fresh sea-fish marinated in local spices, crisp fried in semolina</p>
                    </div>
                    <span className="text-xs font-semibold text-amber-700">Signature</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/70 flex justify-between items-center hover:shadow-xs transition-shadow">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Traditional Konkani Vegetarian Thali</h4>
                      <p className="text-[11px] text-stone-500 font-light">Pithla Bhakri with Thecha, Bharli Vangi, Kaju Usal & piping Solkadhi</p>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700">Vegetarian</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/70 flex justify-between items-center hover:shadow-xs transition-shadow">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Sweet Coconut Ukadiche Modak</h4>
                      <p className="text-[11px] text-stone-500 font-light">Steamed rice dumplings with fresh coconut & jaggery, drizzled with pure ghee</p>
                    </div>
                    <span className="text-xs font-semibold text-amber-700">Dessert</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-stone-500 font-light flex items-center gap-4">
                  <span>Breakfast: 8:00 – 10:30 AM</span>
                  <span>•</span>
                  <span>Lunch: 1:00 – 3:30 PM</span>
                  <span>•</span>
                  <span>Dinner: 8:00 – 10:45 PM</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                    alt="Authentic Konkani Seafood at Anchor Beach Resort"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Pool & Lawns */}
          {activeTab === 'pool' && (
            <motion.div 
              key="pool"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold tracking-widest text-sky-700 uppercase">
                  Refreshing Open Air Leisure
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  Swim Beneath the Palms, Stargaze by the Bonfire
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  Our outdoor swimming pool features filtered, crystal-clear water with dedicated shallow wading depths for younger children. Relax on reclining deck chairs with cool coconut water, or enjoy evening bonfires arranged on the central garden lawn.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Clean Filtered Pool</h4>
                    <p className="text-[11px] text-stone-500 font-light mt-0.5">Daily filtration, open 7:00 AM – 8:00 PM for all guests</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Children's Splash Zone</h4>
                    <p className="text-[11px] text-stone-500 font-light mt-0.5">Safe 2-ft shallow pool section for young kids</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Lush Garden Lawns</h4>
                    <p className="text-[11px] text-stone-500 font-light mt-0.5">Grass carpet for badminton, walks, and leisure</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Evening Bonfire</h4>
                    <p className="text-[11px] text-stone-500 font-light mt-0.5">Cozy wood fire on request under coastal starry skies</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1000&q=80"
                    alt="Swimming Pool at Anchor Beach Resort Diveagar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Beach & Sports */}
          {activeTab === 'activities' && (
            <motion.div 
              key="activities"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  Arabian Sea Adventures
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  Parasailing, Jet Skiing & Coastal Strolls
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  Diveagar Beach is celebrated for thrilling water sports alongside serene golden coastlines. Host Rahul Parkhe and our front desk happily assist with verified beach operators, group combo discounts, and timing slots.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Parasailing</h4>
                    <p className="text-[11px] text-stone-500 font-light">Panoramic aerial views of the coastline</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Jet Ski Rides</h4>
                    <p className="text-[11px] text-stone-500 font-light">Guided wave speed scooters</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Banana & Bumper Rides</h4>
                    <p className="text-[11px] text-stone-500 font-light">Group fun for families & friends</p>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200/70">
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900">Beach Camel & Horse Cart</h4>
                    <p className="text-[11px] text-stone-500 font-light">Peaceful sunset shore rides</p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20want%20to%20know%20about%20Water%20Sports%20packages%20in%20Diveagar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire about Water Sports Packages via WhatsApp →</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80"
                    alt="Water Sports at Diveagar Beach"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 4: Resort Comforts */}
          {activeTab === 'comfort' && (
            <motion.div 
              key="comfort"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold tracking-widest text-stone-600 uppercase">
                  Carefree Coastal Stay
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                  Designed for Uninterrupted Peace of Mind
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
                  Enjoy your holiday without worrying about regional coastal power outages or vehicle safety. We ensure every necessity is quietly handled so you can unwind completely.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/70 hover:shadow-xs transition-shadow">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700 shrink-0">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">24/7 Silent DG Power Backup</h4>
                      <p className="text-[11px] text-stone-500 font-light">Keeps air conditioners, lights, and fans running seamlessly during coastal outages.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/70 hover:shadow-xs transition-shadow">
                    <div className="p-2 rounded-lg bg-sky-50 text-sky-700 shrink-0">
                      <Car className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Gated Car Parking with CCTV</h4>
                      <p className="text-[11px] text-stone-500 font-light">Spacious internal parking premises monitored 24 hours for vehicles arriving from Pune and Mumbai.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/70 hover:shadow-xs transition-shadow">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 shrink-0">
                      <Wifi className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-stone-900">Complimentary High-Speed Wi-Fi</h4>
                      <p className="text-[11px] text-stone-500 font-light">Stay connected for work or sharing holiday photos across all rooms and public lawns.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                    alt="Resort Grounds & Serene Comfort"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
