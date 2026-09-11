'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-hw-cream border-b border-hw-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-serif font-bold text-hw-charcoal">
              HOUSEWARE
            </span>
            <p className="text-xs text-hw-taupe tracking-widest">TANZANIA</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-sm text-hw-charcoal hover:text-hw-warm transition-colors"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="text-sm text-hw-charcoal hover:text-hw-warm transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/hardware"
              className="text-sm text-hw-charcoal hover:text-hw-warm transition-colors"
            >
              Hardware
            </Link>
            <Link
              href="/our-story"
              className="text-sm text-hw-charcoal hover:text-hw-warm transition-colors"
            >
              Our Story
            </Link>
            <Link
              href="/locations"
              className="text-sm text-hw-charcoal hover:text-hw-warm transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/book-consultation"
              className="ml-4 px-6 py-3 bg-hw-charcoal text-white text-sm hover:bg-hw-sage transition-colors"
            >
              Book a Site Visit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-hw-charcoal hover:text-hw-warm"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-hw-stone">
            <Link
              href="/services"
              className="block py-2 text-sm text-hw-charcoal hover:text-hw-warm"
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block py-2 text-sm text-hw-charcoal hover:text-hw-warm"
            >
              Projects
            </Link>
            <Link
              href="/hardware"
              className="block py-2 text-sm text-hw-charcoal hover:text-hw-warm"
            >
              Hardware
            </Link>
            <Link
              href="/our-story"
              className="block py-2 text-sm text-hw-charcoal hover:text-hw-warm"
            >
              Our Story
            </Link>
            <Link
              href="/locations"
              className="block py-2 text-sm text-hw-charcoal hover:text-hw-warm"
            >
              Contact
            </Link>
            <Link
              href="/book-consultation"
              className="block mt-4 px-6 py-3 bg-hw-charcoal text-white text-sm text-center"
            >
              Book a Site Visit
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
