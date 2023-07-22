//Basic
import React from 'react'

//Component
import Project from '../main/project'


function PhoneCard({ selectedExperience, onExperienceClick, experiences }) {

    const selectedType = selectedExperience ? selectedExperience.type : ''
    const selectedExperiences = experiences.filter((selectedExperience) => selectedExperience.type === selectedType);
    const experienceCount = selectedExperiences.length

    return (
        <div className="phone_card_container">

            <h3>{selectedType === 'work' ? 'Expériences professionnelles' : 'Formation'}</h3>

            <div className="phone_card">
                {experiences.map((experience) => (
                    <Project
                        key={experience.id}
                        name={experience.name}
                        onClick={() => onExperienceClick(experience)}
                        isSelected={experience === selectedExperience}
                    />
                ))}
            </div>

            <p className='cv_card_footer'>{experienceCount} {selectedType === 'work' && experienceCount === 1 ? 'expérience' : selectedType === 'work' && experienceCount > 1 ? 'expériences' : selectedType === 'education' && experienceCount === 1 ? 'formation' : 'formations'}</p>

        </div>
    )
}

export default PhoneCard