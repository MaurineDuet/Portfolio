import '../styles/basic.scss'
import '../styles/landing.scss'
import '../styles/clouds.scss'

import { useEffect } from 'react'

//Images clouds
import PinkCloud from '../assets/pink_cloud.svg'
import BlueCloud from '../assets/blue_cloud.svg'
import YellowCloud from '../assets/yellow_cloud.svg'
import LilacCloud from '../assets/lilac_cloud.svg'

function Clouds() {

    useEffect(() => {
        const cloudImages = document.querySelectorAll('.transparent_c, .pink_c, .blue_c, .yellow_c, .lilac_c');
        cloudImages.forEach((image) => {
            image.classList.add('active');
        });
    }, [])

    return (
        <div className='clouds_background'>
            <img src={YellowCloud} alt="Nuage jaune" className='yellow_c' />
            <img src={PinkCloud} alt="Nuage rose" className='pink_c' />
           {/*  <img src={BlueCloud} alt="Nuage bleu" className='blue_c' /> */}
            <img src={LilacCloud} alt="Nuage lilas" className='lilac_c' />
        </div>
    )
}

export default Clouds