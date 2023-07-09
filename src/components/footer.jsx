//Images
import Notes from '../assets/notes.svg'
import Volume from '../assets/volume.svg'
import Wifi from '../assets/wifi.svg'
import Battery from '../assets/battery.svg'

function Footer() {
    return(
        <footer>
            <button>start</button>
            
            <nav>
                <li><img src={Notes} alt="Icone prise de note" className='footer_nav_button' /></li>
                <li>FR</li>
                <li><img src={Volume} alt="Icone volume" className='footer_nav_button' /></li>
                <li><img src={Wifi} alt="Icone wifi" className='footer_nav_button' /></li>
                <li><img src={Battery} alt="Icone batterie d'ordinateur" className='footer_nav_button' /></li>
                <li>Heure</li>
            </nav>

        </footer>
    )
}

export default Footer