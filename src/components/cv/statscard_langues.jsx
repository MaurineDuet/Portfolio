import '../../styles/cv/card.scss'

//Images
import CheckIcon from '../../assets/cv_check_icon.svg'

function Language() {
    return (
        <div className='cv_card_details'>

            <div className='cv_card_title cv_card_global_skills'>
                <h3>Langues IRL</h3>
                <ul>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        Bla bla
                    </li>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        Bla bla
                    </li>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        blabla
                    </li>

                    <li>
                        <img src={CheckIcon} alt="" />
                        bla
                    </li>
                </ul>
            </div>

            <div className='cv_card_title cv_card_global_skills'>
                <h3>Langages de code</h3>
                <ul>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        Bla bla
                    </li>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        Bla bla
                    </li>
                    <li>
                        <div className='check_icon_box'>
                            <img src={CheckIcon} alt="" />
                            <img src={CheckIcon} alt="" />
                        </div>
                        blabla
                    </li>

                    <li>
                        <img src={CheckIcon} alt="" />
                        bla
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Language