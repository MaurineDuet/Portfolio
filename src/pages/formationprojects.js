import Projects from '../components/main/projects'
import Project from '../components/main/project'

function FormationProjects() {
    return (
        <Projects title='Formation' /* height="250px" mainHeight="120px" */>
            {formationProjects.map((project) =>
                <Project key={project.id} name={project.name} onClick={() => openModal(project.name, project.description, project.objectives, project.langages, project.creationdate)} isMainPage={true} />
            )}
        </Projects>
    )
}
export default FormationProjects