'use client';

import { useState, useMemo } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import HardwareProductCard from '@/components/HardwareProductCard';
import {
  HARDWARE_PRODUCTS,
  HARDWARE_CATEGORIES,
  searchProducts,
  getProductsByCategory,
  ProductCategory,
} from '@/lib/data/hardware';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function HardwarePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let results = [...HARDWARE_PRODUCTS];

    // Apply search
    if (searchQuery.trim()) {
      results = searchProducts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      results = results.filter((p) => p.category === selectedCategory);
    }

    // Sort
    if (sortBy === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'category') {
      results.sort((a, b) => a.category.localeCompare(b.category));
    }

    return results;
  }, [searchQuery, selectedCategory, sortBy]);

  const categories = Object.entries(HARDWARE_CATEGORIES).map(([key, value]) => ({
    id: key as ProductCategory,
    name: value.name,
  }));

  return (
    <>
      <HeroSection
        title="Houseware Hardware"
        subtitle="Professional hardware and finishing solutions for better-built interiors"
        height="medium"
      />

      <div className="bg-hw-cream">
        {/* Overview */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-lg text-hw-taupe max-w-3xl">
            Houseware supplies a carefully curated selection of premium cabinet hardware, hinges, drawer slides, and interior finishing products. Whether you're a furniture maker, interior designer, contractor, or homeowner, we have professional-grade solutions to enhance your cabinetry and interior projects.
          </p>
        </section>

        {/* Search and Filters */}
        <section className="bg-white border-y border-hw-stone py-8 sticky top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Search Bar */}
            <div className="mb-6 flex items-center gap-2 bg-hw-stone rounded-sm px-4 py-3">
              <HiMagnifyingGlass className="text-hw-taupe" size={20} />
              <input
                type="text"
                placeholder="Search products... (e.g., hinges, drawer, organiser)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-hw-stone border-0 outline-none text-hw-charcoal placeholder-hw-taupe"
              />
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="text-sm font-semibold text-hw-taupe uppercase tracking-wider">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as ProductCategory | 'all')}
                  className="w-full mt-2 px-3 py-2 border border-hw-stone rounded text-hw-charcoal"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <label className="text-sm font-semibold text-hw-taupe uppercase tracking-wider">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'category')}
                  className="w-full mt-2 px-3 py-2 border border-hw-stone rounded text-hw-charcoal"
                >
                  <option value="name">Product Name</option>
                  <option value="category">Category</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="flex items-end">
                <p className="text-sm text-hw-taupe">
                  Showing <span className="font-bold text-hw-charcoal">{filteredProducts.length}</span> product
                  {filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <HardwareProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-hw-taupe mb-4">
                No products found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-2 bg-hw-charcoal text-white text-sm hover:bg-hw-sage transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Info Section */}
        <section className="bg-white border-t border-hw-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-serif font-bold text-hw-charcoal mb-8">
              About Our Hardware Selection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-hw-charcoal mb-3">Premium Quality</h3>
                <p className="text-hw-taupe">
                  All our hardware is sourced from leading European manufacturers, ensuring durability and performance.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-hw-charcoal mb-3">Professional Solutions</h3>
                <p className="text-hw-taupe">
                  Whether you need bulk supplies or individual components, we serve contractors, makers, and homeowners.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-hw-charcoal mb-3">Expert Support</h3>
                <p className="text-hw-taupe">
                  Our team can help you select the right products for your specific project needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-Sell */}
        <section className="bg-hw-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Building a Complete Interior?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our full bespoke cabinetry services. We design and install custom kitchens, wardrobes, TV cabinets and complete interior solutions.
            </p>
            <a
              href="/services"
              className="inline-block px-8 py-4 bg-hw-warm text-hw-charcoal font-semibold hover:bg-white transition-colors"
            >
              Explore Cabinetry Services
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
