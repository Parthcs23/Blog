import React, { useEffect, useState } from 'react';
import Newsidebar from './Newsidebar';
import { useNavigate } from 'react-router-dom';

const Newprofile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <Newsidebar />

      <div className="flex-1 py-12 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-purple-500 shadow-md"
            />

            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-800">
                {user?.name || "Your Name"}
              </h1>
              <p className="text-gray-500 text-sm italic">
                Web Developer. Writing code & content. Lover of coffee ☕
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-semibold text-gray-800">Your Blogs</h2>
            <button
              onClick={() => navigate('/user/newblog')}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium rounded-full shadow-lg hover:scale-105 transition"
            >
              + Create New Blog
            </button>
          </div>

          <div className="mt-6 grid gap-5">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 flex justify-between items-center hover:shadow-lg transition">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">How to Use React with Tailwind</h3>
                <p className="text-sm text-gray-500 mt-1">Posted on July 9, 2025</p>
              </div>
              <div className="flex gap-2">
                <button className="text-sm px-4 py-1 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition font-medium">
                  Edit
                </button>
                <button className="text-sm px-4 py-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newprofile;
