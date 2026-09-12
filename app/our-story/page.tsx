import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/lib/data/company';

export const metadata = {
  title: 'Our Story | HOUSEWARE TANZANIA LIMITED',
  description: 'Learn about Houseware, our mission, and our commitment to bespoke cabinetry excellence.',
};

export default function OurStoryPage() {
  return (
    <>
      <HeroSection
        title="Our Story"
        subtitle="Crafting bespoke interiors with passion and precision"
        height="medium"
      />

      <div className="bg-hw-cream">
        {/* Main Story */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-6">Who We Are</h2>
              <p className="text-lg text-hw-taupe leading-relaxed mb-4">
                {COMPANY_INFO.description}
              </p>
              <p className="text-lg text-hw-taupe leading-relaxed">
                We believe that great interiors start with great cabinetry. Every project we undertake is an opportunity to demonstrate our commitment to craftsmanship, attention to detail, and customer satisfaction.
              </p>
            </section>

            {/* Design & Planning Process */}
            <section className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-hw-charcoal">Design & Planning Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-hw-stone aspect-square">
                  <Image
                    src="/images/services/houseware-about-plan-measurements-01.jpg"
                    alt="Site measurement and planning process"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative bg-hw-stone aspect-square">
                  <Image
                    src="/images/services/houseware-about-plan-lkitchen-05.jpg"
                    alt="Kitchen design and layout planning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-hw-stone aspect-square">
                  <Image
                    src="/images/services/houseware-about-plan-kitchen8-02.jpg"
                    alt="Design development and visualization"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative bg-hw-stone aspect-square">
                  <Image
                    src="/images/services/houseware-about-plan-beforeafter-04.jpg"
                    alt="Before and after transformation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white p-8 md:p-12 border border-hw-stone">
              <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-6">Our Mission</h2>
              <p className="text-lg text-hw-taupe leading-relaxed">
                To create bespoke cabinetry and interior solutions that transform spaces and enhance the way people live. We are committed to understanding our clients' unique needs, translating their vision into reality, and delivering exceptional craftsmanship with every project.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Excellence',
                    description:
                      'We pursue excellence in every aspect of our work, from design conception to final installation.',
                  },
                  {
                    title: 'Integrity',
                    description:
                      'We are transparent in our communication, honest about timelines and costs, and stand behind our work.',
                  },
                  {
                    title: 'Innovation',
                    description:
                      'We stay current with design trends, materials, and manufacturing techniques to offer modern solutions.',
                  },
                  {
                    title: 'Craftsmanship',
                    description:
                      'We take pride in the quality of our work, using premium materials and time-tested construction methods.',
                  },
                  {
                    title: 'Collaboration',
                    description:
                      'We listen carefully to our clients and work collaboratively to bring their visions to life.',
                  },
                  {
                    title: 'Sustainability',
                    description:
                      'We are mindful of environmental impact and source materials responsibly where possible.',
                  },
                ].map((value, idx) => (
                  <div key={idx} className="bg-white p-6 border border-hw-stone">
                    <h3 className="text-lg font-bold text-hw-charcoal mb-3">{value.title}</h3>
                    <p className="text-hw-taupe">{value.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Workshop & Craftsmanship */}
            <section className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-hw-charcoal">Workshop & Craftsmanship</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative bg-hw-stone aspect-square">
                  <Image
                    src="/images/services/houseware-about-workshop-craftsman-03.jpg"
                    alt="Skilled craftsman at work in the workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative bg-hw-stone aspect-square">
                  <Image
                    src="/images/services/houseware-about-workshop-planing-06.jpg"
                    alt="Precision planing and woodworking in production"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </section>

            <section className="bg-hw-charcoal text-white p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Our Approach</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  We don't believe in one-size-fits-all solutions. Every space is unique, and every client has distinct needs and preferences. Our approach is collaborative, thoughtful, and detail-oriented.
                </p>
                <p>
                  From the initial consultation through final installation, we maintain open communication with our clients, ensuring that the final result not only meets but exceeds expectations. We work with premium materials, skilled craftspeople, and modern manufacturing techniques to deliver cabinetry that is both beautiful and built to last.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-8">Why Choose Houseware</h2>
              <ul className="space-y-4">
                {[
                  'Bespoke design tailored specifically to your space and requirements',
                  'Experienced team of designers, craftspeople, and installers',
                  'Premium materials carefully sourced for quality and durability',
                  'Complete project management from consultation to installation',
                  'Transparent pricing and clear communication throughout',
                  'Warranty and aftercare support for your peace of mind',
                  'Local expertise combined with international standards',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-hw-warm text-2xl flex-shrink-0">✓</span>
                    <span className="text-lg text-hw-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border-t border-hw-stone">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-hw-taupe mb-8">
              Let's discuss how we can transform your space with beautiful, bespoke cabinetry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation"
                className="px-8 py-4 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors"
              >
                Book a Site Visit
              </Link>
              <Link
                href="/projects"
                className="px-8 py-4 border-2 border-hw-charcoal text-hw-charcoal font-semibold hover:bg-hw-charcoal hover:text-white transition-colors"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
