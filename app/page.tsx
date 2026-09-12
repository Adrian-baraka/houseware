'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import HardwareProductCard from '@/components/HardwareProductCard';
import { SERVICES, HOW_WE_WORK } from '@/lib/data/company';
import { PROJECTS } from '@/lib/data/projects';
import { HARDWARE_PRODUCTS } from '@/lib/data/hardware';
import { getWhatsAppLink } from '@/lib/config';

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 4);
  const featuredHardware = HARDWARE_PRODUCTS.slice(0, 4);
  const whatsappLink = getWhatsAppLink(
    'Hello Houseware, I would like to book a site visit for a custom project.'
  );

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Spaces made for the way you live."
        subtitle="Houseware creates bespoke cabinetry and interior solutions — custom kitchens, wardrobes, TV cabinets and made-to-measure storage — designed around your space, your needs, and your style."
        backgroundImage="/images/projects/houseware-kitchen-walnut-marble-04.jpg"
      >
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-widest font-semibold text-hw-warm mb-6 animate-fade-in">
            BESPOKE CABINETRY & INTERIORS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/book-consultation"
              className="px-8 py-4 bg-hw-warm text-hw-charcoal font-semibold hover:bg-white transition-colors"
            >
              Book a Site Visit
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold hover:bg-white hover:text-hw-charcoal transition-colors"
            >
              Explore Our Projects
            </Link>
          </div>
        </div>
      </HeroSection>

      {/* Introduction / Brand Statement */}
      <section className="bg-hw-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-hw-charcoal">
              Bespoke cabinetry, thoughtfully designed.
            </h2>
            <p className="text-lg md:text-xl text-hw-taupe leading-relaxed max-w-3xl mx-auto">
              We design and build custom cabinetry around the way you live — not the other way around.
              Every kitchen, wardrobe, media wall and storage solution begins with your space, your
              requirements and your desired finish. The result is cabinetry that fits perfectly,
              functions beautifully, and ages gracefully.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionTitle
            title="Our Services"
            subtitle="Four cabinetry disciplines, each tailored to your space"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-hw-stone aspect-[4/5] mb-5">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-hw-charcoal mb-2 group-hover:text-hw-warm transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-hw-taupe mb-4 line-clamp-2">{service.description}</p>
                <span className="text-sm font-medium text-hw-warm group-hover:text-hw-charcoal transition-colors inline-flex items-center gap-1">
                  View Details
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-hw-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionTitle title="Selected Projects" subtitle="A curation of spaces we've designed and brought to life" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : index === 1 ? 'lg:col-span-2' : ''}>
                <Link href={`/projects/${project.slug}`} className="group cursor-pointer block">
                  <div className={`relative overflow-hidden bg-hw-stone ${index === 0 ? 'aspect-[4/3]' : 'aspect-square'} mb-4`}>
                    <Image
                      src={project.featuredImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes={index === 0
                        ? '(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw'
                        : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw'}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-serif font-bold text-hw-charcoal group-hover:text-hw-warm transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-hw-taupe uppercase tracking-wider">
                      {project.location} · {project.type.replace('-', ' ').toUpperCase()}
                    </p>
                    <p className="text-sm text-hw-charcoal line-clamp-2 hidden md:block">{project.shortDescription}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-8 py-4 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Bespoke Message / Editorial Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative bg-hw-stone aspect-[3/4] overflow-hidden">
              <Image
                src="/images/services/houseware-cabinetry-office-black-wide-03.jpg"
                alt="Bespoke cabinetry office interior by Houseware"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-hw-charcoal leading-tight">
                Designed around your space.
              </h2>
              <p className="text-lg text-hw-taupe leading-relaxed">
                Off-the-shelf furniture forces your space to adapt to it. Bespoke cabinetry works the
                other way — we design around your room's proportions, your storage needs, your
                appliances, your lighting, and the way you move through the space.
              </p>
              <p className="text-lg text-hw-taupe leading-relaxed">
                From a kitchen that fits your cooking rhythm to a wardrobe that holds exactly what
                you own, every millimetre is considered. The result feels inevitable — as though it
                was always part of the architecture.
              </p>
              <Link
                href="/services/bespoke"
                className="inline-flex items-center gap-2 text-sm font-medium text-hw-warm hover:text-hw-charcoal transition-colors mt-4"
              >
                Explore Bespoke Cabinetry
                <svg className="w-4 h-4 transition-transform hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-hw-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionTitle
            title="How We Work"
            subtitle="A clear, collaborative process from first conversation to final installation"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {HOW_WE_WORK.map((step) => (
              <div key={step.step} className="space-y-4">
                <div className="text-4xl md:text-5xl font-serif font-bold text-hw-warm mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/book-consultation"
              className="inline-block px-8 py-4 bg-hw-warm text-hw-charcoal font-semibold hover:bg-white transition-colors"
            >
              Book a Site Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Hardware Cross-Sell Section */}
      <section className="bg-hw-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionTitle
            title="The details behind the finish."
            subtitle="Professional hardware and interior finishing products — the same components we trust in our own cabinetry"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {featuredHardware.map((product) => (
              <HardwareProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/hardware"
              className="inline-block px-8 py-4 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors"
            >
              Explore Hardware Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* Why Houseware / Trust Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionTitle
            title="Why Houseware"
            subtitle="What sets our approach apart"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Bespoke by definition',
                description: 'No standard sizes, no catalogue constraints. Every project is designed from scratch for your space.',
              },
              {
                title: 'Space-specific solutions',
                description: 'We work around awkward corners, sloped ceilings, existing appliances and architectural quirks.',
              },
              {
                title: 'Quality craftsmanship',
                description: 'Premium materials, professional-grade hardware, and meticulous joinery — built to last decades.',
              },
              {
                title: 'Consultation & site measurement',
                description: 'We visit your location to understand the space and take precise measurements before designing.',
              },
              {
                title: 'Professional installation',
                description: 'Our experienced team handles delivery, fitting, and finishing — leaving your space ready to use.',
              },
              {
                title: 'Cabinetry & hardware under one brand',
                description: 'The same hinges, slides, handles and organisers we supply to professionals go into every project we build.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-hw-cream p-8 border border-hw-stone">
                <h3 className="text-lg font-bold text-hw-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-hw-taupe leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-hw-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            Planning a new space?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're at the ideas stage or ready to build, we're here to discuss your project
            and arrange a site visit at your convenience.
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
      </section>
    </>
  );
}