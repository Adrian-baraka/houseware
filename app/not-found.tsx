import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Houseware Tanzania',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hw-cream flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-hw-charcoal mb-4">404</h1>
        <h2 className="text-3xl font-bold text-hw-charcoal mb-4">Page Not Found</h2>
        <p className="text-lg text-hw-taupe mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="px-8 py-4 border-2 border-hw-charcoal text-hw-charcoal font-semibold hover:bg-hw-charcoal hover:text-white transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
