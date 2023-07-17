//Images
import CheckIcon from '../../assets/cv_check_icon.svg'

function Competences() {
    return (

        <div className='cv_card_details'>

            <div className='cv_card_title'>
                <h3>Compétences</h3>
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

            <div className='cv_card_hobbies'>
                <ul>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <img src="" alt="" />
                    </li>
                </ul>
            </div>

            <div className='cv_card_search'>
                <p>Blablabla</p>
            </div>

        </div >



    )
}

export default Competences