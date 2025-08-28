import './Languages.css';
import Lang from './Lang.tsx';

function Languages() {

    let descriptions = {
        'C#': 'Test C#',
        'Python': 'Test Python',
        'HTML': 'Test HTML',
        'JavaScript': 'Test JavaScript'
    }; 

    return (
        <div id="languages">
            <h1 className="technologies-title">Technologies I use</h1>

            <div className="languages">
                <Lang
                    className="csharp"
                    name="C#"
                    score={4.5}
                    description={descriptions['C#']}
                    technologies={['.NET Framework', 'ASP.NET', 'SignalR']}
                    icon='/csharp-icon.png'
                />
                <Lang
                    className="python"
                    name="Python"
                    score={4.5}
                    description={descriptions['Python']}
                    technologies={['Flask', 'TKinter', 'Pygame']}
                    icon='/python-icon.png'
                />
                <Lang
                    className="html"
                    name="HTML & CSS"
                    score={4}
                    description={descriptions['HTML']}
                    technologies={['Cascading Style Sheets']}
                    icon='/html-icon.png'
                />
                <Lang
                    className="javascript"
                    name="JavaScript"
                    score={3.5}
                    description={descriptions['JavaScript']}
                    technologies={['React', 'SignalR for JS']}
                    icon='/javascript-icon.png'
                />
            </div>
        </div>
    );
}

export default Languages;