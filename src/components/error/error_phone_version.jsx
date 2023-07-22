//Style
import '../../styles/error.scss'

//Basic
import { Link } from "react-router-dom"

//Image
import AlertIcon from '../../assets/alert_icon.svg'

function ErrorPhone() {

    return (
        <div className='redirection'>

            <h3>Error</h3>

            <div className='error_main_content'>

                <div className='error_main_title'>
                    <img src={AlertIcon} alt="Icone qui indique une alerte" />
                    <h4>WRONG FORMAT</h4>
                </div>
                <p>Pour une meilleure expérience du site, cette page n'est accessible que pour les utilisateurs naviguant sur téléphone.
                    <br /> Si vous naviguez sur un autre appareil, veuillez cliquer sur le bouton ci-dessous !
                </p>

                <Link to="/main" className='redirection_button'>
                    Transfert. Scanner. <br />
                    Virtualisation !
                </Link>

            </div>
        </div>
    )
}

export default ErrorPhone