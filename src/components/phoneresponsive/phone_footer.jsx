//Style
import '../../styles/responsivephone/phone_footer.scss'

//Basic
import { Link } from 'react-router-dom'

function PhoneFooter() {

    return (
        <footer className="phone_footer">

            <Link to='/mainphone' className='footer_link'>
                Back
            </Link>
            <p>Select</p>
            <Link to='/' className='footer_link'>
                Exit
            </Link>

        </footer>
    )
}

export default PhoneFooter