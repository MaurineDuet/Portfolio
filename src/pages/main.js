import '../styles/main/main.scss'

//Components
import Footer from '../components/footer'

function Main() {

    return (
        <div className="main_overall_container">
            <div className="container main_container">

                <section className='main_left'>
                    <div className='personnal_projects'>

                    </div>
                    <div className='formation_projects'>

                    </div>

                </section>

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