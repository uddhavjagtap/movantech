// import React, { useState } from 'react';
// import { CartProvider } from './context/CartContext';
// import Navbar from './components/Navbar';
// import AdminLogin from './pages/AdminLogin';
// import CartSidebar from './components/CartSidebar';
// import Home from './pages/home';


// function App() {
//   const [page, setPage] = useState('home');

//   return (
//     <CartProvider>
//       <div className="min-h-screen bg-zinc-50">
//         <Navbar setPage={setPage} />
        
//         {page === 'home' && <Home />}
//         {page === 'admin' && <AdminLogin setPage={setPage} />}
        
//         <CartSidebar />
//       </div>
//     </CartProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

import CorporateHome from './pages/CorporateHome';
import Shop from './pages/Shop';
import AdminLogin from './pages/AdminLogin';
import CartSidebar from './components/CartSidebar';
import AdminDashboard from './pages/AdminDashboard';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            <Route path="/" element={<CorporateHome />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Routes>

          {/* Cart Sidebar - Global */}
          <CartSidebar />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;