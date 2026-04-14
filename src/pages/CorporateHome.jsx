
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';   // ← Add this import
import logo from '../assets/logo.png';  // Make sure this path is correct
import lightLogo from '../assets/light-logo.png';  // Make sure this path is correct

export default function CorporateHome() {
  const navigate = useNavigate();

  const productCategories = [
    {
      name: "Desktops & Workstations",
      category: "Desktops",
      desc: "High-performance systems for professionals and enterprises",
      image: "https://picsum.photos/id/1015/600/400",
    },
    {
      name: "Notebooks & Tablets",
      category: "Laptops",
      desc: "Powerful laptops and tablets for mobility and productivity",
      image: "https://picsum.photos/id/201/600/400",
    },
    {
      name: "Servers & Storage",
      category: "Servers",
      desc: "Reliable servers and data storage solutions",
      image: "https://picsum.photos/id/106/600/400",
    },
    {
      name: "Networking Solutions",
      category: "Networking",
      desc: "Switches, routers, WiFi and enterprise networking",
      image: "https://picsum.photos/id/367/600/400",
    },
    {
      name: "Monitors & Projectors",
      category: "Monitors",
      desc: "Ultra-sharp displays and professional projection systems",
      image: "https://picsum.photos/id/1005/600/400",
    },
    {
      name: "Power Solutions",
      category: "Storage",
      desc: "UPS, stabilizers and backup power systems",
      image: "https://picsum.photos/id/180/600/400",
    },
    {
      name: "Security & Surveillance",
      category: "Software",
      desc: "CCTV, access control and cybersecurity hardware",
      image: "https://picsum.photos/id/201/600/400",
    },
    {
      name: "Software Solutions",
      category: "Software",
      desc: "Licensed software, cloud tools and enterprise applications",
      image: "https://picsum.photos/id/160/600/400",
    },
  ];

  const services = [
    { icon: "🔒", title: "Cybersecurity", desc: "Advanced protection against threats and data breaches" },
    { icon: "🖥️", title: "IT Infrastructure", desc: "Complete setup and management of your IT environment" },
    { icon: "📹", title: "Surveillance Systems", desc: "High-definition CCTV and smart monitoring solutions" },
    { icon: "🌐", title: "IoT & Smart Solutions", desc: "Connected devices and intelligent automation" },
    { icon: "🎥", title: "AV Systems", desc: "Audio-visual solutions for conference rooms and auditoriums" },
    { icon: "☁️", title: "Cloud Services", desc: "Migration, hosting and managed cloud solutions" },
  ];

  const handleCategoryClick = (category) => {
    navigate('/shop', {
      state: { preSelectedCategory: category }
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Movantech Logo"
              className="w-18 h-14 object-contain"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          <div className="hidden md:flex items-center gap-9 text-sm font-medium text-zinc-700">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#products" className="hover:text-blue-600 transition-colors">Products</a>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About Us
            </Link>
          </div>

          <button
            onClick={() => navigate('/shop')}
            className="px-9 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all"
          >
            Shop Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/2000x1200/?tech,office')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-950/80 to-black/70" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Premium IT Solutions<br />for Modern Businesses
          </h1>
          <p className="text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Complete IT hardware, software, and services for enterprises across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/shop')}
              className="px-14 py-6 bg-white text-blue-950 font-semibold text-xl rounded-3xl hover:bg-blue-50 transition-all shadow-2xl"
            >
              Explore Products
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-14 py-6 border-2 border-white/80 hover:bg-white/10 font-semibold text-xl rounded-3xl transition-all"
            >
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white text-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-4">Our Premium Products</h2>
            <p className="text-xl text-zinc-600">Click on any category to explore products</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productCategories.map((item, i) => (
              <div
                key={i}
                onClick={() => handleCategoryClick(item.category)}
                className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-2xl mb-3 leading-tight">{item.name}</h3>
                  <p className="text-zinc-600 mb-6 line-clamp-2">{item.desc}</p>
                  <p className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Products <span className="text-xl">→</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold mb-4 text-white">IT Services That Deliver Results</h2>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              End-to-end support to keep your business running smoothly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-blue-500 p-10 rounded-3xl transition-all group"
              >
                <div className="text-6xl mb-8 transition-transform group-hover:scale-110">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Beautiful Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Company Info */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <img
                  src={lightLogo}
                  alt="Movantech Logo"
                  className="w-18 h-14 object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              <p className="text-zinc-400 leading-relaxed max-w-md">
                Innovative IT solutions for modern businesses. Premium hardware, software,
                and expert services across India and the Middle East.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                <p className="flex items-center gap-3 text-zinc-400">
                  📍 <span>Mumbai, Maharashtra, India</span>
                </p>
                <p className="flex items-center gap-3 text-zinc-400">
                  ✉️ <a href="mailto:info@movantech.com" className="hover:text-blue-400 transition-colors">info@movantech.com</a>
                </p>
                <p className="flex items-center gap-3 text-zinc-400">
                  📞 <span>+91 99586 23107</span>
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-5 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-5 text-lg">Services</h4>
              <ul className="space-y-3 text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">IT Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cyber Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Surveillance Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audio-Video Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cloud Services</a></li>
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <h4 className="text-white font-semibold mb-5 text-lg">Products</h4>
              <ul className="space-y-3 text-zinc-400">
                <li><a href="#" className="hover:text-white transition-colors">Servers & Storage</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Networking Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desktops & Laptops</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security & Surveillance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Software Licenses</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <p className="text-zinc-500">
              © {new Date().getFullYear()} Movantech Systems. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6 text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors text-xl">𝕏</a>
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors text-xl">↳</a>
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors text-xl">in</a>
              <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors text-xl">📸</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}