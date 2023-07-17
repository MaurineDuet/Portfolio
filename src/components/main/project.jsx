//Style
import '../../styles/main/project.scss'

//Image
import File from '../../assets/file.svg'

function Project({ name, onClick, isSelected }) {
    return (
        <div className={`project ${isSelected ? 'selected' : ''}`} onClick={onClick}>
            <img src={File} alt="Icône de dossier" />
            <p>{name}</p>
        </div>
    )
}

export default Project