//Style
import '../styles/responsivephone/phone_projects.scss'

//Components
import PhoneHeader from '../components/phoneresponsive/phone_header'
import Projects from '../components/main/projects'
import Project from '../components/main/project'
import Modal from '../components/main/modal'
import PhoneFooter from '../components/phoneresponsive/phone_footer'

//Basic
import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/fetch'

function FormationProjects() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [formationProjects, setFormationProjects] = useState([])

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
            const formation = data.filter((project) => project.type === 'formation')
            setFormationProjects(formation)
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
            <PhoneHeader></PhoneHeader>

            <p className='phone_projects_title'>Projets de formation</p>
            <Projects title='Formation' /* height="250px" mainHeight="120px" */>
                {formationProjects.map((project) =>
                    <Project key={project.id} name={project.name} onClick={() => openModal(project.name, project.description, project.objectives, project.langages, project.creationdate)} isMainPage={true} />
                )}
            </Projects>

            {isModalOpen && <Modal closeModal={closeModal} name={selectedProjectName} description={selectedProjectDescription} objectives={selectedProjectObjectives} langages={selectedProjectLangages} creationdate={selectedProjectCreationDate} />}

            <PhoneFooter></PhoneFooter>

        </div>
    )
}
export default FormationProjects