import { SERVICES, type Service } from '@/lib/data/company';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import { getWhatsAppLink } from '@/lib/config';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  return {
    title: `${service?.name || 'Service'} | Houseware Tanzania`,
    description: service?.longDescription || '',
  };
}

export default function ServiceDetailPage({ params: { slug } }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const whatsappLink = getWhatsAppLink(
    `Hello Houseware, I am interested in your ${service.name} services.`
  );

  return (
    <>
      <HeroSection
        title={service.name}
        subtitle={service.description}
        backgroundImage={service.image}
        height="medium"
      />

      <div className="bg-hw-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-6">
              Designed Specifically For You
            </h2>
            <p className="text-lg text-hw-taupe leading-relaxed mb-8">
              {service.longDescription}
            </p>
          </div>

          {/* Image Gallery */}
          <div className="mb-20">
            <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">
              Project Examples
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.gallery.map((image, idx) => (
                <div key={idx} className="relative bg-hw-stone aspect-square lg:aspect-[4/3]">
                  <Image
                    src={image}
                    alt={`${service.name} example ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Features & Benefits */}
          <div className="bg-white p-8 md:p-12 border border-hw-stone mb-20">
            <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Bespoke Design',
                  description:
                    'Every project is custom-designed around your space, lifestyle, and aesthetic.',
                },
                {
                  title: 'Premium Materials',
                  description:
                    'We source the finest materials and hardware to ensure longevity and beauty.',
                },
                {
                  title: 'Precision Craftsmanship',
                  description:
                    'Our expert team crafts each piece with meticulous attention to detail.',
                },
                {
                  title: 'Professional Installation',
                  description:
                    'Our installation team ensures perfect execution and seamless integration.',
                },
                {
                  title: 'Design Consultation',
                  description:
                    'We work closely with you through every stage of the design process.',
                },
                {
                  title: 'Quality Guarantee',
                  description:
                    'We stand behind our work with a comprehensive craftsmanship warranty.',
                },
              ].map((feature, idx) => (
                <div key={idx}>
                  <h3 className="text-lg font-bold text-hw-charcoal mb-2">{feature.title}</h3>
                  <p className="text-hw-taupe">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-hw-charcoal text-white p-8 md:p-12 text-center mb-20">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can create the perfect {service.name} solution for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="px-8 py-4 bg-hw-warm text-hw-charcoal font-semibold hover:bg-white transition-colors"
              >
                Book a Site Visit
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>

          {/* Process */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">
              Our Process
            </h2>
            <div className="space-y-4">
              {[
                '01 — Consultation: We understand your needs, space, and vision.',
                '02 — Site Visit: Our team visits to measure and assess your space.',
                '03 — Design: We create a custom design tailored to you.',
                '04 — Quotation: Transparent pricing based on your specifications.',
                '05 — Production: Your cabinetry is manufactured to the highest standards.',
                '06 — Installation: Professional installation and finishing by our team.',
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-4 border-b border-hw-stone last:border-b-0">
                  <span className="text-hw-warm font-bold flex-shrink-0">{step.split('—')[0]}</span>
                  <span className="text-hw-charcoal">{step.split('—')[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
