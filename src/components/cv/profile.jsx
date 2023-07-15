//Style
import '../../styles/cv/profile.scss'

//Images
/* import CvProfilePic from '../../assets/cv_profile_pic.jpg' */
import CvProfileVid from '../../assets/Profile_pic_vid.mp4'
import CvClouds from '../../assets/cv_clouds.png'

import CvMail from '../../assets/cv_mail_icon.svg'
import CvLocation from '../../assets/cv_location_icon.svg'
import CvMe from '../../assets/cv_me_icon.svg'

function Profile() {
    return (
        <div className="cv_profile">

            <video autoPlay muted loop src={CvProfileVid} alt="" />

            <div className='cv_profile_title'>
                <p>player</p>
                <h2>Maurine Duet</h2>
            </div>

            <p className='cv_profile_description'>Dev web full stack en formation, j’adore me lancer dans de nouveaux projets.
                Amoureuse de React et de Corée du Sud.
            </p>

            <div className='cv_profile_infos'>

                <ul>
                    <li>
                        <img src={CvMail} alt="" />
                        <p>maurineduet@gmail.com</p>
                    </li>
                    <li>
                        <img src={CvLocation} alt="" />
                        <p>France/Corée du Sud</p>
                    </li>
                    <li>
                        <img src={CvMe} alt="" />
                        <p>A spawn le 21/05/1996</p>
                    </li>
                </ul>

                <img src={CvClouds} alt="" />

            </div>

        </div>
    )
}

export default Profile