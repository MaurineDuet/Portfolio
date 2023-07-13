//Style
import '../styles/footer.scss'

//Basic
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

//Images
import Notes from '../assets/notes.svg'
import Volume from '../assets/volume.svg'
import Wifi from '../assets/wifi.svg'
import Battery from '../assets/battery.svg'

function Footer() {

    const [currentTime, setCurrentTime] = useState('') //Initializing time const
    const [currentDate, setCurrentDate] = useState('') //Initializing date const
    const [menuVisible, setMenuVisible] = useState(false)

    //Getting time and date
    useEffect(() => {
        const intervalId = setInterval(() => { //Setting interval for updating time and date
            const now = new Date();
            const currentHour = now.getHours(); //Getting hours
            const currentMinute = now.getMinutes(); //Getting minutes
            const formattedTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute
                .toString()
                .padStart(2, '0')}`;
            setCurrentTime(formattedTime); //Formating time as desired

            const currentDay = now.getDate(); //Getting date
            const currentMonth = now.getMonth() + 1; //Getting month
            const currentYear = now.getFullYear(); //Getting year
            const formattedDate = `${currentDay.toString().padStart(2, '0')}/${currentMonth
                .toString()
                .padStart(2, '0')}/${currentYear}`;
            setCurrentDate(formattedDate); //Formating date as desired
        }, 1000); //Interval of 1sc for updating

        return () => {
            clearInterval(intervalId); //Prevent the code from running between the set interval to save space
        };
    }, [])

    //Trigger open menu
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <footer>
            <button onClick={toggleMenu}>start</button>
            <div className='footer_menu' style={{ display: menuVisible ? 'flex' : 'none' }}>
                <Link to='/' className='menu_button'>
                    accueil
                </Link>
                <Link to='/cv' className='menu_button'>
                    mon CV
                </Link>
            </div>

            <nav>
                <ul>
                    <li><img src={Notes} alt="Icone prise de note" className='footer_nav_button' /></li>
                    <li>FR</li>
                    <li><img src={Volume} alt="Icone volume" className='footer_nav_button' /></li>
                    <li><img src={Wifi} alt="Icone wifi" className='footer_nav_button' /></li>
                    <li><img src={Battery} alt="Icone batterie d'ordinateur" className='footer_nav_button' /></li>
                    <li className='hour'>{currentTime}</li>
                    <li className='hour'>{currentDate}</li>
                </ul>
            </nav>

        </footer>
    )
}

export default Footer