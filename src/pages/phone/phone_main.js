//Style
import '../../styles/responsivephone/phone_main.scss'
import '../../styles/error.scss'

//Basic
import { Link } from 'react-router-dom'
import { useFetchMusic } from '../../hooks/fetch_music'

//Images
import FileIcon from '../../assets/file.svg'
import AboutMe from '../../assets/about_me_phone.svg'
import SwitchGirl from '../../assets/girl_switch.jpg'
import PhoneGirl from '../../assets/girl_phone.jpg'
import NotesIcon from '../../assets/cv_notes_icon.svg'

//Component 
import ErrorPhone from '../../components/error/error_phone_version'
import PhoneHeader from '../../components/phoneresponsive/phone_header'
import Music from '../../components/main/music'

function MainPhone() {

    //Musique

    const { songs, songsError } = useFetchMusic('db/music.json');
    console.log(songs)

    // Gestion des erreurs pour la musique et pour les données des projets

    if (!songs) {
      return <span>Loading...</span>; // Display a loading message or spinner
    }
  
    if (songsError) {
      return <span>Error fetching songs data.</span>; // Display an error message
    }


    return (
        <div className="main_phone_container">

            <ErrorPhone></ErrorPhone>

            <div className='phone_header_and_main_content'>

                <PhoneHeader></PhoneHeader>

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

                    <Link to="/phonenotes" className='phone_app'>
                        <img src={NotesIcon} alt="Icone de personnage" />
                        Mes notes
                    </Link>

                </section>

            </div>

            <Music songs={songs} ></Music>

        </div>
    )
}

export default MainPhone