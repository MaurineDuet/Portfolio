//Style
import '../../styles/main/music.scss'

//Images
import Pause from '../../assets/pause_icon.svg'
import Play from '../../assets/play_icon.svg'
import Next from '../../assets/next_icon.svg'
import Previous from '../../assets/previous_icon.svg'

//Basic
import { useState, useEffect, useRef } from 'react'


function Music({ songs }) {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElementRef = useRef(null)

    useEffect(() => {
        // Create or update the audio element on component mount or song change
        if (!audioElementRef.current) {
            audioElementRef.current = new Audio(songs[currentSongIndex].url);
        } else {
            const audioElement = audioElementRef.current;
            audioElement.pause();
            audioElement.src = songs[currentSongIndex].url;
            audioElement.load();
        }

        // Clean up the audio element on component unmount
        return () => {
            if (audioElementRef.current) {
                audioElementRef.current.pause();
                audioElementRef.current.src = '';
                audioElementRef.current.load();
            }
        };
    }, [currentSongIndex, songs]);

    useEffect(() => {
        // Update the play/pause status whenever the isPlaying state changes
        if (audioElementRef.current) {
            if (isPlaying) {
                audioElementRef.current.play().catch((error) => {
                    // Handle the error if any
                    console.error('Error playing audio:', error);
                });
            } else {
                audioElementRef.current.pause();
            }
        }
    }, [isPlaying])

    const playPauseHandler = () => {
        const audioElement = audioElementRef.current;
        if (!audioElement) return;

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play().catch((error) => {
                // Handle the error if any
                console.error('Error playing audio:', error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    const skipNextHandler = () => {
        if (audioElementRef.current) {
            const audioElement = audioElementRef.current;
            audioElement.pause(); // Pause the current song
            audioElement.currentTime = 0
            setIsPlaying(false)
        }
        setTimeout(() => {
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length); // Use modulo to loop back to the first song if at the end
            setIsPlaying(true); // Start playing the new song
        }, 100);
    };

    const skipPrevHandler = () => {
        if (audioElementRef.current) {
            const audioElement = audioElementRef.current;
            audioElement.pause(); // Pause the current song
            audioElement.currentTime = 0
            setIsPlaying(false)
        }
        setTimeout(() => {
            setCurrentSongIndex(
                (prevIndex) => (prevIndex - 1 + songs.length) % songs.length // Use modulo to loop back to the last song if at the beginning
            );
            setIsPlaying(true); // Start playing the new song
        }, 100)
    }

    const [volume, setVolume] = useState(0.5); // Default volume is set to 0.5 (50%)

    const volumeChangeHandler = (event) => {
        const newVolume = parseFloat(event.target.value);
        if (audioElementRef.current) {
            audioElementRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    };

    return (
        <div className='music'>
            <h3>Musique</h3>

            <div className='music_main'>

                <div className="music_icons">
                    <button onClick={skipPrevHandler}>
                        <img src={Previous} alt="Icone pause" />
                    </button>
                    <button onClick={playPauseHandler}>
                        {isPlaying ? <img src={Pause} alt="Icone pause" /> : <img src={Play} alt="Icone play" />}
                    </button>
                    <button onClick={skipNextHandler}>
                        <img src={Next} alt="Icone pause" />
                    </button>

                </div>

                <p>{songs[currentSongIndex].title} - {songs[currentSongIndex].artist}</p>

                <div className="volume_control">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={volumeChangeHandler}
                    />
                </div>

            </div>



        </div>
    )
}


export default Music