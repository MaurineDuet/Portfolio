//Style
import '../../styles/responsivephone/phone_main.scss'
import '../../styles/responsivephone/phone_projects.scss'

//Components
import ErrorPhone from '../../components/error/error_phone_version'
import PhoneHeader from '../../components/phoneresponsive/phone_header'
import Projects from '../../components/main/projects'
import Project from '../../components/main/project'
import Modal from '../../components/main/modal'
import PhoneFooter from '../../components/phoneresponsive/phone_footer'

//Basic
import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/fetch'

//Image
import BottomProjects from '../../assets/phone_bottom.gif'

function PersoProjects() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [personnelProjects, setPersonnelProjects] = useState([])

    const [selectedProjectName, setSelectedProjectName] = useState('')
    const [selectedProjectDescription, setSelectedProjectDescription] = useState('')
    const [selectedProjectObjectives, setSelectedProjectObjectives] = useState('')
    const [selectedProjectLangages, setSelectedProjectLangages] = useState('')
    const [selectedProjectCreationDate, setSelectedProjectCreationDate] = useState('')

    const openModal = (name, description, objectives, langages, creationdate) => {
        setSelectedProjectName(name)
        setSelectedProjectDescription(description)
        setSelectedProjectObjectives(objectives)
        setSelectedProjectLangages(langages)
        setSelectedProjectCreationDate(creationdate)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const { data, error } = useFetch('/db/projects.json')

    useEffect(() => {
        if (data) {
            const personnel = data.filter((project) => project.type === 'personnel')
            setPersonnelProjects(personnel)
        }
    }, [data])

    if (!data) {
        return <span>Chargement en cours...</span>
    }

    if (error) {
        return <span>Il y a un problème</span>
    }

    return (
        <div className="phone_projects">

            <ErrorPhone></ErrorPhone>

            <PhoneHeader></PhoneHeader>

            <p className='phone_projects_title'>Projets personnels</p>

            <Projects title='Personnels' >
                {personnelProjects.map((project) =>
                    <Project key={project.id} name={project.name} onClick={() => openModal(project.name, project.description, project.objectives, project.langages, project.creationdate)} isMainPage={true} />
                )}

                <img src={BottomProjects} className='phone_bottom_projects' />

            </Projects>

            {isModalOpen && <Modal closeModal={closeModal} name={selectedProjectName} description={selectedProjectDescription} objectives={selectedProjectObjectives} langages={selectedProjectLangages} creationdate={selectedProjectCreationDate} />}

            <PhoneFooter></PhoneFooter>

        </div>

    )
}

export default PersoProjects
