'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppLink } from '@/lib/config';
import Link from 'next/link';

export default function WhatsAppButton() {
  const whatsappLink = getWhatsAppLink(
    'Hello Houseware, I would like to enquire about your services.'
  );

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors hover:scale-110 transform duration-200"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </Link>
  );
}
