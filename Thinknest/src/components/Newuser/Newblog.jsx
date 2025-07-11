import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const Newblog = () => {
  const [image,setimage]=useState(false)
  const [title,setTitle]=useState('')
  const [subtitle,setsubtitle]=useState('')
  const [category,setcategory]=useState('Startup')
  const [ispublished,setispublished]=useState(false)

  const onSubmithandler = async(e)=>{
    e.preventDefault();
  }
  return (
    <form onSubmit={onSubmithandler} className='flex-1 bg-purple-50/50 text-gray-600 h-full overflow-scroll'>
        <div className='bg-white w-full max-w-3xl p- md:p-10 sm:m-10 shadow rounded'>

          <p>Upload thumbnail</p>
          <label htmlFor="image">
            <img src={assets.upload_area} className='mt-2 h-16 rounded cursor-pointer' alt="" />
            <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' hidden required />
          </label>

          <p className='mt-4'>Blog title</p>
          <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={(e)=>setTitle(e.target.value)}  value={title} />
        </div>
    </form>
  )
}

export default Newblog