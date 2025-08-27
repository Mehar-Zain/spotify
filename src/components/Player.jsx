import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {
    const {
        track, seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong,
        volume, changeVolume
    } = useContext(PlayerContext);

    const formatTime = (minutes, seconds) => {
        if (isNaN(minutes) || isNaN(seconds)) return "00:00";
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
                <img src={track.image} alt="0" className='w-12' />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 25)}</p>
                </div>
            </div>
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img src={assets.shuffle_icon} alt="shuffle" className='w-4 cursor-pointer hover:opacity-80' />
                    <img onClick={previous} src={assets.prev_icon} alt="previous" className='w-4 cursor-pointer hover:opacity-80' />
                    {!playStatus ?
                        <img onClick={play} src={assets.play_icon} alt="play" className='w-4 cursor-pointer hover:opacity-80' /> :
                        <img onClick={pause} src={assets.pause_icon} alt="pause" className='w-4 cursor-pointer hover:opacity-80' />
                    }
                    <img onClick={next} src={assets.next_icon} alt="next" className='w-4 cursor-pointer hover:opacity-80' />
                    <img src={assets.loop_icon} alt="loop" className='w-4 cursor-pointer hover:opacity-80' />
                </div>
                <div className='flex items-center gap-5'>
                    <p>{formatTime(time.currentTime.minutes, time.currentTime.seconds)}</p>
                    <div onClick={seekSong} ref={seekBg} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
                    </div>
                    <p>{formatTime(time.totalTime.minutes, time.totalTime.seconds)}</p>
                </div>
            </div>
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img src={assets.plays_icon} alt="plays" className='w-4 cursor-pointer hover:opacity-80' />
                <img src={assets.mic_icon} alt="mic" className='w-4 cursor-pointer hover:opacity-80' />
                <img src={assets.queue_icon} alt="queue" className='w-4 cursor-pointer hover:opacity-80' />
                <img src={assets.speaker_icon} alt="speaker" className='w-4 cursor-pointer hover:opacity-80' />
                <img src={assets.volume_icon} alt="volume" className='w-4 cursor-pointer hover:opacity-80' />
                {/* Real volume slider */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={(e) => changeVolume(e.target.value)}
                    className="w-20 h-1 cursor-pointer accent-green-600"
                />
                <img src={assets.mini_player_icon} alt="mini-player" className='w-4 cursor-pointer hover:opacity-80' />
                <img src={assets.zoom_icon} alt="zoom" className='w-4 cursor-pointer hover:opacity-80' />
            </div>
        </div>
    )
}

export default Player
