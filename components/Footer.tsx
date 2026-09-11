'use client';

import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/config';
import { COMPANY_INFO } from '@/lib/data/company';

export default function Footer() {
  return (
    <footer className="bg-hw-charcoal text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">HOUSEWARE</h3>
            <p className="text-sm text-gray-400 mb-6">
              Bespoke cabinetry and interior solutions designed for your space.
            </p>
            <div className="space-y-2">
              <a
                href={getWhatsAppLink('Hello Houseware')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-hw-warm transition-colors"
              >
                <FaWhatsapp size={16} />
                WhatsApp
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-sm hover:text-hw-warm transition-colors"
              >
                <FaPhone size={16} />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-sm hover:text-hw-warm transition-colors"
              >
                <FaEnvelope size={16} />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-hw-warm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/hardware"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/kitchens"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Kitchens
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wardrobes"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Wardrobes
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tv-cabinets"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  TV Cabinets
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bespoke"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  Bespoke Cabinetry
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              {COMPANY_INFO.social?.instagram && (
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  <FaInstagram size={20} />
                </a>
              )}
              {COMPANY_INFO.social?.facebook && (
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-hw-warm transition-colors"
                >
                  <FaFacebook size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Houseware Tanzania. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
