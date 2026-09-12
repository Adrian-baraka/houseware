import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { HARDWARE_PRODUCTS, HardwareProduct } from '@/lib/data/hardware';
import { getWhatsAppLink } from '@/lib/config';
import Link from 'next/link';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';

interface HardwareDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return HARDWARE_PRODUCTS.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: HardwareDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = HARDWARE_PRODUCTS.find((p) => p.id === resolvedParams.slug);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: `${product.name} (${product.sku}) | Houseware Hardware`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} (${product.sku})`,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export default async function HardwareDetailPage({ params }: HardwareDetailPageProps) {
  const resolvedParams = await params;
  const product = HARDWARE_PRODUCTS.find((p) => p.id === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const whatsappMessage = `Hello Houseware, I would like to enquire about ${product.sku} — ${product.name}.`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  const formatCategory = (cat: string) => cat.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  const formatGroup = (grp: string) => grp.charAt(0).toUpperCase() + grp.slice(1);

  return (
    <div className="min-h-screen bg-hw-cream">
      {/* Breadcrumb / Back Link */}
      <div className="bg-white border-b border-hw-stone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/hardware"
            className="inline-flex items-center gap-2 text-sm text-hw-taupe hover:text-hw-charcoal transition-colors"
          >
            <FaArrowLeft size={16} />
            Back to Hardware Catalogue
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative bg-hw-stone aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.name} ${product.sku}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & SKU */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-hw-taupe uppercase tracking-wider">
                {formatCategory(product.category)}
              </span>
              <span className="text-xs text-hw-stone">/</span>
              <span className="text-xs font-semibold text-hw-taupe uppercase tracking-wider">
                {formatGroup(product.group)}
              </span>
              <span className="text-xs text-hw-stone">/</span>
              <span className="text-xs text-hw-charcoal font-medium">SKU: {product.sku}</span>
            </div>

            {/* Product Name */}
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-hw-charcoal">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-hw-taupe">{product.priceDisplay}</span>
              <span className="text-hw-taupe">/ {product.unit}</span>
            </div>

            {/* Short Description */}
            <p className="text-lg text-hw-charcoal">{product.shortDescription}</p>

            {/* Full Description */}
            {product.description && (
              <div className="text-hw-taupe prose prose-sm max-w-none">
                <p>{product.description}</p>
              </div>
            )}

            {/* Specifications */}
            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="border-t border-hw-stone pt-6">
                <h2 className="text-lg font-bold text-hw-charcoal mb-4">Specifications</h2>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <dt className="font-semibold text-hw-charcoal capitalize min-w-[140px]">
                        {key.replace(/_/g, ' ')}:
                      </dt>
                      <dd className="text-hw-taupe">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Materials & Colors */}
            {(product.materials || product.colors) && (
              <div className="border-t border-hw-stone pt-6">
                <h2 className="text-lg font-bold text-hw-charcoal mb-4">Details</h2>
                <div className="space-y-2">
                  {product.materials && (
                    <div className="flex gap-2">
                      <span className="font-semibold text-hw-charcoal min-w-[100px]">Material:</span>
                      <span className="text-hw-taupe">{product.materials}</span>
                    </div>
                  )}
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      <span className="font-semibold text-hw-charcoal min-w-[100px]">Colors:</span>
                      <span className="text-hw-taupe">{product.colors.join(', ')}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Availability */}
            <div className="border-t border-hw-stone pt-6">
              <div className="flex items-center gap-3">
                {product.availability === 'in-stock' && (
                  <span className="text-sm font-semibold bg-green-100 text-green-800 px-3 py-1 rounded">
                    In Stock
                  </span>
                )}
                {product.availability === 'limited' && (
                  <span className="text-sm font-semibold bg-yellow-100 text-yellow-800 px-3 py-1 rounded">
                    Limited Availability
                  </span>
                )}
                {product.availability === 'on-order' && (
                  <span className="text-sm font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded">
                    On Order
                  </span>
                )}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-3 text-lg"
            >
              <FaWhatsapp size={20} />
              Enquire on WhatsApp
            </a>

            {/* Share / Additional Actions */}
            <div className="border-t border-hw-stone pt-6">
              <p className="text-sm text-hw-taupe">
                Need help choosing? Our team can advise on the best hardware for your project.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HARDWARE_PRODUCTS.filter((p) => p.group === product.group && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/hardware/${relatedProduct.id}`}
                  className="bg-white border border-hw-stone rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative bg-hw-stone aspect-square overflow-hidden">
                    <Image
                      src={relatedProduct.image}
                      alt={`${relatedProduct.name} ${relatedProduct.sku}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-hw-taupe uppercase tracking-wider font-semibold">
                      {formatCategory(relatedProduct.category)}
                    </p>
                    <h3 className="text-base font-bold text-hw-charcoal line-clamp-1">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs text-hw-taupe">SKU: {relatedProduct.sku}</p>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-semibold text-hw-taupe">
                        {relatedProduct.priceDisplay}
                      </span>
                      <span className="text-xs text-hw-taupe">/ {relatedProduct.unit}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}