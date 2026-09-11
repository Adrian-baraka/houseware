import { getProjectBySlug, PROJECTS } from '@/lib/data/projects';
import { notFound } from 'next/navigation';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import { getWhatsAppLink } from '@/lib/config';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const project = getProjectBySlug(params.slug);
  return {
    title: `${project?.title || 'Project'} | Houseware Tanzania`,
    description: project?.description || '',
  };
}

export default function ProjectDetailPage({ params: { slug } }: ProjectDetailPageProps) {
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter(
    (p) => p.type === project.type && p.id !== project.id
  ).slice(0, 3);

  const whatsappLink = getWhatsAppLink(
    `Hello Houseware, I'm interested in a similar ${project.type.replace('-', ' ')} project.`
  );

  return (
    <>
      {/* Hero with featured image */}
      <div className="relative h-96 md:h-screen">
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="bg-hw-cream">
        {/* Project Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-hw-stone">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-hw-charcoal">
                {project.title}
              </h1>
            </div>
            <div>
              <p className="text-sm text-hw-taupe uppercase tracking-widest mb-1">Location</p>
              <p className="text-hw-charcoal font-semibold">{project.location}</p>
            </div>
            <div>
              <p className="text-sm text-hw-taupe uppercase tracking-widest mb-1">Project Type</p>
              <p className="text-hw-charcoal font-semibold capitalize">
                {project.type.replace('-', ' ')}
              </p>
            </div>
            {project.year && (
              <div>
                <p className="text-sm text-hw-taupe uppercase tracking-widest mb-1">Year</p>
                <p className="text-hw-charcoal font-semibold">{project.year}</p>
              </div>
            )}
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-4">Overview</h2>
            <p className="text-lg text-hw-taupe leading-relaxed">{project.description}</p>
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, idx) => (
                <div key={idx} className="relative bg-hw-stone aspect-video">
                  <Image
                    src={image}
                    alt={`${project.title} image ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-serif font-bold text-hw-charcoal mb-4">
                Design Approach
              </h3>
              <p className="text-hw-taupe leading-relaxed">{project.designApproach}</p>
            </div>
            <div className="bg-white p-8 border border-hw-stone">
              <h3 className="text-lg font-bold text-hw-charcoal mb-6">Specifications</h3>
              {project.materials && (
                <div className="mb-4">
                  <p className="text-sm text-hw-taupe uppercase tracking-wider">Materials</p>
                  <p className="text-hw-charcoal">{project.materials}</p>
                </div>
              )}
              {project.finishes && (
                <div className="mb-4">
                  <p className="text-sm text-hw-taupe uppercase tracking-wider">Finishes</p>
                  <p className="text-hw-charcoal">{project.finishes}</p>
                </div>
              )}
              {project.keyFeatures && project.keyFeatures.length > 0 && (
                <div>
                  <p className="text-sm text-hw-taupe uppercase tracking-wider mb-3">
                    Key Features
                  </p>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-hw-warm mt-1">✓</span>
                        <span className="text-hw-charcoal text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-hw-charcoal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Planning a Similar Project?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We'd love to discuss how we can create a bespoke solution for your space.
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
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">
                More Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
