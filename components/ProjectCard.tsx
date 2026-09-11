'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-hw-stone aspect-square mb-4">
          <Image
            src={project.featuredImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-serif font-bold text-hw-charcoal group-hover:text-hw-warm transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-hw-taupe">
            {project.location} • {project.type.replace('-', ' ').toUpperCase()}
          </p>
          <p className="text-sm text-hw-charcoal line-clamp-2">{project.shortDescription}</p>
          <div className="pt-2">
            <span className="text-sm font-medium text-hw-warm hover:text-hw-charcoal transition-colors">
              View Project →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
