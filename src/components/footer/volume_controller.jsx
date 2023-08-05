import SoundOff from '../../assets/sound_off_icon.svg'
import SoundOn from '../../assets/sound_on_icon.svg'

function VolumeController({ volume, setVolume, audioElementRef }) {

    const volumeChangeHandler = (event) => {
        const newVolume = parseFloat(event.target.value);
        if (audioElementRef.current) {
            audioElementRef.current.volume = newVolume;
        }
        setVolume(newVolume);
    };

    const setVolumeToZero = () => {
        if (audioElementRef.current) {
            audioElementRef.current.volume = 0;
        }
        setVolume(0);
    };

    const setVolumeToOne = () => {
        if (audioElementRef.current) {
            audioElementRef.current.volume = 1;
        }
        setVolume(1);
    };

    return (
        <div className="volume_control">
           <img src={SoundOff} alt="" onClick={setVolumeToZero} />
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={volumeChangeHandler}
            />
            <img src={SoundOn} alt="" onClick={setVolumeToOne} />
        </div>
    )
}

export default VolumeController