'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import { getWhatsAppLink } from '@/lib/config';
import Link from 'next/link';

type ProjectType = 'kitchen' | 'wardrobe' | 'tv-cabinet' | 'interior-project' | 'other';

interface FormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  projectType: ProjectType;
  location: string;
  preferredDate: string;
  preferredTime: string;
  additionalInfo: string;
}

export default function BookConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    whatsapp: '',
    email: '',
    projectType: 'kitchen',
    location: '',
    preferredDate: '',
    preferredTime: '',
    additionalInfo: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '',
          phone: '',
          whatsapp: '',
          email: '',
          projectType: 'kitchen',
          location: '',
          preferredDate: '',
          preferredTime: '',
          additionalInfo: '',
        });
      }, 2000);
    }, 1000);
  };

  const whatsappMessage = `Hello Houseware, I would like to book a site visit for a ${formData.projectType.replace('-', ' ')} project in ${formData.location}. My name is ${formData.fullName}.`;
  const whatsappLink = getWhatsAppLink(whatsappMessage);

  return (
    <>
      <HeroSection
        title="Book a Site Visit"
        subtitle="Let's discuss your bespoke cabinetry project"
        height="medium"
      />

      <div className="bg-hw-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {submitted ? (
            // Success Message
            <div className="bg-white border-2 border-green-500 p-12 text-center rounded">
              <h2 className="text-3xl font-serif font-bold text-hw-charcoal mb-4">
                Thank You!
              </h2>
              <p className="text-lg text-hw-taupe mb-8">
                We've received your consultation request. Our team will be in touch shortly to confirm your site visit.
              </p>
              <p className="text-hw-charcoal mb-8">
                In the meantime, you can reach out directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-green-500 text-white font-semibold hover:bg-green-600 transition-colors"
                >
                  Continue on WhatsApp
                </a>
                <Link
                  href="/"
                  className="px-8 py-4 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          ) : (
            // Form
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form Column */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white p-8 border border-hw-stone">
                  <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">
                    Tell Us About Your Project
                  </h2>

                  {/* Full Name */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                        placeholder="+255..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                        placeholder="+255... (optional)"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                    >
                      <option value="kitchen">Custom Kitchen</option>
                      <option value="wardrobe">Custom Wardrobe</option>
                      <option value="tv-cabinet">TV Cabinet</option>
                      <option value="interior-project">Interior Project</option>
                      <option value="other">Other Cabinetry</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                      placeholder="Dar es Salaam, Dodoma, etc."
                    />
                  </div>

                  {/* Preferred Date & Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                        Preferred Site Visit Date
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                        Preferred Time
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                      >
                        <option value="">Select a time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                        <option value="late-afternoon">Late Afternoon (3 PM - 6 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-hw-charcoal mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-hw-stone rounded focus:outline-none focus:ring-2 focus:ring-hw-warm"
                      placeholder="Tell us more about your project, style preferences, requirements, etc."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-hw-charcoal text-white font-semibold hover:bg-hw-sage transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit Site Visit Request'}
                  </button>

                  <p className="text-xs text-hw-taupe text-center mt-4">
                    We'll be in touch shortly to confirm your consultation.
                  </p>
                </form>
              </div>

              {/* Info Column */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* How It Works */}
                  <div className="bg-white p-6 border border-hw-stone">
                    <h3 className="text-lg font-bold text-hw-charcoal mb-4">How It Works</h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <span className="text-hw-warm font-bold flex-shrink-0">1</span>
                        <p className="text-sm text-hw-charcoal">
                          Fill out this form with your project details
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-hw-warm font-bold flex-shrink-0">2</span>
                        <p className="text-sm text-hw-charcoal">
                          We'll confirm your site visit date and time
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-hw-warm font-bold flex-shrink-0">3</span>
                        <p className="text-sm text-hw-charcoal">
                          Our team visits your location to understand your space
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-hw-warm font-bold flex-shrink-0">4</span>
                        <p className="text-sm text-hw-charcoal">
                          We present custom design options and quotation
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-hw-charcoal text-white p-6">
                    <h3 className="text-lg font-bold mb-4">Quick Contact</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      Prefer to reach out directly? Contact us:
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-semibold">General & WhatsApp:</span> 0714 881 668 / 0716 470 812
                      </p>
                      <p>
                        <span className="font-semibold">Hardware & Accessories:</span> 0794 738 778
                      </p>
                      <p>
                        <span className="font-semibold">Email:</span> housewaretanzania@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* What to Prepare */}
                  <div className="bg-white p-6 border border-hw-stone">
                    <h3 className="text-lg font-bold text-hw-charcoal mb-4">What to Prepare</h3>
                    <ul className="space-y-2 text-sm text-hw-charcoal">
                      <li>• Measurements of your space</li>
                      <li>• Photos of the current area</li>
                      <li>• Style inspiration or references</li>
                      <li>• Budget range (if available)</li>
                      <li>• Timeline for the project</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
