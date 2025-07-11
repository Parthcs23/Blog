import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import Blogtable from '../../components/admin/Blogtable'

const Listblog = () => {

  const [blogs, setblogs] = useState([])

  const fetchBlogs = async () => {
    setblogs(blog_data)
  }

  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1>All blogs</h1>
      <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-600 text-left uppercase'>
            <tr>
              <th scope='col' className='px-2 py-4'>#</th>
              <th scope='col' className='px-2 py-4'>Blog title</th>
              <th scope='col' className='px-2 py-4'>Date</th>
              <th scope='col' className='px-2 py-4'>Status</th>
              <th scope='col' className='px-2 py-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return <Blogtable key={blog._id} blog={blog} fetchblogs={fetchBlogs} index={index + 1} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Listblog