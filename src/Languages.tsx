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
            <h2>Technologies I use:</h2>

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
                    technologies={['Flask']}
                    icon='/python-icon.png'
                />
                <Lang
                    className="html"
                    name="HTML & CSS"
                    score={4}
                    description={descriptions['HTML']}
                    technologies={[]}
                    icon='/html-icon.png'
                />
                <Lang
                    className="javascript"
                    name="JavaScript"
                    score={3.5}
                    description={descriptions['JavaScript']}
                    technologies={['React']}
                    icon='/javascript-icon.png'
                />
                <Lang
                    className="mysql"
                    name="MySQL"
                    score={3}
                    description={descriptions['MySQL']}
                    technologies={[]}
                    icon='/mysql-icon.png'
                />
            </div>
        </div>
    );
}

export default Languages;