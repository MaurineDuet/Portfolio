//Style
import '../styles/cv/cv.scss'

//Images
import StarsBackground from '../assets/stars_background.jpeg'

//Component
import Header from '../components/cv/header'
import Footer from '../components/footer'

function Cv() {

    return (
        <div className='cv_container_overall'>

            <img src={StarsBackground} alt="Fond d'écran étoiles" className='stars_background_cv' />

            <Header></Header>

            <div className='container'>

                

            </div>

            <Footer></Footer>

        </div>


    )
}

export default Cv