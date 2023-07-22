//Style
import '../../styles/landing.scss'

//----- Images

//Computer version
import PowerIcon from '../../assets/power_icon.svg'
import PowerOn from '../../assets/power_on_light.svg'
import PowerOff from '../../assets/power_off_light.svg'
import DiscBar from '../../assets/disc_bar.png'
import Disquette from '../../assets/disquette_icon.svg'
import Printer from '../../assets/printer_icon.svg'

//Phone version
import PhoneIcon from '../../assets/phone_icon_phone_landing.svg'
import CloudIcon from '../../assets/cloud_icon_phone_landing.svg'
import CentralButton from '../../assets/phone_button_landing.svg'
import PhoneMenuIcon from '../../assets/menu_icon_phone_landing.svg'
import MessageIcon from '../../assets/message_icon_phone_landing.svg'

function LandingFooter() {
      
      return (
            <div className='landing_footer'>

                  <div className='power_icons'>
                        <img src={PowerIcon} alt="bouton power" />
                        <img src={PowerOn} alt="bouton vert" style={{ height: "20px", paddingBottom: "5px" }} />
                        <img src={PowerOff} alt="bouton rouge" style={{ height: "20px", paddingBottom: "5px" }} />
                  </div>

                  <img src={DiscBar} alt="barre pour cd" className='cd_bar'/>

                  <div className='utils_icons'>
                        <img src={Disquette} alt="icone disquette" />
                        <img src={Printer} alt="icone imprimante" />
                  </div>

                  {/* Version téléphone */}
                  
                  <div className='phone_icons_left'>
                        <img src={PhoneIcon} alt="bouton power" />
                        <img src={CloudIcon} alt="logo nuage" />
                  </div>

                  <img src={CentralButton} alt="Bouton de téléphone" className='central_button' />

                  <div className='phone_icons_right'>
                        <img src={PhoneMenuIcon} alt="bouton menu" />
                        <img src={MessageIcon} alt="icône message" />
                  </div>

            </div>
      )
}

export default LandingFooter