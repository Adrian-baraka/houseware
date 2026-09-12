'use client';

import { useState, useMemo } from 'react';
import HeroSection from '@/components/HeroSection';
import SectionTitle from '@/components/SectionTitle';
import HardwareProductCard from '@/components/HardwareProductCard';
import {
  HARDWARE_PRODUCTS,
  HARDWARE_CATEGORIES,
  PRODUCT_GROUPS,
  searchProducts,
  getProductsByGroup,
  ProductCategory,
  ProductGroup,
} from '@/lib/data/hardware';
import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function HardwarePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<ProductGroup | 'all'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'price-low' | 'price-high'>('featured');

  // Filter and search products
  const filteredProducts = useMemo(() => {
    let results = [...HARDWARE_PRODUCTS];

    // Apply search
    if (searchQuery.trim()) {
      results = searchProducts(searchQuery);
    }

    // Apply group filter
    if (selectedGroup !== 'all') {
      results = results.filter((p) => p.group === selectedGroup);
    }

    // Sort
    if (sortBy === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'price-low') {
      results.sort((a, b) => {
        const priceA = parseFloat(a.priceDisplay.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.priceDisplay.replace(/[^0-9.]/g, '')) || 0;
        return priceA - priceB;
      });
    } else if (sortBy === 'price-high') {
      results.sort((a, b) => {
        const priceA = parseFloat(a.priceDisplay.replace(/[^0-9.]/g, '')) || 0;
        const priceB = parseFloat(b.priceDisplay.replace(/[^0-9.]/g, '')) || 0;
        return priceB - priceA;
      });
    }
    // 'featured' keeps original order

    return results;
  }, [searchQuery, selectedGroup, sortBy]);

  const groups = Object.entries(PRODUCT_GROUPS).map(([key, value]) => ({
    id: key as ProductGroup,
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
                placeholder="Search products... (e.g., H-011, hinge, skirting, organizer)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-hw-stone border-0 outline-none text-hw-charcoal placeholder-hw-taupe"
              />
            </div>

            {/* Filters Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Group Filter */}
              <div>
                <label className="text-sm font-semibold text-hw-taupe uppercase tracking-wider">
                  Category
                </label>
                <select
                  value={selectedGroup}
                  onChange={(e) => setSelectedGroup(e.target.value as ProductGroup | 'all')}
                  className="w-full mt-2 px-3 py-2 border border-hw-stone rounded text-hw-charcoal"
                >
                  <option value="all">All Categories</option>
                  {groups.map((grp) => (
                    <option key={grp.id} value={grp.id}>
                      {grp.name}
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
                  onChange={(e) => setSortBy(e.target.value as 'featured' | 'name' | 'price-low' | 'price-high')}
                  className="w-full mt-2 px-3 py-2 border border-hw-stone rounded text-hw-charcoal"
                >
                  <option value="featured">Featured</option>
                  <option value="name">Name A–Z</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
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
                  setSelectedGroup('all');
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