'use client';

import Image from 'next/image';
import { HardwareProduct } from '@/lib/data/hardware';
import { getWhatsAppLink } from '@/lib/config';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

interface HardwareProductCardProps {
  product: HardwareProduct;
}

export default function HardwareProductCard({ product }: HardwareProductCardProps) {
  const whatsappMessage = `Hello Houseware, I am interested in the ${product.name}. Could you please provide availability and pricing?`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <div className="bg-white border border-hw-stone rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative bg-hw-stone aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          {product.availability === 'in-stock' && (
            <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded">
              In Stock
            </span>
          )}
          {product.availability === 'limited' && (
            <span className="text-xs font-semibold bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
              Limited
            </span>
          )}
          {product.availability === 'on-order' && (
            <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
              On Order
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-hw-taupe uppercase tracking-wider font-semibold mb-1">
            {product.category.replace('-', ' ')}
          </p>
          <h3 className="text-lg font-bold text-hw-charcoal">{product.name}</h3>
        </div>

        <p className="text-sm text-hw-charcoal line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-semibold text-hw-taupe">{product.priceDisplay}</span>
        </div>

        {/* CTA Button */}
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
        >
          <FaWhatsapp size={16} />
          Ask About This
        </Link>
      </div>
    </div>
  );
}
