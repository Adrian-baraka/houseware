import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/lib/data/projects';

export const metadata = {
  title: 'Our Projects | Houseware Tanzania',
  description: 'A selection of completed cabinetry and interior design projects we have completed.',
};

export default function ProjectsPage() {
  return (
    <>
      <HeroSection title="Our Work" subtitle="Completed projects we're proud of" height="medium" />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SectionTitle
            title="Project Portfolio"
            subtitle="A selection of spaces we've designed and brought to life"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
