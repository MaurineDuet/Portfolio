//Style
import '../../styles/main/music.scss'

//Images
import Pause from '../../assets/pause_icon.svg'
import Next from '../../assets/next_icon.svg'
import Previous from '../../assets/previous_icon.svg'

function Music() {
    return (
        <div className='music'>
            <h3>Musique</h3>

            <div className='music_main'>
                <div className="music_icons">
                    <img src={Previous} alt="Icone pause" />
                    <img src={Pause} alt="Icone pause" />
                    <img src={Next} alt="Icone pause" />
                </div>
                <p>Musique title</p>
            </div>

        </div>
    )
}
export default Music