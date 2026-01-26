import './Project.css';

interface ProjectProps {
    name: string;
    projectType: string;
    description: string;
    iconLink: string;
    githubLink: string;
    deploymentLink?: string;
    technologies: string[];
    inDevelopment?: boolean;
    important?: boolean;
    includeGithubIcon?: boolean;
    timestamp?: string;
    customMadeWithText?: string;
}

function Project(data: ProjectProps) {
    const className = data.important ? 'project project-important' : 'project';
    const projectType = data.inDevelopment ?
        `${data.projectType} · In development`
        : data.projectType;
    const titleLink = data.deploymentLink ? data.deploymentLink : data.githubLink;
    const includeGithubIcon = data.includeGithubIcon ?? true;

    return (
        <div className={className}>
            <div className="top-row">
                <h2><a href={titleLink} target='_blank'>{ data.name }</a></h2>
                <img src={ data.iconLink } />
            </div>
            <p className='project-type'>{ projectType }</p>
            { data.timestamp && <p className='project-timestamp'>{ data.timestamp }</p> }
            <p className='project-desc'>{ data.description }</p>

            <div className="bottom-row">
                <div className="technologies">
                    <p>{ data.customMadeWithText ?? 'Made with:' }</p>
                    { data.technologies.map((tech, _) => (
                        <div key={ tech } className="tech">
                            { tech }
                        </div>
                    ))}
                </div>

                <div className="project-links">
                    {
                        includeGithubIcon &&
                        <a href={data.githubLink} target='_blank'>
                            <img className='github-icon' src="/github-icon.png" alt="Github" />
                        </a>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Project;