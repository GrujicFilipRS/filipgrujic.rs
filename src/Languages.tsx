import './Languages.css';
import Lang from './Lang.tsx';

function Languages() {

    let descriptions = {
        'C#': 'Test C#',
        'Python': 'Test Python',
        'HTML': 'Test HTML',
        'JavaScript': 'Test JavaScript',
        'MySQL': 'Test MySQL'
    };

    return (
        <div id="languages">
            <h1 className="technologies-title">Technologies I use</h1>

            <div className="languages">
                <Lang
                    className="lang csharp"
                    name="C#"
                    score={4.5}
                    description={descriptions['C#']}
                    technologies={['.NET Framework', 'ASP.NET', 'SignalR']}
                    icon='/csharp-icon.png'
                />
                <Lang
                    className="lang python"
                    name="Python"
                    score={4.5}
                    description={descriptions['Python']}
                    technologies={['Flask']}
                    icon='/python-icon.png'
                />
                <Lang
                    className="lang html"
                    name="HTML & CSS"
                    score={4}
                    description={descriptions['HTML']}
                    technologies={[]}
                    icon='/html-icon.png'
                />
                <Lang
                    className="lang javascript"
                    name="JavaScript"
                    score={3.5}
                    description={descriptions['JavaScript']}
                    technologies={['React']}
                    icon='/javascript-icon.png'
                />
            </div>
        </div>
    );
}

export default Languages;