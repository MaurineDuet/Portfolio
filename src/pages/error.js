//Style
import '../styles/error.scss'

//Basic
import { Link } from "react-router-dom"

//Image
import AlertIcon from '../assets/alert_icon.svg'

function Error() {

    return (

        <div className='error_basic_page'>

            <div className='redirection'>

                <h3>Error</h3>

                <div className='error_main_content'>

                    <div className='error_main_title'>
                        <img src={AlertIcon} alt="Icone qui indique une alerte" />
                        <h4>ERROR 404</h4>
                    </div>
                    <p>Youpla boum ! Cette page n’existe pas :/ Mon univers ne s’étend pas encore aussi loin !</p>

                    <Link to="/Portfolio" className='redirection_button'>
                        Revenir à l'accueil
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Error