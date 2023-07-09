import '../styles/basic.scss'
import '../styles/landing.scss'

import React from 'react'
import { Link } from 'react-router-dom'

//Images
import ComputerFrame from '../assets/frame.png'
import StarsBackground from '../assets/stars_background.jpeg'
import Wallpaper from '../assets/screen_wallpaper.jpg'
import ProfilePic from '../assets/astronaute.gif'
import Stars1 from '../assets/stars_1.svg'
import Stars2 from '../assets/stars_2.svg'

//Components
import Clouds from '../components/clouds'
import LandingFooter from '../components/landing_footer'

function Landing() {

      return (

            <div className='landing_container_overall'>

                  <Clouds></Clouds>

                  <div className='landing_container'>

                        <img src={ComputerFrame} alt="Cadre d'écran d'ordinateur" className='computer_frame' />

                        <div className='profile'>
                              <img src={StarsBackground} alt="Fond d'écran étoiles" className='stars_background' />
                              <img src={Wallpaper} alt="Fond d'écran dégradé rose et orange" className='wallpaper' />

                              <div className='stars'>
                                    <img src={Stars1} alt="Motifs étoiles" />
                                    <img src={Stars2} alt="Autre étoiles" />
                              </div>

                              <div className='profile_infos'>
                                    <img src={ProfilePic} alt="Dessin d'astronaute" />
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

            </div>
      )
}

export default Landing