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
import StatsCard from '../components/cv/statscard'

//Hook
import { useFetch } from '../hooks/fetch'
import { useState, useEffect } from 'react'

function Cv() {

    const [workExperience, setWorkExperience] = useState([])
    const [educationExperience, setEducationExperience] = useState([])
    const [selectedExperience, setSelectedExperience] = useState(null)
    const [selectedButton, setSelectedButton] = useState('work')
    const { data, error } = useFetch('/db/experiences.json')

    useEffect(() => {
        if (data) {
            const work = data.filter((experience) => experience.type === 'work')
            const education = data.filter((experience) => experience.type === 'education')
            setWorkExperience(work)
            setEducationExperience(education)
            setSelectedExperience(work[0])
        }
    }, [data])

    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
    };

    const handleWorkButtonClick = () => {
        setSelectedButton('work')
        setSelectedExperience(workExperience[0]);
    };

    const handleEducationButtonClick = () => {
        setSelectedButton('education')
        setSelectedExperience(educationExperience[0]);
    }

    const handleSkillsButtonClick = () => {
        setSelectedButton('stats');
        setSelectedExperience('compétences');
      }

    if (!data) {
        return <span>Chargement en cours...</span>
    }

    if (error) {
        return <span>Il y a un problème</span>
    }

    let content;
    if (selectedButton === 'work' || selectedButton === 'education') {
        content = (
            <Card
                selectedExperience={selectedExperience}
                onExperienceClick={handleExperienceClick}
                experiences={
                    selectedExperience && selectedExperience.type === 'work'
                        ? workExperience
                        : selectedExperience && selectedExperience.type === 'education'
                            ? educationExperience
                            : []
                }
            />
        );
    } else if (selectedButton === 'stats') {
        content = (
            <StatsCard
            selectedExperience={selectedExperience}
            onExperienceClick={handleExperienceClick}
            />
        )
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
                            <li className={`cv_button work_button ${selectedButton === 'work' ? 'selected' : ''}`} onClick={handleWorkButtonClick}>XP pro</li>
                            <li className={`cv_button education_button ${selectedButton === 'education' ? 'selected' : ''}`} onClick={handleEducationButtonClick}>formation</li>
                            <li className={`cv_button stats_button ${selectedButton === 'skills' ? 'selected' : ''}`} onClick={handleSkillsButtonClick}>stats</li>
                        </ul>

                        {content}

                    </div>

                </section>

            </div>

            <Footer></Footer>

        </div>


    )
}

export default Cv