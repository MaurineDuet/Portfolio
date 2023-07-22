//Style
import '../styles/basic.scss'
import '../styles/landing.scss'

//Basic
import React from 'react'
import { Link } from 'react-router-dom'

//Images
import ComputerFrame from '../assets/frame.png'
import PhoneFrame from '../assets/phone_frame.png'
import StarsBackground from '../assets/stars_background.jpeg'
import Wallpaper from '../assets/screen_wallpaper.jpg'
import ProfilePic from '../assets/astronaute.gif'
import Stars1 from '../assets/stars_1.svg'
import Stars2 from '../assets/stars_2.svg'
import CloudIcon from '../assets/cloud_icon_phone_landing.svg'

//Components
/* import Clouds from '../components/clouds' */
import LandingFooter from '../components/footer/landing_footer'

function Landing() {

      return (

            <div className='landing_container_overall'>

                  <div className='container'>

                        <div className='landing_main_frame'>

                              <img src={ComputerFrame} alt="Cadre d'écran d'ordinateur" className='computer_frame' />
                              <img src={PhoneFrame} alt="Cadre d'écran de téléphone" className='phone_frame' />

                              <div className='phone_logo'>
                                    <img src={CloudIcon} alt="Cadre d'écran de téléphone" />
                                    <p>LilacBerry</p>
                              </div>

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
                                          <Link to='/main' className='link_button'>
                                                mon univers
                                          </Link>
                                          <Link to='/cv' className='link_button'>
                                                mon CV
                                          </Link>
                                    </div>

                                    <div className='landing_buttons_phone'>
                                          <Link to='/mainphone' className='link_button'>
                                                mon univers
                                          </Link>
                                          <Link to='/cvphone' className='link_button'>
                                                mon CV
                                          </Link>
                                    </div>


                              </div>

                              <LandingFooter></LandingFooter>

                        </div>

                  </div>

            </div>
      )
}

export default Landing