import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import lightLogo from '../assets/light-logo.png';

export default function AboutUs() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            {/* Navbar */}
            <nav className="bg-white/95 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <img
                            src={logo}
                            alt="Movantech Logo"
                            className="w-18 h-14 object-contain"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>

                    <div className="hidden md:flex items-center gap-9 text-sm font-medium text-zinc-700">
                        <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
                        <a href="/about" className="text-blue-600 font-semibold">About Us</a>
                        <a href="/" className="hover:text-blue-600 transition-colors">Services</a>
                        <a href="/shop" className="hover:text-blue-600 transition-colors">Products</a>
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
            <section className="relative pt-28 pb-24 bg-gradient-to-br from-zinc-900 to-black overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/2000/1200')] bg-cover bg-center opacity-30" />
                <div className="relative max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
                        About <span className="text-blue-500">Movantech</span>
                    </h1>
                    <p className="text-2xl text-blue-100 max-w-3xl mx-auto">
                        Empowering businesses with innovative IT solutions since 2018
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-semibold mb-8 leading-tight">
                                Your Trusted Technology Partner
                            </h2>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                Movantech Systems is a leading IT solutions provider based in Mumbai,
                                delivering premium hardware, software, and professional services to
                                businesses across India and the Middle East.
                            </p>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                From high-performance servers to complete cybersecurity solutions,
                                we help organizations stay ahead in the digital age with reliable,
                                scalable, and future-ready technology.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://picsum.photos/id/1015/800/600"
                                alt="Our Office"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-zinc-900">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-zinc-800/50 border border-zinc-700 p-10 rounded-3xl">
                            <h3 className="text-blue-400 text-xl font-medium mb-4">Our Mission</h3>
                            <p className="text-2xl leading-tight font-light">
                                To deliver innovative, reliable, and cost-effective IT solutions that
                                drive business growth and digital transformation.
                            </p>
                        </div>

                        <div className="bg-zinc-800/50 border border-zinc-700 p-10 rounded-3xl">
                            <h3 className="text-blue-400 text-xl font-medium mb-4">Our Vision</h3>
                            <p className="text-2xl leading-tight font-light">
                                To become the most preferred IT partner for enterprises seeking
                                excellence, trust, and long-term technological success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-zinc-950">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-semibold mb-4">Why Businesses Choose Movantech</h2>
                        <p className="text-zinc-400 text-xl">We don’t just sell technology — we deliver results</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "🚀", title: "Expert Consultation", desc: "Experienced professionals providing personalized IT solutions" },
                            { icon: "🔧", title: "End-to-End Support", desc: "From installation to maintenance and upgrades" },
                            { icon: "🏆", title: "Premium Quality", desc: "Only genuine products with official warranties" },
                            { icon: "🌍", title: "Pan India Presence", desc: "Fast delivery and service across India" },
                            { icon: "💼", title: "Corporate Trusted", desc: "Serving 200+ companies across various industries" },
                            { icon: "📞", title: "24×7 Support", desc: "Dedicated technical support whenever you need it" }
                        ].map((item, i) => (
                            <div key={i} className="bg-zinc-900 border border-zinc-800 hover:border-blue-600 p-10 rounded-3xl transition-all group">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-zinc-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/10 border-y border-zinc-800">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                    {[
                        { number: "500+", label: "Happy Clients" },
                        { number: "1200+", label: "Projects Completed" },
                        { number: "8", label: "Years of Excellence" },
                        { number: "15", label: "Cities Served" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <h3 className="text-6xl font-bold text-blue-500 mb-2">{stat.number}</h3>
                            <p className="text-zinc-400 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-zinc-950 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-5xl font-semibold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-zinc-400 text-xl mb-10">
                        Let’s discuss how we can help you with the right IT solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">

                        <button
                            onClick={() => navigate('/shop')}
                            className="px-12 py-6 border border-white/70 hover:bg-white/10 rounded-3xl text-xl font-semibold transition-all"
                        >
                            Explore Our Products
                        </button>
                    </div>
                </div>
            </section>

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

                        {/* Quick Links, Services, Products ... (same as before) */}
                        <div className="lg:col-span-2">
                            <h4 className="text-white font-semibold mb-5 text-lg">Quick Links</h4>
                            <ul className="space-y-3 text-zinc-400">
                                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                                <li><a href="/shop" className="hover:text-white transition-colors">Products</a></li>
                            </ul>
                        </div>

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

                        <div className="flex items-center gap-5">
                            <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors text-xl">𝕏</a>
                            <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors text-xl">in</a>
                            <a href="#" className="text-zinc-400 hover:text-blue-400 transition-colors text-xl">📸</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}