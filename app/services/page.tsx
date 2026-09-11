import { SERVICES } from '@/lib/data/company';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Services | Houseware Tanzania',
  description: 'Custom kitchens, wardrobes, TV cabinets and bespoke cabinetry solutions.',
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection title="Our Services" subtitle="Premium bespoke cabinetry solutions" height="medium" />

      <div className="bg-hw-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative bg-hw-stone aspect-square overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-4xl font-serif font-bold text-hw-charcoal mb-4">
                    {service.name}
                  </h2>
                  <p className="text-lg text-hw-taupe mb-6 leading-relaxed">
                    {service.longDescription}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Custom design tailored to your space',
                      'Premium materials and hardware',
                      'Professional installation included',
                      'Lifetime craftsmanship guarantee',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-hw-warm text-lg mt-1">✓</span>
                        <span className="text-hw-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book-consultation"
                    className="px-6 py-3 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors inline-block"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
