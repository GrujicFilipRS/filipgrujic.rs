import './Project.css';

interface ProjectProps {
    name: string;
    projectType: string;
    description: string;
    iconLink: string;
    githubLink: string;
    deploymentLink?: string;
    technologies: string[];
}

function Project(data: ProjectProps) {
    return (
        <div className="project">
            <div className="top-row">
                <h2><a href={data.githubLink} target='_blank'>{ data.name }</a></h2>
                <img src={ data.iconLink } />
            </div>
            <p className='project-type'>{ data.projectType }</p>
            <p className='project-desc'>{ data.description }</p>

            <div className="bottom-row">
                <div className="technologies">
                    <p>Made with:</p>
                    { data.technologies.map((tech, _) => (
                        <div key={ tech } className="tech">
                            { tech }
                        </div>
                    ))}
                </div>

                <div className="project-links">
                    { data.deploymentLink && <a href={data.deploymentLink!} target='_blank'>Deployment</a> }
                    <a href={data.githubLink} target='_blank'>
                        <img className='github-icon' src="/github-icon.png" alt="Github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;