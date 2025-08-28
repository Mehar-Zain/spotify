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
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end px-4">
                <img src={albumData.image} alt="img" className="w-40 sm:w-48 rounded" />
                <div className="flex flex-col">
                    <p className="uppercase text-sm">Playlist</p>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4 className="text-gray-300">{albumData.desc}</h4>
                    <p className="mt-1 text-sm text-gray-400 flex items-center gap-2 flex-wrap">
                        <img src={assets.spotify_logo} alt="logo" className="inline-block w-5" />
                        <b className="text-white">Spotify</b>
                        ● 1,323,154 Likes
                        ● <b>50 Songs</b>
                        about 2 hrs 30 mins
                    </p>
                </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-[40px_1fr_1fr] sm:grid-cols-[40px_3fr_2fr_1fr] md:grid-cols-[40px_3fr_2fr_1fr_1fr]
                      mt-10 mb-4 pl-2 pr-2 text-[#a7a7a7] text-sm font-semibold">
                <p className="text-center">#</p>
                <p>Title</p>
                <p>Album</p>
                <p className="hidden md:block">Date added</p>
                <img src={assets.clock_icon} alt="clock" className="hidden sm:block m-auto w-4" />
            </div>
            <hr className="border-gray-700" />

            {/* Track List */}
            {songsData.map((item, index) => (
                <div
                    key={index}
                    onClick={() => playWithId(item.id)}
                    className="group grid grid-cols-[40px_1fr_1fr] sm:grid-cols-[40px_3fr_2fr_1fr] md:grid-cols-[40px_3fr_2fr_1fr_1fr]
                     gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded"
                >
                    {/* Serial Number / Play Button */}
                    <div className="flex justify-center">
                        <span className="group-hover:hidden">{index + 1}</span>
                        <button className="hidden group-hover:flex items-center justify-center bg-green-500 w-6 h-6 rounded-full">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/727/727245.png"
                                alt="play"
                                className="w-3 h-3 invert"
                            />
                        </button>
                    </div>

                    {/* Title */}
                    <div className="flex items-center min-w-0">
                        <img src={item.image} alt="img" className="w-10 h-10 mr-2 sm:mr-4 rounded" />
                        <p className="text-white truncate">{item.name}</p>
                    </div>

                    {/* Album */}
                    <p className="text-[15px] truncate">{albumData.name}</p>

                    {/* Date Added */}
                    <p className="hidden md:block text-[15px]">5 days ago</p>

                    {/* Duration */}
                    <p className="hidden sm:block text-[15px] text-center">{item.duration}</p>
                </div>
            ))}
        </>
    )
}

export default DisplayAlbum
