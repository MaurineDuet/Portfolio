//Style
import '../styles/cv/cv.scss'
import '../styles/cv/details.scss'

//Images
import StarsBackground from '../assets/stars_background.jpeg'

//Component
import Header from '../components/cv/header'
import Footer from '../components/footer'
import Profile from '../components/cv/profile'
import Card from '../components/cv/card'


//Hook
import { useFetch } from '../hooks/fetch'
import { useState, useEffect } from 'react'

function Cv() {

    const [workExperience, setWorkExperience] = useState([])
    const [educationExperience, setEducationExperience] = useState([])
    const [selectedProject, setSelectedProject] = useState(null)
    const { data, error } = useFetch('/db/experiences.json')

    useEffect(() => {
        if (data) {
            const work = data.filter((experience) => experience.type === 'work')
            const education = data.filter((experience) => experience.type === 'education')
            setWorkExperience(work)
            setEducationExperience(education)
            setSelectedProject(work[0])
        }
    }, [data])

    const handleProjectClick = (project) => {
        setSelectedProject(project);
      };
    
      const handleWorkButtonClick = () => {
        setSelectedProject(workExperience[0]);
      };
    
      const handleEducationButtonClick = () => {
        setSelectedProject(educationExperience[0]);
      }

    if (!data) {
        return <span>Chargement en cours...</span>
    }

    if (error) {
        return <span>Il y a un problème</span>
    }



    return (
        <div className='cv_container_overall'>

            <img src={StarsBackground} alt="Fond d'écran étoiles" className='stars_background_cv' />

            <Header></Header>

            <div className='container'>

                <section className='cv_small_container'>

                    <Profile></Profile>

                    <div className='cv_details'>

                        <ul className='cv_buttons'>
                            <li className='cv_button work_button' onClick={handleWorkButtonClick}>XP pro</li>
                            <li className='cv_button education_button' onClick={handleEducationButtonClick}>formation</li>
                            <li className='cv_button'>stats</li>
                        </ul>

                        <Card project={selectedProject} onProjectClick={handleProjectClick} projects={selectedProject && selectedProject.type === 'work' ? workExperience : educationExperience}>
                        </Card>

                    </div>

                </section>

            </div>

            <Footer></Footer>

        </div>


    )
}

export default Cv