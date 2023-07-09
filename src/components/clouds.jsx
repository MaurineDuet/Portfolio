import '../styles/basic.scss'
import '../styles/landing.scss'
import '../styles/clouds.scss'

//Images clouds
import TransparentCloud from '../assets/transparent_cloud.svg'
import PinkCloud from '../assets/pink_cloud.svg'
import BlueCloud from '../assets/blue_cloud.svg'
import YellowCloud from '../assets/yellow_cloud.svg'
import LilacCloud from '../assets/lilac_cloud.svg'

function Clouds() {
    return (
        <div className='clouds_background'>
            <img src={TransparentCloud} alt="Nuage transparent" className='transparent_c'/>
            <img src={YellowCloud} alt="Nuage jaune" className='yellow_c'/>
            <img src={PinkCloud} alt="Nuage rose" className='pink_c'/>
            <img src={BlueCloud} alt="Nuage bleu" className='blue_c' />
            <img src={LilacCloud} alt="Nuage lilas" className='lilac_c' />
        </div>
    )
}

export default Clouds