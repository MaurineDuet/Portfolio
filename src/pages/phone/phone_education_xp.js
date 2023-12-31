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

//Image
import BottomCV from '../../assets/cv_bottom.gif'

function CvEducation() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [educationExperiences, setEducationExperiences] = useState([])

    const [selectedExperienceName, setSelectedExperienceName] = useState('')
    const [selectedExperiencePlace, setSelectedExperiencePlace] = useState('')
    const [selectedExperienceCalendar, setSelectedExperienceCalendar] = useState('')
    const [selectedExperienceDescription, setSelectedExperienceDescription] = useState('')
    const [selectedExperienceReward, setSelectedExperienceReward] = useState('')


    const [selectedExperienceStrongskills, setSelectedExperienceStrongskills] = useState('')
    const [selectedExperienceGoodskills, setSelectedExperienceGoodskills] = useState('')
    const [selectedExperienceAverageskills, setSelectedExperienceAverageskills] = useState('')
    const [selectedExperienceWeakskills, setSelectedExperienceWeakskills] = useState('')

    const [selectedExperienceTools, setSelectedExperienceTools] = useState('')

    const [selectedExperienceSearch, setSelectedExperienceSearch] = useState('')

    const openModal = (name, job_place, job_calendar, job_description, reward, strong_skills, good_skills, average_skills, weak_skills, tools, search) => {
        setSelectedExperienceName(name)
        setSelectedExperiencePlace(job_place)
        setSelectedExperienceCalendar(job_calendar)
        setSelectedExperienceDescription(job_description)
        setSelectedExperienceReward(reward)

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

    const { data, error } = useFetch('/db/experiences.json')

    useEffect(() => {
        if (data) {
            const education = data.filter((experience) => experience.type === 'education')
            setEducationExperiences(education)
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

            <p className='phone_projects_title'>Formation</p>

            <Projects title='Formation' >
                {educationExperiences.map((experience) => (
                    <Project
                        key={experience.id}
                        name={experience.name}
                        onClick={() =>
                            openModal(
                                experience.name,
                                experience.job_place,
                                experience.job_calendar,
                                experience.job_description,
                                experience.reward,
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

                <img src={BottomCV} className='phone_bottom_projects' />
            </Projects>

            {isModalOpen && (
                <PhoneModal
                    closeModal={closeModal}
                    name={selectedExperienceName}
                    job_place={selectedExperiencePlace}
                    job_calendar={selectedExperienceCalendar}
                    job_description={selectedExperienceDescription}
                    reward={selectedExperienceReward}
                    good_skills={selectedExperienceGoodskills}
                    strong_skills={selectedExperienceStrongskills}
                    average_skills={selectedExperienceAverageskills}
                    weak_skills={selectedExperienceWeakskills}
                    tools={selectedExperienceTools}
                    search={selectedExperienceSearch}
                    experiences={educationExperiences}
                />
            )}
            <PhoneFooter></PhoneFooter>

        </div>
    )
}

export default CvEducation