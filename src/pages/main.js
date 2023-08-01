//Style
import '../styles/main/main.scss'
import '../styles/main/projects.scss'
import '../styles/main/notes.scss'
import '../styles/error.scss'

//Basic
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Components
import ErrorPc from '../components/error/error_pc_version'
import Projects from '../components/main/projects'
import Project from '../components/main/project'
import Footer from '../components/footer/footer'
import Notes from '../components/main/notes'
import Note from '../components/main/note'
import Music from '../components/main/music'
import Modal from '../components/main/modal'

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

function Main() {

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

    const { data, error } = useFetch('/Portfolio/db/projects.json')

    useEffect(() => {
        if (data) {
            const personnel = data.filter((project) => project.type === 'personnel')
            const formation = data.filter((project) => project.type === 'formation')
            setPersonnelProjects(personnel)
            setFormationProjects(formation)
        }
    }, [data])

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

    if (!data) {
        return <span>Chargement en cours...</span>
    }

    if (error) {
        return <span>Il y a un problème</span>
    }


    return (
        <div className="main_overall_container">

            <ErrorPc></ErrorPc>

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

                        <div className='trash_icon'>
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

                    <Music songs={songs} ></Music>
                </section>

            </div>

            {isModalOpen && <Modal closeModal={closeModal} name={selectedProjectName} description={selectedProjectDescription} objectives={selectedProjectObjectives} langages={selectedProjectLangages} creationdate={selectedProjectCreationDate} github={selectedProjectGitHub} />}

            <Footer></Footer>

        </div >
    )
}

export default Main