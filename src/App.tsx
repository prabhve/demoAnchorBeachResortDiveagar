import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { ResortExperienceSection } from './components/ResortExperienceSection';
import { GallerySection } from './components/GallerySection';
import { AttractionsSection } from './components/AttractionsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ResortConcierge } from './components/ResortConcierge';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingParams, setBookingParams] = useState<{
    roomId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'rooms', 'experiences', 'gallery', 'attractions', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBooking = (roomId?: string, checkIn?: string, checkOut?: string, guests?: number) => {
    setBookingParams({ roomId, checkIn, checkOut, guests });
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-800 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenBooking={handleOpenBooking}
          onNavigate={handleNavigate}
        />

        {/* About Section */}
        <AboutSection
          onOpenBooking={() => handleOpenBooking()}
          onNavigate={handleNavigate}
        />

        {/* Rooms & Suites Section */}
        <RoomsSection
          onOpenBooking={handleOpenBooking}
        />

        {/* Unified Experiences Section (Dining, Pool, Water Sports, Comforts) */}
        <ResortExperienceSection />

        {/* Photo Gallery Section */}
        <GallerySection />

        {/* Diveagar Attractions Section */}
        <AttractionsSection />

        {/* Guest Reviews & Testimonials Section */}
        <TestimonialsSection />

        {/* Contact Us, Map & FAQ Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={bookingParams.roomId}
        initialCheckIn={bookingParams.checkIn}
        initialCheckOut={bookingParams.checkOut}
        initialGuests={bookingParams.guests}
      />

      {/* Discreet 24/7 Resort Concierge & WhatsApp Widget */}
      <ResortConcierge
        onOpenBooking={handleOpenBooking}
      />

      {/* Sticky Quick-Action Mobile Bottom Bar (Call, WhatsApp, Book Suite) */}
      <MobileBottomBar
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
