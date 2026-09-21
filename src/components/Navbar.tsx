import React, { useState, useEffect } from 'react';
import { 
  Anchor, 
  Phone, 
  Menu, 
  X, 
  MessageCircle,
  Calendar
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            : 'bg-[#0a1826]/90 text-stone-300 text-xs py-2 px-4 sm:px-8 border-b border-white/10 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[12px] tracking-wide">
          <div className="flex items-center gap-4 text-stone-300">
            <span className="hidden sm:inline-block text-amber-300/90 font-light">
              200m from Diveagar Beach Shore
            </span>
            <span className="hidden md:inline-block text-stone-600">•</span>
            <span className="text-stone-300 font-light">
              Karle, Diveagar, Maharashtra
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto">
            <a 
              href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-amber-300 transition"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{RESORT_INFO.phoneDisplay}</span>
            </a>
            <a 
              href="https://wa.me/917773999979?text=Hello%20Anchor%20Beach%20Resort,%20I%20would%20like%20to%20inquire%20about%20a%20stay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition"
            >
              <MessageCircle className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp Host</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav 
        className={`w-full transition-all duration-500 px-4 sm:px-8 ${
          isScrolled 
            ? 'bg-[#0a1826]/95 backdrop-blur-md py-3.5 shadow-lg border-b border-stone-800/40' 
            : 'bg-gradient-to-b from-[#0a1826]/80 via-[#0a1826]/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Resort Brand Identity */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/30 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm transition group-hover:border-amber-400">
              <Anchor className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-white uppercase leading-tight group-hover:text-amber-300 transition">
                Anchor
              </span>
              <span className="block text-[9px] sm:text-[10px] tracking-[0.25em] text-amber-200/80 uppercase font-light">
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
                  className={`relative py-1 transition-all duration-200 hover:text-amber-300 ${
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
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-semibold text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden px-3.5 py-1.5 rounded-full bg-amber-500 text-stone-950 text-xs font-semibold uppercase tracking-wider"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-200 hover:text-white rounded-lg transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1826]/98 backdrop-blur-xl border-b border-stone-800 px-6 py-6 space-y-4 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 text-sm tracking-wider uppercase font-medium transition ${
                  activeSection === link.id ? 'text-amber-400 font-bold' : 'text-stone-300'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-amber-500 text-stone-950 rounded-xl font-bold text-xs uppercase tracking-wider text-center"
            >
              Reserve a Room
            </button>
            <a
              href={`tel:${RESORT_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="block w-full py-2.5 bg-stone-800 text-stone-200 rounded-xl text-xs font-medium text-center border border-stone-700"
            >
              Call Us: {RESORT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
