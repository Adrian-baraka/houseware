import HeroSection from '@/components/HeroSection';
import { COMPANY_INFO } from '@/lib/data/company';
import { getWhatsAppLink } from '@/lib/config';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Locations & Contact | Houseware Tanzania',
  description: 'Get in touch with Houseware Tanzania. Find our office locations, contact details, and hours.',
};

export default function LocationsPage() {
  const whatsappLink = getWhatsAppLink('Hello Houseware, I would like to get in touch.');

  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="Contact Houseware for your interior design needs"
        height="medium"
      />

      <div className="bg-hw-cream">
        {/* Contact Info Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
            {/* Phone */}
            <div className="bg-white p-6 text-center border border-hw-stone">
              <div className="inline-block p-3 bg-hw-stone rounded-full mb-4">
                <FaPhone className="text-hw-charcoal" size={24} />
              </div>
              <h3 className="text-lg font-bold text-hw-charcoal mb-2">Phone</h3>
              <p className="text-hw-taupe">{COMPANY_INFO.phone}</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-white p-6 text-center border border-hw-stone">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <FaWhatsapp className="text-green-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-hw-charcoal mb-2">WhatsApp</h3>
              <p className="text-hw-taupe">{COMPANY_INFO.whatsapp}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-green-600 hover:text-green-700 font-semibold"
              >
                Send Message →
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-6 text-center border border-hw-stone">
              <div className="inline-block p-3 bg-hw-stone rounded-full mb-4">
                <FaEnvelope className="text-hw-charcoal" size={24} />
              </div>
              <h3 className="text-lg font-bold text-hw-charcoal mb-2">Email</h3>
              <p className="text-hw-taupe break-all">{COMPANY_INFO.email}</p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 text-center border border-hw-stone">
              <div className="inline-block p-3 bg-hw-stone rounded-full mb-4">
                <FaClock className="text-hw-charcoal" size={24} />
              </div>
              <h3 className="text-lg font-bold text-hw-charcoal mb-2">Hours</h3>
              <p className="text-hw-taupe text-sm">Monday - Saturday</p>
              <p className="text-hw-taupe text-sm">9:00 AM - 6:00 PM</p>
            </div>
          </div>

          {/* Locations */}
          <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-12">Our Locations</h2>
          <div className="space-y-8">
            {COMPANY_INFO.locations.map((location) => (
              <div key={location.id} className="bg-white p-8 border border-hw-stone grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-hw-charcoal mb-2">{location.name}</h3>
                  <p className="text-hw-taupe mb-4">{location.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(
                      location.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hw-warm hover:text-hw-charcoal font-semibold text-sm"
                  >
                    Get Directions →
                  </a>
                </div>

                <div>
                  <h4 className="font-bold text-hw-charcoal mb-4">Contact</h4>
                  <div className="space-y-2">
                    <a
                      href={`tel:${location.phone}`}
                      className="flex items-center gap-2 text-hw-charcoal hover:text-hw-warm transition-colors"
                    >
                      <FaPhone size={16} className="text-hw-taupe" />
                      <span className="text-sm">{location.phone}</span>
                    </a>
                    <a
                      href={getWhatsAppLink(`Hello Houseware ${location.name} location`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-hw-charcoal hover:text-green-600 transition-colors"
                    >
                      <FaWhatsapp size={16} className="text-green-600" />
                      <span className="text-sm">WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-hw-charcoal mb-4">Hours</h4>
                  <p className="text-hw-taupe text-sm">{location.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form CTA */}
        <div className="bg-white border-y border-hw-stone">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-4 text-center">
              Let's Discuss Your Project
            </h2>
            <p className="text-lg text-hw-taupe text-center mb-8">
              Prefer to use a form? We'll get back to you promptly with information about your project.
            </p>
            <div className="text-center">
              <Link
                href="/book-consultation"
                className="inline-block px-8 py-4 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors"
              >
                Book a Site Visit
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary depending on complexity and scope. A simple upgrade might take 2-4 weeks, while a complete kitchen renovation could take 8-12 weeks. We provide detailed timelines during the quotation phase.',
              },
              {
                q: 'What is your payment process?',
                a: 'We typically require a deposit to begin design and production, with the balance due upon completion and installation. Detailed payment terms are discussed during your consultation.',
              },
              {
                q: 'Do you provide installation services?',
                a: 'Yes, professional installation is included as part of our service. Our experienced team ensures your cabinetry is installed perfectly.',
              },
              {
                q: 'Can you work with a specific budget?',
                a: 'Absolutely. We work with a range of budgets and can recommend solutions that maximize value while maintaining quality.',
              },
              {
                q: 'Do you offer warranties?',
                a: 'Yes, we provide a comprehensive warranty on all our work. Details are provided with your quotation.',
              },
              {
                q: 'What areas do you serve?',
                a: 'We primarily serve Dar Es Salaam and surrounding areas. Contact us to discuss your specific location.',
              },
            ].map((faq, idx) => (
              <details key={idx} className="bg-white border border-hw-stone rounded">
                <summary className="p-6 cursor-pointer font-bold text-hw-charcoal hover:bg-gray-50">
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-hw-taupe border-t border-hw-stone">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
