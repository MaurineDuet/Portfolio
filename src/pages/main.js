import '../styles/main/main.scss'
import '../styles/main/projects.scss'
import '../styles/main/notes.scss'

//Components
import Projects from '../components/main/projects'
import Project from '../components/main/project'
import Footer from '../components/footer'
import Notes from '../components/main/notes'
import Note from '../components/main/note'

//Images
import Trash from '../assets/trash.svg'
import About from '../assets/about.svg'
import ProfilePic from '../assets/universe_girl_pic.jpg'

import Note1 from '../assets/note_1_img.jpg'
import Note2 from '../assets/note_2_img.jpg'
import Note3 from '../assets/note_3_img.jpg'

function Main() {

    return (
        <div className="main_overall_container">
            <div className="container main_container">

                <div className='main_left'>

                    <Projects title='Personnels' height="350px" mainHeight="220px" >
                        <Project name='The start' />
                        <Project name='Cake Day' />
                        <Project name='Dalkom Cafe' />
                        <Project name='Outfit Me !' />
                        <Project name='SMTM' />
                    </Projects>

                    <Projects title='Formation' height="250px" mainHeight="120px">
                        <Project name='MVG' />
                        <Project name='KASA' />
                        <Project name='N. Carducci' />
                        <Project name='S. Bluel' />
                        <Project name='Booki' />
                        <Project name='Portfolio' />
                    </Projects>

                </div>

                <section className='main_center'>

                    <div className='center_icons'>

                        <div className='trash_icon'>
                            <img src={Trash} alt="Icône corbeille" />
                            <p>Corbeille</p>
                        </div>

                        <div className='about_icon'>
                            <img src={About} alt="Icône CV" />
                            <p>Mon CV</p>
                        </div>

                    </div>

                    <div className='center'>
                        <img src={ProfilePic} alt="Dessin féminin en pixel art" />
                    </div>
                </section>

                <section className='main_right'>
                    <Notes>
                        <Note text='To do :- Compléter la base de données Outfit Me !' img={Note1}></Note>
                        <Note text='Comeback de NewJeans le 21 juillet !' img={Note2} className='note_2'></Note>
                        <Note text= 'Seulement un mois avant le départ en Corée' img={Note3} className='note_3'></Note>
                    </Notes>
                </section>

            </div>

            <Footer></Footer>

        </div>
    )
}

export default Main