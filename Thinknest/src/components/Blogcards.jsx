import React from 'react'
import { useNavigate } from 'react-router-dom'

const Blogcards = ({ blog }) => {
  const { title, description, category, image, _id } = blog
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 text-xs bg-primary/20 text-primary rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="p-6 space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 leading-snug line-clamp-2">
          {title}
        </h3>
        <p
          className="text-sm text-gray-600 leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 150) }}
        ></p>
      </div>

      <div className="px-6 pb-4 pt-2">
        <button className="text-primary text-sm font-medium hover:underline">
          Read more →
        </button>
      </div>
    </div>
  )
}

export default Blogcards
