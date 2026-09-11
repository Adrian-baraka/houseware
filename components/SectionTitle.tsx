interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionTitleProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-hw-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-hw-taupe max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
