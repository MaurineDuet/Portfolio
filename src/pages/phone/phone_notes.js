//Style
import '../../styles/responsivephone/phone_projects.scss'
import '../../styles/responsivephone/phone_notes.scss'

//Images
import Note1 from '../../assets/note_1_img.jpg'
import Note2 from '../../assets/note_2_img.jpg'
import Note3 from '../../assets/note_3_img.jpg'

//Components
import ErrorPhone from "../../components/error/error_phone_version"
import PhoneHeader from "../../components/phoneresponsive/phone_header"
import Note from '../../components/main/note'
import PhoneFooter from '../../components/phoneresponsive/phone_footer'

function NotesPhone() {
    return (
        <div className="phone_projects">

            <ErrorPhone></ErrorPhone>

            <PhoneHeader></PhoneHeader>

            <p className='phone_projects_title'>Mes notes</p>

            <div className='phone_notes_container'>

                <Note text='To do : Compléter la base de données de Outfit Me !' img={Note1} className='note_1'></Note>
                <Note text='Comeback de NewJeans le 21 juillet !' img={Note2} className='note_2'></Note>
                <Note text='Seulement un mois avant le départ en Corée <3' img={Note3} className='note_3'></Note>

            </div>



            <PhoneFooter></PhoneFooter>

        </div>
    )
}

export default NotesPhone