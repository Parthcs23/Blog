import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Newsidebar = () => {
  const [userName, setUserName] = useState("Profile");


  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
      <NavLink end={true} to='/user' className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
        ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src={assets.home_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block '>Dashboard</p>
      </NavLink>

      <NavLink end={true} to='/user/newblog' className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
        ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src={assets.add_icon} alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block '>Add blog</p>
      </NavLink>

      <NavLink end={true} to='/user/liked' className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
        ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIinHwbvQRwfDMWYZ3OT4jSSxx3585fTdaQEnA5MTp5zk68337v-NI8yr7sxArvNbdnAI&usqp=CAU' alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block '>Liked</p>
      </NavLink>

      <NavLink end={true} to='/user/saved' className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
        ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src="data:image/png;base64,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" alt="" className='min-w-4 w-5' />
        <p className='hidden md:inline-block '>Saved</p>
      </NavLink>

      <NavLink end={true} to='/userprofile' className={({ isActive }) => `flex fixed bottom-2 left-0 items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer
        ${isActive && "bg-primary/10 border-r-4 border-primary"}`}>
        <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className='w-8 h-8' />
        <p className='hidden md:inline-block '>{userName}</p>
      </NavLink>
    </div>
  );
};

export default Newsidebar;
