

import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ProductList from '../components/ProductList';
import logo from '../assets/logo.png';  // Make sure this path is correct

export default function Shop() {
  const { cartCount, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const categories = ['Laptops', 'Desktops', 'Servers', 'Networking', 'Monitors', 'Software', 'Storage'];
  const brands = ['Dell', 'HP', 'Lenovo', 'Samsung', 'Cisco', 'Apple'];

  // Handle category coming from CorporateHome
  useEffect(() => {
    const state = location.state;
    if (state?.preSelectedCategory) {
      setSelectedCategories([state.preSelectedCategory]);
    }
  }, [location.state]);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 100000]);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Movantech Logo"
                className="w-18 h-14 object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/')}
              className="hidden md:block text-sm font-medium text-zinc-600 hover:text-blue-600"
            >
              ← Back To Home
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 text-zinc-700 hover:text-blue-600 relative transition-colors"
            >
              <i className="fa-solid fa-cart-shopping text-2xl"></i>
              <span className="font-medium hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => navigate('/admin')}
              className="px-6 py-2.5 bg-zinc-900 text-white rounded-3xl hover:bg-black transition"
            >
              Admin
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl sm:px-6 py-8" style={{ width: "100%", maxWidth: "100%" }}>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Our Products</h1>

          <button
            onClick={() => setShowMobileFilters(true)}
            className="lg:hidden flex items-center gap-2 px-5 py-3 bg-white border rounded-2xl"
          >
            <i className="fa-solid fa-sliders"></i>
            Filters
          </button>
        </div>

        <div className="flex gap-6 lg:gap-8">
          {/* Desktop Filters */}
          <div className="w-64 lg:w-72 hidden lg:block bg-white rounded-3xl p-6 shadow sticky top-24 h-fit">
            <h3 className="text-xl font-semibold mb-6">Filters</h3>

            <div className="mb-8">
              <h4 className="font-medium text-zinc-700 mb-3">Categories</h4>
              <div className="space-y-3">
                {categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                      className="w-5 h-5 accent-blue-600 rounded"
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-medium text-zinc-700 mb-3">Price Range</h4>
              <input
                type="range"
                min="0"
                max="100000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-sm text-zinc-600 mt-2">
                <span>₹0</span>
                <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={clearFilters}
              className="text-red-500 text-sm font-medium hover:underline"
            >
              Clear All Filters
            </button>
          </div>

          {/* Product List */}
          <div className="flex-1 min-w-0" >
            <ProductList
              selectedCategories={selectedCategories}
              priceRange={priceRange}
              selectedBrands={selectedBrands}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filters */}
      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/60 z-[100] lg:hidden flex items-end">
          <div className="bg-white w-full h-[85%] rounded-t-3xl p-6 overflow-auto">
            <div className="flex justify-between mb-6">
              <h3 className="text-2xl font-semibold">Filters</h3>
              <button onClick={() => setShowMobileFilters(false)} className="text-4xl">×</button>
            </div>
            <button
              onClick={() => setShowMobileFilters(false)}
              className="mt-8 w-full py-4 bg-blue-600 text-white rounded-2xl font-medium"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}