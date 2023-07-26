//Components
import ErrorPhone from '../../components/error/error_phone_version'
import PhoneHeader from '../../components/phoneresponsive/phone_header'
import Projects from '../../components/main/projects'
import Project from '../../components/main/project'
import PhoneModal from '../../components/phoneresponsive/phone_modal'
import PhoneFooter from '../../components/phoneresponsive/phone_footer'

//Basic
import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/fetch'

function CvWork() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [workExperiences, setWorkExperiences] = useState([])

    const [selectedExperienceName, setSelectedExperienceName] = useState('')
    const [selectedExperiencePlace, setSelectedExperiencePlace] = useState('')
    const [selectedExperienceCalendar, setSelectedExperienceCalendar] = useState('')
    const [selectedExperienceDescription, setSelectedExperienceDescription] = useState('')

    const [selectedExperienceStrongskills, setSelectedExperienceStrongskills] = useState('')
    const [selectedExperienceGoodskills, setSelectedExperienceGoodskills] = useState('')
    const [selectedExperienceAverageskills, setSelectedExperienceAverageskills] = useState('')
    const [selectedExperienceWeakskills, setSelectedExperienceWeakskills] = useState('')

    const [selectedExperienceTools, setSelectedExperienceTools] = useState('')

    const [selectedExperienceSearch, setSelectedExperienceSearch] = useState('')

    const openModal = (name, job_place, job_calendar, job_description, strong_skills, good_skills, average_skills, weak_skills, tools, search) => {
        setSelectedExperienceName(name)
        setSelectedExperiencePlace(job_place)
        setSelectedExperienceCalendar(job_calendar)
        setSelectedExperienceDescription(job_description)

        setSelectedExperienceStrongskills(strong_skills)
        setSelectedExperienceGoodskills(good_skills)
        setSelectedExperienceAverageskills(average_skills)
        setSelectedExperienceWeakskills(weak_skills)

        setSelectedExperienceTools(tools)

        setSelectedExperienceSearch(search)

        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const { data, error } = useFetch('/Portfolio/db/experiences.json')

    useEffect(() => {
        if (data) {
            const work = data.filter((experience) => experience.type === 'work')
            setWorkExperiences(work)
        }
    }, [data])

    if (!data) {
        return <span>Chargement en cours...</span>
    }

    if (error) {
        return <span>Il y a un problème</span>
    }

    return (
        <div className="phone_projects cv_phone_projects">

            <ErrorPhone></ErrorPhone>

            <PhoneHeader></PhoneHeader>

            <p className='phone_projects_title'>Experiences professionnelles</p>

            <Projects title='Expériences professionnelles' >
                {workExperiences.map((experience) => (
                    <Project
                        key={experience.id}
                        name={experience.name}
                        onClick={() =>
                            openModal(
                                experience.name,
                                experience.job_place,
                                experience.job_calendar,
                                experience.job_description,
                                experience.good_skills,
                                experience.strong_skills,
                                experience.average_skills,
                                experience.weak_skills,
                                experience.tools,
                                experience.search
                            )
                        }
                        isMainPage={true}
                    />
                ))}
            </Projects>

            {isModalOpen && (
                <PhoneModal
                    closeModal={closeModal}
                    name={selectedExperienceName}
                    job_place={selectedExperiencePlace}
                    job_calendar={selectedExperienceCalendar}
                    job_description={selectedExperienceDescription}
                    good_skills={selectedExperienceGoodskills}
                    strong_skills={selectedExperienceStrongskills}
                    average_skills={selectedExperienceAverageskills}
                    weak_skills={selectedExperienceWeakskills}
                    tools={selectedExperienceTools}
                    search={selectedExperienceSearch}
                    experiences={workExperiences}
                />
            )}
            <PhoneFooter></PhoneFooter>

        </div>
    )
}

export default CvWork