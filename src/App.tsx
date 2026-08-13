/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { HeadSpaGuide } from './components/HeadSpaGuide';
import { ServiceMenu } from './components/ServiceMenu';
import { BookingModal } from './components/BookingModal';
import { Gallery } from './components/Gallery';
import { GiftCards } from './components/GiftCards';
import { Shop } from './components/Shop';
import { Reviews } from './components/Reviews';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { CartItem, Product } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingServiceId, setSelectedBookingServiceId] = useState<string | undefined>(undefined);

  // Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3D2E1E] font-sans antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* Sticky Header Navbar */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
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

        {/* Our Story & Philosophy */}
        <Philosophy onOpenBooking={() => handleOpenBooking()} />

        {/* 7-Step Japanese Head Spa Ritual Guide */}
        <HeadSpaGuide onOpenBooking={handleOpenBooking} />

        {/* Service Menu & Price List */}
        <ServiceMenu onOpenBooking={handleOpenBooking} />

        {/* Nail Artistry & Sanctuary Lookbook Gallery */}
        <Gallery onOpenBooking={handleOpenBooking} />

        {/* Luxury Gift Cards */}
        <GiftCards />

        {/* Take-Home Botanical Shop */}
        <Shop
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateCartQuantity}
          onRemoveFromCart={handleRemoveFromCart}
          isCartOpen={isCartOpen}
          onCloseCart={() => setIsCartOpen(false)}
        />

        {/* Client Reviews */}
        <Reviews />

        {/* Location, Interactive Map & FAQs */}
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
      />
    </div>
  );
}
