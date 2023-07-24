//Style
import '../../styles/cv/card.scss'

//Basic
import React from 'react'

//Components
import Project from '../main/project'

//Images
import Reward from '../../assets/trophee.svg'
import LocationIcon from '../../assets/cv_location_icon.svg'
import CalendarIcon from '../../assets/cv_calendar_icon.svg'
import ToolsIcon from '../../assets/cv_tools_icon.svg'
import NotesIcon from '../../assets/cv_notes_icon.svg'
import SearchIcon from '../../assets/cv_search_icon.svg'

function Card({ selectedExperience, onExperienceClick, experiences }) {

    const { name, job_calendar, job_description, reward, job_place, strong_skills, good_skills, average_skills, weak_skills, tools = [], search } = selectedExperience || {}

    const selectedType = selectedExperience ? selectedExperience.type : ''
    const selectedExperiences = experiences.filter((selectedExperience) => selectedExperience.type === selectedType);
    const experienceCount = selectedExperiences.length

    const hasTools = tools.length > 0
    const hasReward = reward?.trim().length > 0 //Trim() est une méthode qui permet d'évacuer les whitespace et autres caractères d'une string

    return (
        <section className="cv_card">

            <h3>{selectedType === 'work' ? 'Expériences professionnelles' : 'Formation'}</h3>

            <ul className='cv_nav_1'>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Help</li>
            </ul>


            <div className="cv_card_main">

                <div className="cv_card_files">
                    {experiences.map((experience) => (
                        <Project
                            key={experience.id}
                            name={experience.name}
                            onClick={() => onExperienceClick(experience)}
                            isSelected={experience === selectedExperience}
                        />
                    ))}
                </div>

                <div className='cv_card_details'>

                    <div className='cv_card_title'>
                        <h3>{name}</h3>
                        <ul>
                            <li>
                                <img src={LocationIcon} alt="" />
                                {job_place}
                            </li>
                            <li>
                                <img src={CalendarIcon} alt="" />
                                {job_calendar}
                            </li>
                            <li>
                                <img src={NotesIcon} alt="" />
                                {job_description}
                            </li>
                            {hasReward && (
                                <li>
                                    <img src={Reward} alt="" />
                                    {reward}
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className='cv_card_skills'>
                        <h3>Compétences</h3>
                        <ul>
                            <li>
                                <progress id="good_skills" max="100" value="70"></progress>
                                <label for="good_skills">{good_skills}</label>
                            </li>
                            <li>
                                <progress id="strong_skills" max="100" value="90"></progress>
                                <label for="strong_skills">{strong_skills}</label>
                            </li>
                            <li>
                                <progress id="average_skills" max="100" value="40"></progress>
                                <label for="average_skills">{average_skills}</label>
                            </li>
                            <li>
                                <progress id="weak_skills" max="100" value="20"></progress>
                                <label for="weak_skills">{weak_skills}</label>
                            </li>
                        </ul>

                    </div>

                    {hasTools && (
                        <div className='cv_card_tools'>
                            <h3>Outils et logiciels</h3>
                            <ul>
                                {tools.map((tool, index) => (
                                    <li className='cv_card_tool' key={index}>
                                        <img src={ToolsIcon} alt="" />
                                        <p>{tool}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className='cv_card_search'>
                        <img src={SearchIcon} alt="" />
                        {search}
                    </div>

                </div>

            </div>

            <p className='cv_card_footer'>{experienceCount} {selectedType === 'work' && experienceCount === 1 ? 'expérience' : selectedType === 'work' && experienceCount > 1 ? 'expériences' : selectedType === 'education' && experienceCount === 1 ? 'formation' : 'formations'}</p>

        </section>
    )
}

export default Card