import Projects from '../components/main/projects'
import Project from '../components/main/project'

function PersoProjects() {
    return (
        <Projects title='Personnels'/*  height="350px" mainHeight="220px"  */>
            {personnelProjects.map((project) =>
                <Project key={project.id} name={project.name} onClick={() => openModal(project.name, project.description, project.objectives, project.langages, project.creationdate)} isMainPage={true} />
            )}
        </Projects>
    )
}

export default PersoProjects$
