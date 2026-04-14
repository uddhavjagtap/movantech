import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        // Success - Redirect to Admin Dashboard
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials! Please use: admin / 1234');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-10 w-full max-w-md shadow-2xl">
        
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-zinc-500 hover:text-zinc-700 mb-6 text-sm font-medium"
        >
          ← Back to Home
        </button>

        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-3xl mx-auto flex items-center justify-center text-5xl mb-4">
            🔐
          </div>
          <h2 className="text-3xl font-semibold text-zinc-900">Admin Portal</h2>
          <p className="text-zinc-500 mt-2">Sign in to access dashboard</p>
        </div>

        {/* Error Message Popup */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl mb-6 text-sm flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-6 py-4 border border-zinc-200 rounded-2xl mb-4 focus:outline-none focus:border-indigo-500"
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-6 py-4 border border-zinc-200 rounded-2xl mb-6 focus:outline-none focus:border-indigo-500"
        />
        
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white rounded-2xl font-medium text-lg transition-all flex items-center justify-center"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin">⟳</span> Signing in...
            </span>
          ) : (
            'Sign In'
          )}
        </button>

        <p className="text-center text-xs text-zinc-400 mt-8">
          Demo Credentials: <strong>admin</strong> / <strong>1234</strong>
        </p>
      </div>
    </div>
  );
}