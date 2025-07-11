import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import Blogtable from '../../components/admin/Blogtable'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate();

    const [dashboardData, setdashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentblogs: []
    })

    const fetchdata = async () => {
        setdashboardData(dashboard_data)
    }

    useEffect(() => {
        fetchdata()
    }, [])


    return (
        <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
            <div className='flex flex-wrap gap-4'>
                <div onClick={()=>navigate('/admin/listblog')} className='flex items-center gap-4 bg-white p-4 min-w-58 rounded-shadow cursor-pointer hover:scale-105 transition-all'>
                    <img src={assets.dashboard_icon_1} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
                        <p className='text-gray font-light'>Blogs</p>
                    </div>
                </div>

                <div onClick={()=>navigate('/admin/comments')} className='flex items-center gap-4 bg-white p-4 min-w-58 rounded-shadow cursor-pointer hover:scale-105 transition-all'>
                    <img src={assets.dashboard_icon_2} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
                        <p className='text-gray font-light'>Comments</p>
                    </div>
                </div>

                 <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded-shadow cursor-pointer hover:scale-105 transition-all'>
                    <img src={assets.dashboard_icon_3} alt="" />
                    <div>
                        <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
                        <p className='text-gray font-light'>Drafts</p>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <img src={assets.dashboard_icon_4} alt="" className='flex items-center gap-3 m-4 mt-6 text-gray-600' />
                    <p>Latest Blogs</p>
                </div>
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
                            {dashboardData.recentblogs.map((blog,index)=>{
                                return <Blogtable key={blog._id} blog={blog} fetchblogs={fetchdata} index={index+1}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>   
        </div>
    )
}

export default Dashboard