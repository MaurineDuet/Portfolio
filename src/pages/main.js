//Style
import '../styles/main/main.scss'
import '../styles/main/projects.scss'
import '../styles/main/notes.scss'

//Basic
import { useState } from 'react'

//Components
import Projects from '../components/main/projects'
import Project from '../components/main/project'
import Footer from '../components/footer'
import Notes from '../components/main/notes'
import Note from '../components/main/note'
import Music from '../components/main/music'
import Modal from '../components/main/modal'

//Images
import Trash from '../assets/trash.svg'
import About from '../assets/about.svg'
import ProfilePic from '../assets/universe_girl_pic.jpg'

import Note1 from '../assets/note_1_img.jpg'
import Note2 from '../assets/note_2_img.jpg'
import Note3 from '../assets/note_3_img.jpg'

function Main() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    }

    return (
        <div className="main_overall_container">
            <div className="container main_container">

                <div className='main_left'>

                    <Projects title='Personnels' height="350px" mainHeight="220px" >
                        <Project name='The start' onClick={openModal}/>
                        <Project name='Cake Day' onClick={openModal}/>
                        <Project name='Dalkom Cafe' onClick={openModal}/>
                        <Project name='Outfit Me !' onClick={openModal}/>
                        <Project name='SMTM' onClick={openModal}/>
                    </Projects>

                    <Projects title='Formation' height="250px" mainHeight="120px">
                        <Project name='MVG' onClick={openModal}/>
                        <Project name='KASA' onClick={openModal}/>
                        <Project name='N. Carducci' onClick={openModal}/>
                        <Project name='S. Bluel' onClick={openModal}/>
                        <Project name='Booki' onClick={openModal}/>
                        <Project name='Portfolio' onClick={openModal}/>
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
                        <Note text='To do : Compléter la base de données de Outfit Me !' img={Note1} className='note_1'></Note>
                        <Note text='Comeback de NewJeans le 21 juillet !' img={Note2} className='note_2'></Note>
                        <Note text= 'Seulement un mois avant le départ en Corée <3' img={Note3} className='note_3'></Note>
                    </Notes>

                    <Music></Music>
                </section>

            </div>

            {isModalOpen && <Modal closeModal={closeModal} />}

            <Footer></Footer>

        </div>
    )
}

export default Main