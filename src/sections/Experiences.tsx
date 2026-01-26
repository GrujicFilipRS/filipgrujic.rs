import Project from '../components/Project';

import './Experiences.css';

function Experiences() {
    return (
        <div id="experiences">
            <h1>PROFESSIONAL EXPERIENCE</h1>

            <div className="experience-list">
                <Project
                    name='Fourity'
                    projectType='Web development intern'
                    description='Started development of a web application for managing employee quality-of-office-life requests'
                    timestamp='Jul 2022 - Aug 2022'
                    iconLink='/fourity-logo.png'
                    githubLink='https://www.fourity.com/'
                    technologies={['React', 'PHP']}
                    includeGithubIcon={false}
                    customMadeWithText='Used:'
                />
            </div>
        </div>
    );
}

export default Experiences;