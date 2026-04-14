import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">Welcome Back, Admin</h1>
            <p className="text-emerald-400 mt-2">Movantech Admin Dashboard</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-2xl text-sm font-medium"
          >
            ← Back to Home
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <p className="text-zinc-400">Total Products</p>
            <p className="text-6xl font-bold mt-4">48</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <p className="text-zinc-400">Orders Today</p>
            <p className="text-6xl font-bold mt-4 text-emerald-400">12</p>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl">
            <p className="text-zinc-400">Revenue</p>
            <p className="text-6xl font-bold mt-4">₹2,45,890</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Recent Products</h2>
        
        {/* Simple Table */}
        <div className="bg-zinc-900 rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left p-6">Product Name</th>
                <th className="text-left p-6">Price</th>
                <th className="text-left p-6">Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-700">
                <td className="p-6">Wireless Headphones</td>
                <td className="p-6">₹2,499</td>
                <td className="p-6 text-emerald-400">In Stock</td>
              </tr>
              <tr className="border-b border-zinc-700">
                <td className="p-6">Smart Watch Ultra</td>
                <td className="p-6">₹3,299</td>
                <td className="p-6 text-emerald-400">In Stock</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12 text-zinc-500 text-sm">
          This is a demo admin dashboard
        </div>
      </div>
    </div>
  );
}