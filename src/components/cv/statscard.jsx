//Style
import '../../styles/cv/card.scss'

//Basic
import React from 'react'
import Project from '../main/project'

//Components 
import Competences from './statscard_competences'
import Language from './statscard_langues'

function StatsCard({ selectedExperience, onExperienceClick }) {

    let content

    if (selectedExperience === 'compétences') {
        content = <Competences />
      } else if (selectedExperience === 'languages') {
        content = <Language />
      }

    return (
        <section className="cv_card">

            <h3>Statistiques</h3>

            <ul className='cv_nav_1'>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Help</li>
            </ul>


            <div className="cv_card_main">

                <div className="cv_card_files">
                    <Project
                        name="Compétences"
                        onClick={() => onExperienceClick('compétences')}
                        isSelected={selectedExperience === 'compétences'}
                    />

                    <Project
                        name="Langues IRL et langages de code"
                        onClick={() => onExperienceClick('languages')}
                        isSelected={selectedExperience === 'languages'}
                    />

                </div>

                {content}


            </div>

            <p className='cv_card_footer'>Une diversité de compétences</p>

        </section>
    )
}

export default StatsCard