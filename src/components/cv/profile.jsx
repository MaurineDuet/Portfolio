//Style
import '../../styles/cv/profile.scss'

//Images
/* import CvProfilePic from '../../assets/cv_profile_pic.jpg' */
import CvProfileVid from '../../assets/Profile_pic_vid.mp4'

import CvMail from '../../assets/cv_mail_icon.svg'
import CvLocation from '../../assets/cv_location_icon.svg'
import CvMe from '../../assets/cv_me_icon.svg'
import CvSendMail from '../../assets/cv_send_mail_icon.svg'

function Profile() {
    return (
        <section className="cv_profile">

            <h3>About me</h3>

            <nav>
                <ul className='cv_nav_1'>
                    <li>File</li>
                    <li>Edit</li>
                    <li>View</li>
                    <li>Help</li>
                </ul>

                <ul className='cv_nav_2'>
                    <li>
                        <img src={CvLocation} alt="" />
                        France / Corée du Sud
                    </li>
                    <li>
                        <img src={CvMe} alt="" />
                        A spawn le 21/05/1996
                    </li>
                </ul>
            </nav>

            <div className='cv_mail'>
                <p>Adresse</p>

                <div className='cv_mail_bar'>
                    <img src={CvMail} alt="" />
                    <p>maurineduet@gmail.com</p>
                </div>

                <div className='cv_mail_send'>
                    <img src={CvSendMail} alt="" />
                    <p>Go</p>
                </div>
            </div>

            <video autoPlay muted loop src={CvProfileVid} alt="" />

            <div className='cv_title'>
                <h1>Maurine Duet</h1>
                <p>Dev web full stack en formation, j’adore me lancer dans de nouveaux projets. Amoureuse de React et de Corée du Sud.</p>
            </div>

        </section>
    )
}

export default Profile