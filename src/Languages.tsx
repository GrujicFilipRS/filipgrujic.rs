import './Languages.css';
import Lang from './Lang.tsx';

function Languages() {

    let descriptions = {
        'C#': 'C# - Modern, object-oriented programming language developed by Microsoft for building robust applications across desktop, web, cloud, and games.',
        'Python': 'Python - High-level, general-purpose programming language known for its readability and extensive ecosystem, used in web, data, AI, and automation.',
        'HTML': 'HTML - Standard markup language for structuring and presenting content on the web, forming the foundation of websites and web applications.',
        'JavaScript': 'JavaScript - Lightweight, versatile scripting language that enables dynamic behavior and interactivity in websites and web applications.'
    }; 

    return (
        <div id="languages">
            <h1 className="technologies-title">Technologies I use</h1>

            <div className="languages">
                <Lang
                    className="csharp"
                    score={4.5}
                    description={descriptions['C#']}
                    technologies={['.NET Framework', 'ASP.NET', 'SignalR']}
                    icon='/csharp-icon.png'
                    alignment='left'
                />
                <Lang
                    className="python"
                    score={4.5}
                    description={descriptions['Python']}
                    technologies={['Flask', 'TKinter', 'Pygame']}
                    icon='/python-icon.png'
                    alignment='right'
                />
                <Lang
                    className="html"
                    score={4}
                    description={descriptions['HTML']}
                    technologies={['Cascading Style Sheets']}
                    icon='/html-icon.png'
                    alignment='left'
                />
                <Lang
                    className="javascript"
                    score={3.5}
                    description={descriptions['JavaScript']}
                    technologies={['React', 'SignalR for JS']}
                    icon='/javascript-icon.png'
                    alignment='right'
                />
            </div>
        </div>
    );
}

export default Languages;