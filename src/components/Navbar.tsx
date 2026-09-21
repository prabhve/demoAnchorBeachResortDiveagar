import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Anchor, 
  Phone, 
  Menu, 
  X, 
  MessageCircle,
  Calendar,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'The Resort' },
    { id: 'rooms', label: 'Suites' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'attractions', label: 'Diveagar' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Sleek Minimalist Top Contact Strip */}
      <div 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'h-0 opacity-0 overflow-hidden py-0' 
            : 'bg-[#0a1826]/95 text-stone-300 text-xs py-2 px-3 sm:px-8 border-b border-white/10 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px] sm:text-[12px] tracking-wide">
          <div className="flex items-center gap-2 sm:gap-4 text-stone-300 truncate">
            <span className="inline-flex items-center gap-1 text-amber-300 font-medium">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
              <span>200m from Beach</span>
            </span>
            <span className="text-stone-600 hidden xs:inline">•</span>
            <span className="text-stone-300 font-light truncate hidden xs:inline">
              Karle, Diveagar
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 shrink-0 ml-2">
            <a 
              href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 text-stone-200 hover:text-amber-300 transition py-0.5"
            >
              <Phone className="w-3 h-3 text-amber-400 shrink-0" />
              <span className="text-[11px] sm:text-xs">{RESORT_INFO.phoneDisplay}</span>
            </a>
            <a 
              href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Host</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-500 px-3 sm:px-8 ${
          isScrolled 
            ? 'bg-[#0a1826]/95 backdrop-blur-md py-3 sm:py-3.5 shadow-lg border-b border-stone-800/40' 
            : 'bg-gradient-to-b from-[#0a1826]/90 via-[#0a1826]/50 to-transparent py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Resort Brand Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm transition group-hover:border-amber-400 shrink-0">
              <Anchor className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </div>
            <div>
              <span className="block font-serif text-base sm:text-xl font-bold tracking-[0.16em] sm:tracking-[0.18em] text-white uppercase leading-tight group-hover:text-amber-300 transition">
                Anchor
              </span>
              <span className="block text-[8.5px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] text-amber-200/80 uppercase font-light">
                Beach Resort • Diveagar
              </span>
            </div>
          </button>

          {/* Desktop Links (Clean & Airy) */}
          <div className="hidden lg:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-stone-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-all duration-200 hover:text-amber-300 cursor-pointer ${
                    isActive ? 'text-amber-300 font-semibold' : 'text-stone-200/90'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-amber-300 to-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Actions: Fast Book & Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-white rounded-xl bg-white/5 border border-white/10 transition focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-down Drawer with Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0a1826]/98 backdrop-blur-2xl border-b border-stone-800 shadow-2xl overflow-hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto"
          >
            <div className="px-5 py-6 space-y-5">
              {/* Navigation Links with generous touch height */}
              <div className="flex flex-col divide-y divide-white/5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`flex items-center justify-between py-3.5 text-sm tracking-wider uppercase font-medium transition cursor-pointer ${
                        isActive ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-600'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 border-t border-stone-800/80 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 text-stone-950 rounded-xl font-bold text-xs uppercase tracking-wider text-center shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Room (From ₹2,200/nt)</span>
                </button>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="py-2.5 px-3 bg-stone-800/90 text-stone-200 rounded-xl text-xs font-medium text-center border border-stone-700 flex items-center justify-center gap-1.5 active:bg-stone-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Direct Call</span>
                  </a>
                  <a
                    href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20am%20inquiring%20about%20stay%20availability"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-emerald-700 text-white rounded-xl text-xs font-medium text-center flex items-center justify-center gap-1.5 active:bg-emerald-600"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

