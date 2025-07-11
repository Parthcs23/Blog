import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();



  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F4F0FF] to-[#FCFBFF] px-4">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-primary/10 p-10 sm:p-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-primary mb-2">Login</h1>
          <p className="text-gray-600 text-sm">Login to your account</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl text-sm font-medium transition"
          >
            Login
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            New here?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-primary font-medium hover:underline"
            >
              Create Account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
