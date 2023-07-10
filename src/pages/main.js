import '../styles/main/main.scss'
import '../styles/main/projects.scss'

//Components
import Projects from '../components/main/projects'
import Footer from '../components/footer'

function Main() {

    return (
        <div className="main_overall_container">
            <div className="container main_container">

                <Projects title='Personnels'/>

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