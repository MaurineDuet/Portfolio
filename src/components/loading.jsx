import '../styles/loading.scss'

//Image

import LoadingGif from '../assets/loading.gif'

function Loading() {

    return (
        <div className="loading_container">

            <div className='loading_element'>
                <h3>Chargement...</h3>

                <div className='loading_content'>
                    <img src={LoadingGif} alt="Ordinateur" />
                    <p>Un peu de patience, le site va bientôt s'afficher !</p>
                </div>

            </div>

        </div>
    )
}

export default Loading