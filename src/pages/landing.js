import '../styles/basic.scss'
import '../styles/landing.scss'

import React from 'react'
import { Link } from 'react-router-dom'

//Images
import ComputerFrame from '../assets/frame.png'
import StarsBackground from '../assets/stars_background.jpeg'
import ProfilePic from '../assets/astronaute.gif'
import Stars1 from '../assets/stars_1.svg'
import Stars2 from '../assets/stars_2.svg'

//Footer
import LandingFooter from '../components/landing_footer'

function Landing() {

      return (
            <div className='landing_container'>

                  <img src={ComputerFrame} alt="écran d'ordinateur" className='computer_frame' />

                  <div className='profile'>
                        <img src={StarsBackground} alt="fond d'écran étoiles" className='stars_background' />

                        <div className='stars'>
                        <img src={Stars1} alt="" />
                        <img src={Stars2} alt="" />
                        </div>

                        <div className='profile_infos'>
                              <img src={ProfilePic} alt="dessin d'astronaute" />
                              <h2>Maurine Duet</h2>
                        </div>

                        <div className='landing_buttons'>
                              <Link to='/cv' className='link_button' style={{ backgroundColor: "#C2DCFF" }}>
                                    mon CV
                              </Link>
                              <Link to='/universe' className='link_button' style={{ backgroundColor: "#C2DCFF" }}>
                                    mon univers
                              </Link>
                        </div>

                  </div>



                  <LandingFooter></LandingFooter>

            </div>
      )
}

export default Landing