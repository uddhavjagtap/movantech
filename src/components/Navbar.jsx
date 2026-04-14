import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Navbar({ setPage }) {
  const { cartCount, setIsCartOpen } = useContext(CartContext);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setPage('home')}
        >
          <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl">
            🛍️
          </div>
          <h1 className="text-3xl font-semibold text-zinc-900 logo-font tracking-tight">
            TrendCart
          </h1>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8 text-base font-medium">
          <button
           onClick={() => window.location.href = '/'}
            className="hover:text-indigo-600 transition-colors"
          >
            Shop
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 hover:text-indigo-600 relative"
          >
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setPage('admin')}
            className="px-6 py-2.5 bg-zinc-900 text-white rounded-3xl hover:bg-zinc-800 transition-colors"
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
}