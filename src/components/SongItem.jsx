import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({ name, image, desc, id }) => {
    const { playWithId } = useContext(PlayerContext);

    return (
        <div
            onClick={() => playWithId(id)}
            className='relative group min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors duration-300'
        >
            {/* Album Art with Bottom-Right Play Button Overlay */}
            <div className="relative">
                <img src={image} alt="Song cover" className='rounded' />

                <div
                    className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/26/26025.png"
                        alt="play"
                        className="w-12 h-12 rounded-full bg-green-500 p-2 drop-shadow-lg"
                    />
                </div>
            </div>

            {/* Song Info */}
            <p className='font-bold mt-2 mb-1'>{name}</p>
            <p className='text-slate-200 text-sm'>{desc}</p>
        </div>
    )
}

export default SongItem
