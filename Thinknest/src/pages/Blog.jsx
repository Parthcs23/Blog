import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'

const Blog = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const fetchBlogData = async () => {
    const found = blog_data.find((item) => item._id === id)
    setData(found)
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#e6e4f4] to-[#f9f6ff]">
        <div className="flex gap-2 animate-pulse">
          <div className="w-3 h-3 rounded-full bg-[#6945BA]"></div>
          <div className="w-3 h-3 rounded-full bg-[#9a79e6]"></div>
          <div className="w-3 h-3 rounded-full bg-[#d4c9f5]"></div>
        </div>
      </div>
    )
  }

  const { title, subtitle, image, description, createdAt, category } = data

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f6ff] to-white text-gray-800">
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 -z-10"
      />

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Image + Info */}
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-3xl shadow-xl border border-gray-200">
            <img src={image} alt={title} className="w-full object-cover" />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <span className="inline-block px-4 py-1 text-sm font-medium text-[#6945BA] bg-[#efeaff] rounded-full w-fit shadow-sm">
              {category}
            </span>
            <p className="text-sm text-gray-500 italic">
              {Moment(createdAt).format('MMMM Do YYYY')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="https://i.pravatar.cc/100?img=18"
                alt="author"
                className="w-10 h-10 rounded-full border border-white shadow-sm"
              />
              <span className="text-sm font-semibold text-gray-700">
                Michael Brown
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium ${
                  liked
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {liked ? '♥ Liked' : '♡ Like'}
              </button>
              <button
                onClick={() => setSaved(!saved)}
                className={`flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium ${
                  saved
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {saved ? 'Saved' : 'Save'}
              </button>
            </div>

            {/* You can add a separate image here if needed */}
            {/* <img src="YOUR_IMAGE_URL_HERE" alt="extra" className="rounded-xl mt-4" /> */}
          </div>
        </div>

        {/* Right: Blog Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#2c2258] mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl text-gray-600 mb-6">
              {subtitle}
            </p>
          )}
          <div
            className="prose prose-lg max-w-none prose-p:text-gray-800 prose-headings:text-[#6945BA] prose-a:text-[#6945BA] prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Blog
