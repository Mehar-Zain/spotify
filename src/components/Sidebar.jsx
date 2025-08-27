import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
            {/* Top section */}
            <div className='bg-[#121212] h-[15%] flex flex-col rounded justify-around'>
                <div
                    onClick={() => navigate("/")}
                    className='flex items-center gap-3 pl-8 cursor-pointer hover:bg-gray-700 py-2 rounded'
                >
                    <img className='w-6' src={assets.home_icon} alt="Home" />
                    <p className='font-bold'>Home</p>
                </div>
                <div
                    onClick={() => navigate("/search")}
                    className='flex items-center gap-3 pl-8 cursor-pointer hover:bg-gray-700 py-2 rounded'
                >
                    <img className='w-6' src={assets.search_icon} alt="Search" />
                    <p className='font-bold'>Search</p>
                </div>
            </div>

            {/* Library section */}
            <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img src={assets.stack_icon} alt="stack" className='w-8' />
                        <p className='font-semibold'>Your Library</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={assets.arrow_icon} alt="arrow" className='w-5 cursor-pointer hover:opacity-80' />
                        <img src={assets.plus_icon} alt="plus" className='w-5 cursor-pointer hover:opacity-80' />
                    </div>
                </div>

                {/* Create Playlist Card */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 hover:bg-gray-700 cursor-pointer'>
                    <h1>Create your first playlist</h1>
                    <p className='font-light '>It's easy, we will help you</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:opacity-80'>
                        Create Playlist
                    </button>
                </div>

                {/* Browse Podcasts Card */}
                <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4 hover:bg-gray-700 cursor-pointer'>
                    <h1>Let's find some podcast to follow</h1>
                    <p className='font-light '>We'll keep you updated on new episodes</p>
                    <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4 hover:opacity-80'>
                        Browse Podcasts
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
