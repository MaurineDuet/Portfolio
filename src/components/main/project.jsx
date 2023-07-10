import '../../styles/main/project.scss'

//Image
import File from '../../assets/file.svg'

function Project(props) {
    return (
        <div className='project'>
            <img src={File} alt="Icône de dossier" />
            <p>{props.name}</p>
        </div>
    )
}

export default Project