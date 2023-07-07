import '../styles/landing.scss'

//Images
import PowerIcon from '../assets/power_icon.svg'
import PowerOn from '../assets/power_on_light.svg'
import PowerOff from '../assets/power_off_light.svg'
import DiscBar from '../assets/disc_bar.png'
import Disquette from '../assets/disquette_icon.svg'
import Printer from '../assets/printer_icon.svg'

function LandingFooter() {
    return(
        <div className='landing_footer'>

        <div className='power_icons'>
              <img src={PowerIcon} alt="bouton power" />
              <img src={PowerOn} alt="bouton vert" style={{ height: "20px", paddingBottom: "5px" }} />
              <img src={PowerOff} alt="bouton rouge" style={{ height: "20px", paddingBottom: "5px" }} />
        </div>

        <img src={DiscBar} alt="barre pour cd" />

        <div className='utils_icons'>
              <img src={Disquette} alt="icone disquette" />
              <img src={Printer} alt="icone imprimante" />
        </div>

  </div>
    )
}

export default LandingFooter