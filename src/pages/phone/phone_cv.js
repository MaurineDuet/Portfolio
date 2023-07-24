//Style
import '../../styles/cv/cv.scss'
import '../../styles/responsivephone/phone_cv.scss'

//Image
import WorkIcon from '../../assets/work_icon.svg'
import EducationIcon from '../../assets/education_icon.svg'
import StatsIcon from '../../assets/skills_icon.svg'

//Component
import PhoneHeader from '../../components/phoneresponsive/phone_header'
import PhoneFooter from '../../components/phoneresponsive/phone_footer'
import Profile from '../../components/cv/profile'
import ErrorPhone from '../../components/error/error_phone_version'

//Basic
import { Link } from 'react-router-dom'

function CvPhone() {

    return (
        <div className='phone_cv'>

            <ErrorPhone></ErrorPhone>

            <PhoneHeader></PhoneHeader>

            <div className='phone_cv_main_content'>

                <Profile></Profile>

                <div className='cv_details'>

                    <nav className='cv_buttons'>
                        <Link to='/cvwork' className='cv_button'>
                            <img src={WorkIcon} alt="Icone travail" />
                            <p>XP pro</p>
                        </Link>
                        <Link to='/cveducation' className='cv_button'>
                            <img src={EducationIcon} alt="Icone formation" />
                            <p>formation</p>
                        </Link>
                        <Link to='/cvstats' className='cv_button'>
                            <img src={StatsIcon} alt="Icone compétences" />
                            <p>stats</p>
                        </Link>
                    </nav>

                </div>

            </div>

            <PhoneFooter></PhoneFooter>


        </div>


    )
}

export default CvPhone