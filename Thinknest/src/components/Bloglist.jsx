import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import Blogcards from './Blogcards'

const Bloglist = () => {
    const [menu, setMenu] = useState("All")

    return (
        <div>
            <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
                {blogCategories.map((items) => (
                    <div key={items} className='relative'>
                        <button
                            onClick={() => setMenu(items)}
                            className={`cursor-pointer text-black ${menu === items && 'text-white px-4 pt-0.5'}`}
                        >
                            {items}
                            {menu===items &&(
                                <div className='absolute left-0 right-0 top-0 h-7 z-[-1] bg-primary rounded-full'></div>
                            )}
                        </button>
                    </div>
                ))}
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
                {/*blog cards*/}
                {blog_data.filter((blog)=>menu === "All"?true:blog.category===menu).map((blog)=><Blogcards key={blog._id} blog={blog}/>)}
            </div>
        </div>
    )
}

export default Bloglist
