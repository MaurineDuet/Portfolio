//Style
import '../styles/responsivephone/phonemain.scss'

//Basic
import { Link } from 'react-router-dom'

//Images

//Header
import NetworkIcon from '../assets/networkIcon.svg'
import WifiIcon from '../assets/wifi.svg'
import BatteryIcon from '../assets/battery.svg'
import MessageIcon from '../assets/phone_main_msg.svg'
import ParametersIcon from '../assets/parameters_icon.svg'

//Main content
import FileIcon from '../assets/file.svg'
import AboutMe from '../assets/about_me_phone.svg'
import SwitchGirl from '../assets/girl_switch.jpg'
import PhoneGirl from '../assets/girl_phone.jpg'
import NotesIcon from '../assets/cv_notes_icon.svg'

//Error
import AlertIcon from '../assets/alert_icon.svg'


//Component 
import Music from '../components/main/music'

function MainPhone() {

    return (
        <div className="main_phone_container">

            <div className='redirection'>

                <h3>Error</h3>

                <div className='error_main_content'>

                    <div className='error_main_title'>
                        <img src={AlertIcon} alt="Icone qui indique une alerte" />
                        <h4>ERROR <br/> WRONG FORMAT</h4>
                    </div>
                    <p>Pour une meilleure expérience du site, cette page n'est accessible que pour les utilisateurs naviguant sur téléphone.
                        Si vous naviguez sur un autre appareil, veuillez cliquer sur le bouton ci-dessous !
                    </p>
                </div>

                <Link to="/main" className='redirection_button'>
                    Transfert. Scanner. <br/>
                    Virtualisation !
                </Link>

            </div>

            <div>

                <header className='phone_header'>
                    <div className='phone_main_icons_left'>
                        <img src={NetworkIcon} alt="Icone qui indique le réseau" />

                        <div className='phone_main_messages'>
                            <p>3</p>
                            <img src={MessageIcon} alt="Icone qui indique le réseau" />
                        </div>

                        <img src={ParametersIcon} alt="Icone qui indique le réseau" className='parameters_icon' />

                    </div>

                    <div className='phone_main_icons_right'>
                        <img src={BatteryIcon} alt="Icone qui indique la batterie" />
                        <img src={WifiIcon} alt="Icone qui indique la wifi" />
                    </div>
                </header>

                <div className='date_and_hour'>
                    <p>Date</p>
                    <p>Heure</p>
                </div>

                <section className='phone_main_content'>

                    <Link to="/persoprojects" className='phone_app'>
                        <img src={FileIcon} alt="Icone de dossier" />
                        Projets personnels
                    </Link>

                    <Link to="/formationprojects" className='phone_app'>
                        <img src={FileIcon} alt="Icone de dossier" />
                        Projets de formation
                    </Link>

                    <Link to="/cvphone" className='phone_app'>
                        <img src={AboutMe} alt="Icone de personnage" />
                        Mon CV
                    </Link>

                    <img src={PhoneGirl} alt="Dessin féminin en pixel art" className='girl_pic' />

                    <img src={SwitchGirl} alt="Icone de personnage" className='girl_pic' />

                    <Link to="/cvphone" className='phone_app'>
                        <img src={NotesIcon} alt="Icone de personnage" />
                        Mes notes
                    </Link>

                </section>

            </div>

            <Music></Music>

        </div>
    )
}

export default MainPhone