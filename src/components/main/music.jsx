//Style
import '../../styles/main/music.scss'

//Images
import Pause from '../../assets/pause_icon.svg'
import Play from '../../assets/play_icon.svg'
import Next from '../../assets/next_icon.svg'
import Previous from '../../assets/previous_icon.svg'
/* import SoundOn from '../../assets/sound_on_icon.svg'
import SoundOff from '../../assets/sound_off_icon.svg' */

//Basic
import { useState, useEffect } from 'react'


function Music({ songs, audioElementRef }) {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioReady, setAudioReady] = useState(false)

    //Audio element creation

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
    }, [currentSongIndex, songs, audioElementRef]);

    // Update the audioReady state when the audio element is loaded
    useEffect(() => {
        const audioElement = audioElementRef.current;
      
        const handleLoadedMetadata = () => {
          setAudioReady(true);
        };
      
        if (audioElement) {
          audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      
          // Handle the case when audio is not ready
          setAudioReady(audioElement.readyState === 4);
      
          return () => {
            audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
          };
        }
      }, [audioElementRef]);
      
    //Play and pause mecanism

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
    }, [isPlaying, audioElementRef]);

    //Changing the song's timing

    useEffect(() => {
        // Rest of the code remains the same

        // Attach the event listener for the timeupdate event to update the currentTime
        const handleTimeUpdate = () => {
            if (audioElementRef.current) {
                setCurrentTime(audioElementRef.current.currentTime);
            }
        };

        if (audioElementRef.current) {
            audioElementRef.current.addEventListener('timeupdate', handleTimeUpdate);
        }

        return () => {
            if (audioElementRef.current) {
                audioElementRef.current.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, [audioElementRef])

    //Triggering the time changing with parseFloat

    const onSeekBarChange = (event) => {
        const seekTime = parseFloat(event.target.value);
        if (audioElementRef.current) {
            audioElementRef.current.currentTime = seekTime;
        }
        setCurrentTime(seekTime);
    }

    //Formating time

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }


    //Attempt to play songs automatically without user action

    useEffect(() => {
        // Handle the onEnded event to play the next song automatically
        const handleAudioEnded = () => {
            setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length); // Use modulo to loop back to the first song if at the end
            /*          playPauseHandler() */
        };

        // Attach the event listener for the onEnded event
        if (audioElementRef.current) {
            audioElementRef.current.addEventListener('ended', handleAudioEnded);
        }

        // Clean up the event listener on component unmount
        return () => {
            if (audioElementRef.current) {
                audioElementRef.current.removeEventListener('ended', handleAudioEnded);
            }
        };
    }, [currentSongIndex, songs, audioElementRef]);

    //Button play/pause

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

    //Button next

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

    //Button pause

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

                <div className='seek_bar'>
                    <p>{formatTime(currentTime)}</p>
                    <input
                        type='range'
                        min='0'
                        max={audioReady ? audioElementRef.current.duration : 0}
                        step='0.01'
                        value={currentTime}
                        onChange={onSeekBarChange}
                    />
                    <p>{audioReady ? formatTime(audioElementRef.current.duration) : 'OO:OO'}</p>
                </div>

            </div>

        </div>
    )
}


export default Music