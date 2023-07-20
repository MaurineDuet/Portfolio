//Style
import '../../styles/responsivephone/phone_header.scss'

//Basic
import { useState, useEffect, useRef } from 'react'

//Images
import NetworkIcon from '../../assets/networkIcon.svg'
import WifiIcon from '../../assets/wifi.svg'
import BatteryIcon from '../../assets/battery.svg'
import MessageIcon from '../../assets/phone_main_msg.svg'
import ParametersIcon from '../../assets/parameters_icon.svg'

function PhoneHeader() {

    const [currentTime, setCurrentTime] = useState('') //Initializing time const
    const [currentDate, setCurrentDate] = useState('') //Initializing date const

    const frenchDaysRef = useRef(['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']);
    const frenchMonthsRef = useRef([
        'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ])

    //Getting time and date
    useEffect(() => {
        const intervalId = setInterval(() => { //Setting interval for updating time and date
            const now = new Date()

            const currentHour = now.getHours() //Getting hours
            const currentMinute = now.getMinutes() //Getting minutes
            const formattedTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute
                .toString()
                .padStart(2, '0')}`
            setCurrentTime(formattedTime) //Formating time as desired

            const currentDayName = frenchDaysRef.current[now.getDay()]; // Getting the French name of the day
            const currentDay = now.getDate(); // Getting the day number
            const currentMonthName = frenchMonthsRef.current[now.getMonth()]; // Getting the French name of the month

            const formattedDate = `${currentDayName} ${currentDay} ${currentMonthName}`;
            setCurrentDate(formattedDate); // Formatting date as desired
        }, 1000); //Interval of 1sc for updating

        return () => {
            clearInterval(intervalId) //Prevent the code from running between the set interval to save space
        };
    }, [])

    return (

        <section className="overall_phone_header">

            <header className='phone_header'>
                <div className='phone_main_icons_left'>
                    <img src={NetworkIcon} alt="Icone qui indique le réseau" />

                    <div className='phone_main_messages'>
                        <p>3</p>
                        <img src={MessageIcon} alt="Icone qui indique le réseau" />
                    </div>

                    <img src={ParametersIcon} alt="Icone qui indique le réseau" className='parameters_icon' />

                </div>

                <div className='phone_main_icons_right'>
                    <img src={BatteryIcon} alt="Icone qui indique la batterie" />
                    <img src={WifiIcon} alt="Icone qui indique la wifi" />
                </div>
            </header>

            <div className='date_and_hour'>
                <p>{currentDate}</p>
                <p className='phone_main_time'>{currentTime}</p>
            </div>

        </section>

    )
}

export default PhoneHeader