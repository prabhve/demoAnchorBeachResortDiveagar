import React from 'react';
import { 
  Anchor, 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ArrowUp
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a1826] text-stone-300 pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-stone-800">
          {/* Brand Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
                <Anchor className="w-4 h-4" />
              </div>
              <span className="font-serif tracking-[0.18em] text-white text-base font-bold uppercase">
                Anchor Beach Resort
              </span>
            </div>

            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              An unhurried coastal retreat 200m from the Arabian Sea in Karle, Diveagar. Boutique air-conditioned suites, a private swimming pool, and warm Konkani hospitality under host Rahul Parkhe.
            </p>

            <div className="pt-2 text-xs text-stone-400 font-light">
              <p>Check-in: 12:00 PM • Check-out: 10:00 AM</p>
              <p className="mt-1">Manager & Host: Rahul Parkhe</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
              The Resort
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-light">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-amber-300 transition">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-amber-300 transition">
                  The Sanctuary
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rooms')} className="hover:text-amber-300 transition">
                  Suites & Tariffs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('experiences')} className="hover:text-amber-300 transition">
                  Dining, Pool & Beach
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-amber-300 transition">
                  Visual Journal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('attractions')} className="hover:text-amber-300 transition">
                  Diveagar Excursions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-amber-300 transition">
                  Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-400">
              Reservations Desk
            </h4>
            <div className="space-y-2 text-xs text-stone-300 font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition">
                  {RESORT_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <a href="https://wa.me/917773999979" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition">
                  +91 7773 999 979 (WhatsApp)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href={`mailto:${RESORT_INFO.email}`} className="hover:text-white transition">
                  {RESORT_INFO.email}
                </a>
              </p>
              <p className="flex items-start gap-2 pt-1 text-stone-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Gat No. 213-A, Karle, Near Bharadkhol Bridge, Diveagar - 402404</span>
              </p>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-semibold uppercase tracking-wider transition"
              >
                Reserve Your Stay
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-light gap-4">
          <p>© {new Date().getFullYear()} Anchor Beach Resort, Diveagar. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-300 transition"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
