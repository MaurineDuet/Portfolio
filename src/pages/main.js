import '../styles/main/main.scss'
import '../styles/main/projects.scss'

//Components
import Projects from '../components/main/projects'
import Project from '../components/main/project'
import Footer from '../components/footer'

function Main() {

    return (
        <div className="main_overall_container">
            <div className="container main_container">

                <Projects title='Personnels'>
                    <Project name='The start' />
                    <Project name='Cake Day' />
                    <Project name='Dalkom Cafe' />
                    <Project name='Outfit Me !' />
                    <Project name='SMTM' />
                </Projects>

                <section className='main_center'>
                    <div className='center'>
                    </div>
                </section>

                <section className='main_right'>
                    <div className='right'>
                    </div>
                </section>

            </div>

            <Footer></Footer>

        </div>
    )
}

export default Main