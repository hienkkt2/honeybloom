/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceMenu } from './components/ServiceMenu';
import { Gallery } from './components/Gallery';
import { FAQSection } from './components/FAQSection';
import { Philosophy } from './components/Philosophy';
import { Reviews } from './components/Reviews';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { AdminBookingPortal } from './components/AdminBookingPortal';
import { BookingRecord } from './types';

const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'REV-918234',
    clientName: 'Sophie Turner',
    clientEmail: 'sophie.t@example.com',
    clientPhone: '+44 7712 984532',
    serviceNames: ['Acrylic Infill with Gel Colour'],
    therapistName: 'Nail Specialist',
    date: '2026-08-14',
    timeSlot: '11:00 AM',
    teaPreference: 'Complimentary Herbal Tea',
    hairType: 'Natural Nails',
    notes: 'Short nails, requesting gentle reshaping.',
    totalGBP: 35,
    status: 'Confirmed',
    createdAt: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
  {
    id: 'REV-742910',
    clientName: 'Chloe Bennett',
    clientEmail: 'chloe.bennett@example.com',
    clientPhone: '+44 7890 123456',
    serviceNames: ['Full Set Ombré'],
    therapistName: 'Senior Nail Artist',
    date: '2026-08-15',
    timeSlot: '02:00 PM',
    teaPreference: 'Complimentary Herbal Tea',
    hairType: 'Hands',
    notes: 'Celebrating anniversary, requesting soft french ombré.',
    totalGBP: 40,
    status: 'Confirmed',
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingServiceId, setSelectedBookingServiceId] = useState<string | undefined>(undefined);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Bookings Store (Persisted in localStorage)
  const [bookings, setBookings] = useState<BookingRecord[]>(() => {
    try {
      const saved = localStorage.getItem('reverie_bookings_db');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_BOOKINGS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('reverie_bookings_db', JSON.stringify(bookings));
    } catch {
      // storage error
    }
  }, [bookings]);

  const handleAddBooking = (newBooking: BookingRecord) => {
    setBookings((prev) => [newBooking, ...prev]);
  };

  const handleUpdateBookingStatus = (bookingId: string, newStatus: BookingRecord['status']) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status: newStatus } : b))
    );
  };

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedBookingServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBookingServiceId(undefined);
  };

  const handleNavigateTo = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D2E1E] font-sans antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* Sticky Header Navbar */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenCart={() => handleOpenBooking()}
        onOpenAdminPortal={() => setIsAdminOpen(true)}
        bookingCount={bookings.length}
        cartCount={0}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onNavigateTo={handleNavigateTo}
        />

        {/* Service Menu & Price List (Strictly matching the 2 image price sheets) */}
        <ServiceMenu onOpenBooking={handleOpenBooking} />

        {/* Nail Artistry Lookbook Gallery */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Our Story & Philosophy */}
        <Philosophy onOpenBooking={() => handleOpenBooking()} />

        {/* Client Reviews */}
        <Reviews />

        {/* Location, Interactive Google Maps & Contact */}
        <LocationContact />
      </main>

      {/* Footer */}
      <Footer
        onNavigateTo={handleNavigateTo}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Online Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedBookingServiceId}
        onAddBooking={handleAddBooking}
      />

      {/* Salon Manager Booking Portal */}
      <AdminBookingPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        bookings={bookings}
        onUpdateStatus={handleUpdateBookingStatus}
      />
    </div>
  );
}
