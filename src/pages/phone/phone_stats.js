//Components
import ErrorPhone from '../../components/error/error_phone_version'
import PhoneHeader from '../../components/phoneresponsive/phone_header'
import Competences from '../../components/cv/statscard_competences'
import Language from '../../components/cv/statscard_langues'
import PhoneFooter from '../../components/phoneresponsive/phone_footer'

function CvStats() {
    return (
        <div className="phone_projects">

            <ErrorPhone></ErrorPhone>

            <PhoneHeader></PhoneHeader>

            <p className='phone_projects_title'>Compétences</p>

            <div className='cv_card phone_stats_container'>

                <div className='cv_card_main phone_stats'>

                    <Language></Language>
                    <Competences></Competences>

                </div>

            </div>

            <PhoneFooter></PhoneFooter>

        </div>
    )
}
export default CvStats