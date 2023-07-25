//Style
import '../../styles/main/modal.scss'

//Image
import Reward from '../../assets/trophee.svg'
import LocationIcon from '../../assets/cv_location_icon.svg'
import CalendarIcon from '../../assets/cv_calendar_icon.svg'
import ToolsIcon from '../../assets/cv_tools_icon.svg'
import NotesIcon from '../../assets/cv_notes_icon.svg'
import SearchIcon from '../../assets/cv_search_icon.svg'

function PhoneModal({ closeModal, name, job_place, job_calendar, job_description, reward, good_skills, strong_skills, average_skills, weak_skills, tools = [], search }) {

    const hasTools = tools.length > 0
    const hasReward = reward?.trim().length > 0 //Trim() est une méthode qui permet d'évacuer les whitespace et autres caractères d'une string

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

                </div>
            </div>
        </div>
    )
}

export default PhoneModal