'use client';

import Link from 'next/link';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { SERVICES, HOW_WE_WORK } from '@/lib/data/company';
import { PROJECTS } from '@/lib/data/projects';
import { getWhatsAppLink } from '@/lib/config';

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);
  const whatsappLink = getWhatsAppLink(
    'Hello Houseware, I would like to book a site visit for a custom project.'
  );

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Bespoke Cabinetry, Designed For Your Space"
        subtitle="Custom kitchens, wardrobes and TV cabinetry crafted around the way you live"
        backgroundImage="/images/projects/houseware-kitchen-walnut-marble-04.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            href="/book-consultation"
            className="px-8 py-4 bg-hw-warm text-white font-semibold hover:bg-hw-charcoal transition-colors"
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
      </HeroSection>

      {/* Main Content */}
      <div className="bg-hw-cream">
        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionTitle
            title="Made Around Your Space"
            subtitle="We create custom cabinetry solutions designed specifically for you"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-hw-stone aspect-square mb-5">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="text-xl font-bold text-hw-charcoal mb-2 group-hover:text-hw-warm transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-hw-taupe mb-4">{service.description}</p>
                <span className="text-sm font-medium text-hw-warm group-hover:text-hw-charcoal transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionTitle title="Our Work" subtitle="A selection of spaces we've designed and brought to life" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
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

        {/* How We Work Section */}
        <section className="bg-hw-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <SectionTitle
              title="How We Work"
              subtitle="Our proven process ensures your project is delivered perfectly"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {HOW_WE_WORK.map((step) => (
                <div key={step.step} className="space-y-4">
                  <div className="text-5xl font-serif font-bold text-hw-warm mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Houseware Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionTitle
            title="Why Houseware"
            subtitle="Expertise, attention to detail, and a commitment to your vision"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Designed For Your Space',
                description:
                  'Every project begins with understanding your unique requirements and constraints.',
              },
              {
                title: 'Bespoke, Not Off-The-Shelf',
                description:
                  'We customize every aspect of your cabinetry to match your aesthetic and functional needs.',
              },
              {
                title: 'Attention To Detail',
                description:
                  'From materials selection to final installation, we maintain the highest standards.',
              },
              {
                title: 'Quality Materials & Hardware',
                description:
                  'We source premium materials and professional-grade hardware that last.',
              },
              {
                title: 'Professional Installation',
                description:
                  'Our experienced team ensures flawless installation and finishing of your projects.',
              },
              {
                title: 'Local Expertise',
                description:
                  'We understand the Tanzanian climate and local design preferences.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-hw-stone">
                <h3 className="text-lg font-bold text-hw-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-hw-taupe leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware Cross-Sell */}
        <section className="bg-gray-50 border-t border-hw-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="bg-white p-8 md:p-12 border border-hw-stone flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-hw-charcoal mb-3">
                  Professional Hardware & Finishing Products
                </h3>
                <p className="text-hw-taupe mb-6">
                  Looking for professional cabinet hardware and interior finishing solutions? Houseware also supplies a curated selection of premium hardware, hinges, drawer slides, and accessories for furniture makers, interior designers, and contractors.
                </p>
                <Link
                  href="/hardware"
                  className="inline-block px-6 py-3 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors"
                >
                  Explore Hardware Catalogue
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-hw-charcoal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's Discuss Your Space
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're planning a custom kitchen, wardrobe, or bespoke cabinetry solution, we'd love to discuss your project.
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
      </div>
    </>
  );
}
