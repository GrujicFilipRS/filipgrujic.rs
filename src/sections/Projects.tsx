import Project from '../components/Project';

import './Projects.css';

function Projects() {
    return (
        <div id="projects">
            <h1>PROJECTS</h1>
            <div className="projects-list">
                <Project
                    name='Social network'
                    projectType='Solo project'
                    iconLink='/social-icon.png'
                    description='A social media web application, similar to Instagram, designed for sharing photos, posts, and user interactions in real time.'
                    githubLink='https://github.com/GrujicFilipRS/social-network'
                    deploymentLink='https://network.filipgrujic.rs/'
                    technologies={['FastAPI', 'Vue.js']}
                    inDevelopment={true}
                />
                
                <Project
                    name='Bill splitter'
                    projectType='Team hackathon submission'
                    iconLink='/bill-icon.png'
                    description='A web and android application that allows users to automatically split a shared bill. For roommates, friend groups, travel groups, etc.'
                    githubLink='https://github.com/GrujicFilipRS/splitsmart'
                    technologies={['React', 'Flask']}
                    inDevelopment={true}
                />

                <Project
                    name='Online library'
                    projectType='Team hackathon submission'
                    iconLink='/book-icon.png'
                    description='A web application that allows students to access and read books from the Serbian school curriculum.'
                    githubLink='https://github.com/Ronkly/online-biblioteka'
                    technologies={['Flask', 'HTML']}
                />

                <Project
                    name='Algorithm visualizer'
                    projectType='Solo project'
                    iconLink='/algorithm-icon.png'
                    description='A desktop application for visualizing common computer science algorithms.'
                    githubLink='https://github.com/GrujicFilipRS/algorithm-visualizer'
                    technologies={['Pygame', 'CTK']}
                />

                <Project
                    name='Banking system'
                    projectType='School project'
                    iconLink='/accounting-icon.png'
                    description='A desktop application for managing a personal checkings and a savings account.'
                    githubLink='https://github.com/GrujicFilipRS/accounting'
                    technologies={['.Net', 'MySQL']}
                />
            </div>
        </div>
    );
}

export default Projects;