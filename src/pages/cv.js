//Style
import '../styles/cv/cv.scss'
import '../styles/cv/details.scss'

//Images
import StarsBackground from '../assets/stars_background.jpeg'

//Component
import Header from '../components/cv/header'
import Footer from '../components/footer'
import Profile from '../components/cv/profile'
import Card from '../components/cv/card'

function Cv() {

    return (
        <div className='cv_container_overall'>

            <img src={StarsBackground} alt="Fond d'écran étoiles" className='stars_background_cv' />

            <Header></Header>

            <div className='container'>

                <section className='cv_small_container'>

                    <Profile></Profile>

                    <div className='cv_details'>

                        <ul className='cv_buttons'>
                            <li className='cv_button'>XP pro</li>
                            <li className='cv_button'>formation</li>
                            <li className='cv_button'>stats</li>
                        </ul>

                        <Card></Card>

                    </div>

                </section>

            </div>

            <Footer></Footer>

        </div>


    )
}

export default Cv