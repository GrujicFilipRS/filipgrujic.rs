import './Lang.css'
import { useState } from 'react';
import Technology from './Technology';

interface LangProps {
    className: string
    score: number
    description: string
    technologies: string[]
    icon: string
    alignment: string
}

function Lang(data: LangProps) {

    const [hovered, setHovered] = useState(false);

    return (
        <div 
            className={`lang ${hovered ? `lang-hovered` : `lang-unhovered`} ${data.className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {!hovered && <img src={data.icon} className={`lang-icon ${data.className}-icon`} />}

            {hovered &&
            
            <div className={`lang-content lang-content-${data.alignment}`}>
                <div className="image-side">
                    <img src={data.icon} className={`lang-icon ${data.className}-icon`} /><br />

                    <p>{data.description}</p>

                    <p>Experience in:</p>
                    <div className={`xp-list xp-list-${data.alignment}`}>
                        {data.technologies.map(tech => (
                            <Technology
                                name={tech}
                                alignment={data.alignment}
                            />
                        ))}
                    </div>
                </div>

                <div className="skill-side">
                    <h2>Skill</h2>
                </div> 
            </div>
            
            }
        </div>
    );
}

export default Lang;