//Style
import '../styles/cv/cv.scss'

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

                    <nav>
                        <ul className='cv_buttons'>
                            <li className='cv_button'>XP pro</li>
                            <li className='cv_button'>formation</li>
                            <li className='cv_button'>stats</li>
                        </ul>
                    </nav>

                    <Card></Card>

                </section>


            </div>

            <Footer></Footer>

        </div>


    )
}

export default Cv