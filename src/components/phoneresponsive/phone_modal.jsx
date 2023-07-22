//Style
import '../../styles/main/modal.scss'

//Image
import LocationIcon from '../../assets/cv_location_icon.svg'
import CalendarIcon from '../../assets/cv_calendar_icon.svg'
import ToolsIcon from '../../assets/cv_tools_icon.svg'
import CheckIcon from '../../assets/cv_check_icon.svg'
import NotesIcon from '../../assets/cv_notes_icon.svg'
import SearchIcon from '../../assets/cv_search_icon.svg'

function PhoneModal({ closeModal, name, job_place, job_calendar, job_description, good_skills, strong_skills, average_skills, weak_skills, tools, search }) {

    return (

        <div className="modal_overlay">

            <div className="modal">

                <div className="modal_title">

                    <div className='modal_title_up'>

                        <h3>{name}</h3>
                        <p className='close_button' onClick={closeModal}>
                            X
                        </p>

                    </div>

                </div>

                <div className="modal_main cv_card">

                    <div className='cv_card_main'>

                        <div className='cv_card_details'>

                            <div className='cv_card_title'>
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
                                        <div className='check_icon_box'>
                                            <img src={CheckIcon} alt="" />
                                            <img src={CheckIcon} alt="" />
                                            <img src={CheckIcon} alt="" />
                                        </div>
                                        {good_skills}
                                    </li>
                                    <li>
                                        <div className='check_icon_box'>
                                            <img src={CheckIcon} alt="" />
                                            <img src={CheckIcon} alt="" />
                                            <img src={CheckIcon} alt="" />
                                            <img src={CheckIcon} alt="" />
                                        </div>
                                        {strong_skills}
                                    </li>
                                    <li>
                                        <div className='check_icon_box'>
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

                            <div className='cv_card_tools'>
                                {tools.map((tool, index) => (
                                    <div className='cv_card_tool' key={index}>
                                        <img src={ToolsIcon} alt="" />
                                        <p>{tool}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='cv_card_search'>
                                <img src={SearchIcon} alt="" />
                                {search}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PhoneModal