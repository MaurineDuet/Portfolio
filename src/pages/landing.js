import '../styles/basic.scss'
import '../styles/landing.scss'

//Images
import ComputerFrame from '../assets/frame.png'
import StarsBackground from '../assets/stars_background.jpeg'
import ProfilePic from '../assets/astronaute.gif'

//Boutons
import Button from '../components/button'

//Footer
import LandingFooter from '../components/landing_footer'

function Landing() {

      return (
            <div className='landing_container'>

                  <img src={ComputerFrame} alt="écran d'ordinateur" className='computer_frame' />

                  <div className='profile'>
                        <img src={StarsBackground} alt="fond d'écran étoiles" className='stars_background' />

                        <div className='profile_infos'>
                              <img src={ProfilePic} alt="dessin d'astronaute" />
                              <h2>Maurine Duet</h2>
                        </div>

                        <div className='landing_buttons'>
                        <Button></Button>
                        <Button></Button>
                  </div>
                  
                  </div>



                  <LandingFooter></LandingFooter>

            </div>
      )
}

export default Landing