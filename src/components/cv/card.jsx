//Style
import '../../styles/cv/card.scss'

//Basic
import React from 'react'

//Images
import LocationIcon from '../../assets/cv_location_icon.svg'
import CalendarIcon from '../../assets/cv_calendar_icon.svg'
/* import ToolsIcon from '../../assets/cv_tools_icon.svg' */
import CheckIcon from '../../assets/cv_check_icon.svg'
import NotesIcon from '../../assets/cv_notes_icon.svg'
import SearchIcon from '../../assets/cv_search_icon.svg'

function Card(props) {

    const { title, job_calendar, job_description, job_place, strong_skills, good_skills, average_skills, weak_skills, search, fileCount } = props

    return (
        <section className="cv_card">

            <h3>Test</h3>

            <ul className='cv_nav_1'>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Help</li>
            </ul>


            <div className="cv_card_main">

                <div className="cv_card_files">
                    {props.children}
                </div>

                <div className='cv_card_details'>

                    <div className='cv_card_title'>
                        <h3>Test2 {title}</h3>
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
                        </ul>
                    </div>

                    <div className='cv_card_skills'>

                        <ul>
                            <li>
                                <div>
                                    <img src={CheckIcon} alt="" />
                                    <img src={CheckIcon} alt="" />
                                    <img src={CheckIcon} alt="" />
                                </div>
                                {good_skills}
                            </li>
                            <li>
                                <div>
                                    <img src={CheckIcon} alt="" />
                                    <img src={CheckIcon} alt="" />
                                    <img src={CheckIcon} alt="" />
                                    <img src={CheckIcon} alt="" />
                                </div>
                                {strong_skills}
                            </li>
                            <li>
                                <div>
                                    <img src={CheckIcon} alt="" />
                                    <img src={CheckIcon} alt="" />
                                </div>
                                {average_skills}</li>
                            <li>
                                <img src={CheckIcon} alt="" />
                                {weak_skills}
                            </li>
                        </ul>

                    </div>

                    <div className='cv_ard_tools'>
                    {props.children}
                    </div>

                    <div className='cv_card_search'>
                        <img src={SearchIcon} alt="" />
                        {search}
                    </div>

                </div>

            </div>

            <p className='cv_card_footer'>{fileCount} expériences</p>

        </section>
    )
}

export default Card