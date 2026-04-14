

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100">
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* In Stock Badge */}
        <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-medium px-3 py-1 rounded-2xl flex items-center gap-1">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          In Stock
        </div>

    
      </div>

      <div className="p-6">
        <p className="text-xs text-zinc-500 mb-1">{product.category}</p>
        <h3 className="font-semibold text-lg leading-tight line-clamp-2 min-h-[50px] mb-4 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <div className="text-3xl font-bold mb-5">₹{product.price.toLocaleString('en-IN')}</div>

        <button
          onClick={() => addToCart(product)}
          className="w-full bg-zinc-900 hover:bg-black text-white py-4 rounded-2xl font-medium flex items-center justify-center gap-2 transition-all active:scale-95"
        >
          <i className="fa-solid fa-cart-plus"></i>
          Add to Cart
        </button>
      </div>
    </div>
  );
}