import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ id, name, image, desc }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/album/${id}`)}
            className='relative group min-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors duration-300'
        >
            {/* Album Art */}
            <div className="relative">
                <img src={image} alt={name} className='rounded' />

                {/* Green Circular Background with Icon */}
                <div
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <div className="bg-green-500 rounded-full p-3 shadow-lg hover:scale-105 transition-transform duration-200">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/727/727218.png"
                            alt="music note"
                            className="w-6 h-6 invert"
                        />
                    </div>
                </div>
            </div>

            {/* Album Info */}
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    )
}

export default AlbumItem
