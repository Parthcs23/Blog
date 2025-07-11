import React from 'react';
import logo from '../../assets/logo.png';
import { Outlet, useNavigate } from 'react-router-dom';
import Newsidebar from './Newsidebar';
import Bloglist from '../Bloglist';

const Newlayout = () => {
  const navigate = useNavigate();

  const logout=()=>{
    navigate('/')
  }

  return (
    <>
      <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
        <img src={logo} alt="" className='w-32 sm:w-40 cursor-pointer' onClick={() => navigate('/')} />
        
      <div className="flex justify-center mb-1">
        <form className="flex w-full max-w-xl border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search for blogs"
            className="w-full px-10 py-2 outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 hover:opacity-90 transition-all text-sm"
          >
            Search
          </button>
        </form>
      </div>
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>
          Logout
        </button>
      </div>
      <div className='flex h-[calc(100vh-70px)] overflow-hidden'>
        <Newsidebar />
        <div className='flex-1 overflow-y-auto'>
          <Outlet />
          <Bloglist />
        </div>
      </div>
    </>
  );
};

export default Newlayout;
