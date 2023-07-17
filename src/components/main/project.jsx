//Style
import '../../styles/main/project.scss'

//Image
import File from '../../assets/file.svg'

function Project({ name, onClick, isSelected, isMainPage}) {
    return (
        <div className={`project ${isSelected ? 'selected' : ''} ${isMainPage ? 'main_page' : ''}`} onClick={onClick}>
            <img src={File} alt="Icône de dossier" />
            <p>{name}</p>
        </div>
    )
}

export default Project