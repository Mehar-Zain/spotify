import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
    // inside PlayerContextProvider
    const [volume, setVolume] = useState(100); // default 100%

    // change volume when slider moves
    const changeVolume = (value) => {
        if (!audioRef.current) return;
        audioRef.current.volume = value / 100; // audio API expects 0–1
        setVolume(value);
    };

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime: { seconds: 0, minutes: 0 },
        totalTime: { seconds: 0, minutes: 0 },
    });

    const play = async () => {
        try {
            await audioRef.current.play();
            setPlayStatus(true);
        } catch (err) {
            console.error("Playback failed:", err);
        }
    };

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

    const playWithId = (id) => {
        if (!songsData[id]) return; // safety check

        setTrack(songsData[id]); // state update
    };

    const previous = () => {
        const currentIndex = songsData.findIndex(song => song.id === track.id);
        if (currentIndex > 0) {
            setTrack(songsData[currentIndex - 1]);
        }
    };

    const next = () => {
        const currentIndex = songsData.findIndex(song => song.id === track.id);
        if (currentIndex < songsData.length - 1) {
            setTrack(songsData[currentIndex + 1]);
        }
    };


    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    // When track changes → auto-play
    useEffect(() => {
        if (track && audioRef.current) {
            play();
        }
    }, [track]);

    // Update progress bar + time
    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.ontimeupdate = () => {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration || 0;

            if (seekBar.current) {
                seekBar.current.style.width = `${Math.floor((current / duration) * 100)}%`;
            }

            setTime({
                currentTime: {
                    seconds: Math.floor(current % 60),
                    minutes: Math.floor(current / 60),
                },
                totalTime: {
                    seconds: Math.floor(duration % 60),
                    minutes: Math.floor(duration / 60),
                },
            });
        };
    }, []);

    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        track,
        setTrack,
        time,
        setTime,
        playStatus,
        setPlayStatus,
        play,
        pause,
        playWithId,
        previous,
        next,
        seekSong,
        volume,
        changeVolume
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
