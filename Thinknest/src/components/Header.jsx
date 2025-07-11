import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="relative px-6 sm:px-16 xl:px-24 py-34 sm:py-16 h-auto bg-white">
      
      {/* AI Feature Badge Centered */}
      <div className="flex justify-center -mt-14">
        <div className="flex items-center gap-2 px-4 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm">
          <img src={assets.star_icon} alt="" className="w-3" />
          <span>AI Writing Assistant Enabled</span>
        </div>
      </div>

      {/* Search Bar Centered
      <div className="flex justify-center mb-12">
        <form className="flex w-full max-w-xl border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search for blogs, topics or keywords"
            className="w-full px-5 py-2 outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 hover:opacity-90 transition-all text-sm"
          >
            Search
          </button>
        </form>
      </div> */}

      {/* Headline */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 leading-tight mt-10">
          Discover, Write & Share <br />
          With <span className="text-primary">Thinknest</span>
        </h1>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mt-5">
          Explore thoughts, knowledge, and creativity — your blog, your story. Stay curious and write bold.
        </p>
      </div>

      {/* Background Gradient */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute top-0 left-0 w-full opacity-30 -z-10"
      />
    </div>
  )
}

export default Header
