import '../styles/footer.scss'

import { useState, useEffect } from 'react'

//Images
import Notes from '../assets/notes.svg'
import Volume from '../assets/volume.svg'
import Wifi from '../assets/wifi.svg'
import Battery from '../assets/battery.svg'

function Footer() {

    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('')

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const formattedTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute
                .toString()
                .padStart(2, '0')}`;
            setCurrentTime(formattedTime);

        const currentDay = now.getDate();
            const currentMonth = now.getMonth() + 1;
            const currentYear = now.getFullYear();
            const formattedDate = `${currentDay.toString().padStart(2, '0')}/${currentMonth
                .toString()
                .padStart(2, '0')}/${currentYear}`;
            setCurrentDate(formattedDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [])


    return (
        <footer>
            <button>start</button>

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