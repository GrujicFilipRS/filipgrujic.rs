import Project from '../components/Project';

import './Projects.css';

function Projects() {
    return (
        <div id="projects">
            <h1>PROJECTS</h1>
            <div className="projects-list">
                <Project
                    name='Online library'
                    projectType='Team hackathon submission'
                    iconLink='/book-icon.png'
                    description='A web application that allows students to access and read books from the Serbian school curriculum.'
                    githubLink='https://github.com/GrujicFilipRS/online-biblioteka'
                    technologies={['Flask', 'HTML']}
                />

                <Project
                    name='Algorithm visualizer'
                    projectType='Solo project'
                    iconLink='/algorithm-icon.png'
                    description='A desktop application for visualizing common computer science algorithms'
                    githubLink='https://github.com/GrujicFilipRS/algorithm-visualizer'
                    technologies={['Pygame', 'Custom TKinter']}
                />
                
                <Project
                    name='Bill splitter'
                    projectType='Team hackathon submission'
                    iconLink='/bill-icon.png'
                    description='A web and android application that allows users to automatically calculate cost of a split bill'
                    githubLink='https://github.com/GrujicFilipRS/splitsmart'
                    technologies={['React', 'Flask']}
                />
            </div>
        </div>
    );
}

export default Projects;