
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';

const productsData = [
  // Desktops
  { 
    id: 1, 
    name: "Dell OptiPlex 7090 Desktop", 
    price: 2899, 
    image: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/d/e/dell-pro-qcm1250-micro-desktop-c-00015rf000-bk_bto106_qcm1250_i2x.png", 
    category: "Desktops" 
  },
  { 
    id: 2, 
    name: "HP EliteDesk 800 G9 Mini PC", 
    price: 3199, 
    image: "https://hp.widen.net/content/ygi40v3v7b/webp/ygi40v3v7b.png?dpi=72&color=ffffff00&w=270", 
    category: "Desktops" 
  },

  // Laptops
  { 
    id: 3, 
    name: "HP EliteBook 840 G9 Laptop", 
    price: 4599, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8vc_urN3RJgOup8WN2W41uoE32ghKkXzWA&s", 
    category: "Laptops" 
  },
  { 
    id: 4, 
    name: "Lenovo ThinkPad X1 Carbon Gen 10", 
    price: 5299, 
    image: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2022/03/Dell-Latitude-7330-Aluminum-2.jpg?w=1200&h=675&fit=crop", 
    category: "Laptops" 
  },
  { 
    id: 5, 
    name: "Dell Latitude 7430 Business Laptop", 
    price: 4899, 
    image: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2022/03/Dell-Latitude-7330-Aluminum-2.jpg?w=1200&h=675&fit=crop", 
    category: "Laptops" 
  },

  // Servers
  { 
    id: 6, 
    name: "Dell PowerEdge R750 Server", 
    price: 18999, 
    image: "https://picsum.photos/id/866/600/600", 
    category: "Servers" 
  },
  { 
    id: 7, 
    name: "HP ProLiant DL380 Gen10 Server", 
    price: 16999, 
    image: "https://picsum.photos/id/870/600/600", 
    category: "Servers" 
  },

  // Networking
  { 
    id: 8, 
    name: "Cisco Catalyst 9200 Switch", 
    price: 12999, 
    image: "https://picsum.photos/id/1018/600/600", 
    category: "Networking" 
  },
  { 
    id: 9, 
    name: "TP-Link Omada WiFi 6 Access Point", 
    price: 899, 
    image: "https://picsum.photos/id/106/600/600", 
    category: "Networking" 
  },

  // Monitors
  { 
    id: 10, 
    name: "Samsung 27\" Business Monitor", 
    price: 1499, 
    image: "https://picsum.photos/id/367/600/400",
    category: "Monitors" 
  },
  { 
    id: 11, 
    name: "Dell UltraSharp 27\" 4K Monitor", 
    price: 2299, 
    image: "https://picsum.photos/id/1016/600/600", 
    category: "Monitors" 
  },

  // Software & Security
  { 
    id: 12, 
    name: "Windows Server 2022 Standard License", 
    price: 8999, 
    image: "https://picsum.photos/id/160/600/600", 
    category: "Software" 
  },
  { 
    id: 13, 
    name: "Kaspersky Endpoint Security", 
    price: 599, 
    image: "https://picsum.photos/id/201/600/600", 
    category: "Software" 
  },

  // Storage
  { 
    id: 14, 
    name: "Synology DS220+ NAS Storage", 
    price: 1899, 
    image: "https://picsum.photos/id/251/600/600", 
    category: "Storage" 
  },
  { 
    id: 15, 
    name: "Seagate 8TB Enterprise HDD", 
    price: 899, 
    image: "https://picsum.photos/id/180/600/600", 
    category: "Storage" 
  },
];

export default function ProductList({
  selectedCategories = [],
  priceRange = [0, 100000],
  selectedBrands = [],
}) {
  const { addToCart } = useContext(CartContext);

  let filteredProducts = [...productsData];

  // Category Filter
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      selectedCategories.includes(product.category)
    );
  }

  // Price Filter
  filteredProducts = filteredProducts.filter(product =>
    product.price <= priceRange[1]
  );

  // Brand Filter (basic matching)
  if (selectedBrands.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      selectedBrands.some(brand =>
        product.name.toLowerCase().includes(brand.toLowerCase())
      )
    );
  }

  // Sort - Newest first by default
  filteredProducts.sort((a, b) => b.id - a.id);

  return (
    <div className="border w-full">
      {/* Showing X Products */}
      <div className="flex justify-between items-center mb-8 px-1">
        <p className="text-zinc-500 text-lg">
          Showing <span className="font-semibold text-zinc-900">{filteredProducts.length}</span> products
        </p>
      </div>

      {/* Products Grid - Full Width & Highly Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 md:gap-8 w-full">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* No Products Found */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-24">
          <p className="text-3xl text-zinc-300 mb-3">No products found</p>
          <p className="text-zinc-500">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}