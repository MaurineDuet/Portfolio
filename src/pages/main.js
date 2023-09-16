//Style
import '../styles/main/main.scss'
import '../styles/main/projects.scss'
import '../styles/main/notes.scss'
import '../styles/error.scss'

//Basic
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

//Components
/* import ErrorPc from '../components/error/error_pc_version' */
import Projects from '../components/main/projects'
import Project from '../components/main/project'
import Footer from '../components/footer/footer'
import Notes from '../components/main/notes'
import Note from '../components/main/note'
import Music from '../components/main/music'
import Modal from '../components/main/modal'
import Bin from '../components/main/bin'
import Loading from '../components/loading'

//Hook
import { useFetch } from '../hooks/fetch'
import { useFetchMusic } from '../hooks/fetch_music'

//Images
import Trash from '../assets/trash.svg'
import About from '../assets/about.svg'
import ProfilePic from '../assets/universe_girl_pic.jpg'

import Note1 from '../assets/note_1_img.jpg'
import Note2 from '../assets/note_2_img.jpg'
import Note3 from '../assets/note_3_img.jpg'


//Phone

//Style
import '../styles/responsivephone/phone_main.scss'
import '../styles/error.scss'

//Images
import FileIcon from '../assets/file.svg'
import AboutMe from '../assets/about_me_phone.svg'
import SwitchGirl from '../assets/girl_switch.jpg'
import PhoneGirl from '../assets/girl_phone.jpg'
import NotesIcon from '../assets/cv_notes_icon.svg'
import BottomCover from '../assets/phone_bottom_cover.gif'

//Component 
/* import ErrorPhone from '../components/error/error_phone_version' */
import PhoneHeader from '../components/phoneresponsive/phone_header'


function Main() {

    //Loading
    const [isLoading, setIsLoading] = useState(true)

    //Modal des projets 

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [personnelProjects, setPersonnelProjects] = useState([])
    const [formationProjects, setFormationProjects] = useState([])

    const [selectedProjectName, setSelectedProjectName] = useState('')
    const [selectedProjectDescription, setSelectedProjectDescription] = useState('')
    const [selectedProjectObjectives, setSelectedProjectObjectives] = useState('')
    const [selectedProjectLangages, setSelectedProjectLangages] = useState('')
    const [selectedProjectCreationDate, setSelectedProjectCreationDate] = useState('')
    const [selectedProjectGitHub, setSelectedProjectGitHub] = useState('')

    const openModal = (name, description, objectives, langages, creationdate, github) => {
        setSelectedProjectName(name)
        setSelectedProjectDescription(description)
        setSelectedProjectObjectives(objectives)
        setSelectedProjectLangages(langages)
        setSelectedProjectCreationDate(creationdate)
        setSelectedProjectGitHub(github)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const { data, error } = useFetch('/db/projects.json')

    useEffect(() => {
        if (data) {
            const personnel = data.filter((project) => project.type === 'personnel')
            const formation = data.filter((project) => project.type === 'formation')
            setPersonnelProjects(personnel)
            setFormationProjects(formation)
        }
    }, [data])

    //Modal de la corbeille

    const [isBinModalOpen, setIsBinModalOpen] = useState(false)

    const openBinModal = () => {
        setIsBinModalOpen(true)
    }

    const closeBinModal = () => {
        setIsBinModalOpen(false)
    }

    //Musique

    //Fetch les musiques
    const { songs, songsError } = useFetchMusic('/db/music.json');

    //Règle le volume de base
    const [volume, setVolume] = useState(0.5)
    const audioElementRef = useRef(null);

    useEffect(() => {       
        // Assuming all data is loaded when both 'data' and 'songs' are available
        if (data && songs) {
          setIsLoading(false); // Set isLoading to false when data is loaded
        }
      }, [data, songs]);
    
  
    if (isLoading) {
      return <Loading />; // Display the loading component while isLoading is true
    }

    // Gestion des erreurs pour la musique et pour les données des projets

    if (!songs) {
        return <span>Loading...</span>; // Display a loading message or spinner
    }

    if (songsError) {
        return <span>Error fetching songs data.</span>; // Display an error message
    }

    if (!data) {
        return <span>Chargement en cours...</span>
    }

    if (error) {
        return <span>Il y a un problème</span>
    }


    return (
        <div className="main_overall_container">

            <section className='main_pc'>

                {/* <ErrorPc></ErrorPc> */}

                <div className="container main_container">

                    <div className='main_left'>

                        <Projects title='Personnels'/*  height="350px" mainHeight="220px"  */>
                            {personnelProjects.map((project) =>
                                <Project key={project.id} name={project.name} onClick={() => openModal(project.name, project.description, project.objectives, project.langages, project.creationdate, project.github)} isMainPage={true} />
                            )}
                        </Projects>

                        <Projects title='Formation' /* height="250px" mainHeight="120px" */>
                            {formationProjects.map((project) =>
                                <Project key={project.id} name={project.name} onClick={() => openModal(project.name, project.description, project.objectives, project.langages, project.creationdate, project.github)} isMainPage={true} />
                            )}
                        </Projects>

                    </div>

                    <section className='main_center'>

                        <div className='center_icons'>

                            <div className='trash_icon' onClick={() => openBinModal()}>
                                <img src={Trash} alt="Icône corbeille" />
                                <p>Corbeille</p>
                            </div>

                            <Link to='/cv' className='about_icon'>
                                <img src={About} alt="Icône CV" />
                                <p>Mon CV</p>
                            </Link>

                        </div>

                        <div className='center'>
                            <img src={ProfilePic} alt="Dessin féminin en pixel art" />
                        </div>
                    </section>

                    <section className='main_right'>
                        <Notes>
                            <Note text='To do : Compléter la base de données de Outfit Me !' img={Note1} className='note_1'></Note>
                            <Note text='Comeback de NewJeans le 21 juillet !' img={Note2} className='note_2'></Note>
                            <Note text='Seulement un mois avant le départ en Corée <3' img={Note3} className='note_3'></Note>
                        </Notes>

                        <Music songs={songs} audioElementRef={audioElementRef}></Music>
                    </section>

                </div>

                {isModalOpen && <Modal closeModal={closeModal} name={selectedProjectName} description={selectedProjectDescription} objectives={selectedProjectObjectives} langages={selectedProjectLangages} creationdate={selectedProjectCreationDate} github={selectedProjectGitHub} />}
                {isBinModalOpen && <Bin closeBinModal={closeBinModal} />}

                <Footer audioElementRef={audioElementRef} volume={volume} setVolume={setVolume}></Footer>

            </section>

            <section className='main_phone'>

                <div className="main_phone_container">

                    {/* <ErrorPhone></ErrorPhone> */}

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

                            <Link to="/cv" className='phone_app'>
                                <img src={AboutMe} alt="Icone de personnage" />
                                Mon CV
                            </Link>

                            <img src={PhoneGirl} alt="Dessin féminin en pixel art" className='girl_pic' />

                            <img src={SwitchGirl} alt="Icone de personnage" className='girl_pic' />

                            <Link to="/phonenotes" className='phone_app'>
                                <img src={NotesIcon} alt="Icone de personnage" />
                                Mes notes
                            </Link>

                            <img src={BottomCover} className='phone_bottom_cover' alt='gif' />

                        </section>

                    </div>

                    <Music songs={songs} audioElementRef={audioElementRef}></Music>

                </div>

            </section>

        </div >
    )
}

export default Main