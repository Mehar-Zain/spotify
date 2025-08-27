import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

    return (
        <>
            <Navbar />

            {/* Album Header */}
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img src={albumData.image} alt="img" className='w-48 rounded' />
                <div className='flex flex-col'>
                    <p className="uppercase text-sm">Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4 className="text-gray-300">{albumData.desc}</h4>
                    <p className='mt-1 text-sm text-gray-400 flex items-center gap-2'>
                        <img src={assets.spotify_logo} alt="logo" className='inline-block w-5' />
                        <b className="text-white">Spotify</b>
                        ● 1,323,154 Likes
                        ● <b>50 Songs</b>
                        about 2 hrs 30 mins
                    </p>
                </div>
            </div>

            {/* Table Header */}
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] text-sm font-semibold'>
                <p><b className='mr-4 ml-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date added</p>
                <img src={assets.clock_icon} alt="clock" className='m-auto w-4' />
            </div>
            <hr className="border-gray-700" />

            {/* Track List */}
            {songsData.map((item, index) => (
                <div
                    key={index}
                    onClick={() => playWithId(item.id)}
                    className='group grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded'
                >
                    {/* Number → Play Button on Hover */}
                    <div className="flex items-center">
                        <span className="w-6 text-right mr-4 group-hover:hidden">{index + 1}</span>
                        <button className="hidden group-hover:flex items-center justify-center bg-green-500 w-6 h-6 rounded-full mr-4">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                                alt="play"
                                className="w-3 h-3 invert"
                            />
                        </button>
                        <img src={item.image} alt="img" className='w-10 h-10 mr-4 rounded' />
                        <p className="text-white truncate">{item.name}</p>
                    </div>

                    <p className='text-[15px] truncate'>{albumData.name}</p>
                    <p className='text-[15px] hidden sm:block'>5 days ago</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))}
        </>
    )
}

export default DisplayAlbum
