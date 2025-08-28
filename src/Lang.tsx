import './Lang.css'

interface LangProps {
    className: string
    name: string
    score: number
    description: string
    technologies: string[]
    icon: string
}

function Lang(data: LangProps) {
    return (
        <div className={`lang ${data.className}`}>

            {<img src={data.icon} className={`lang-icon ${data.className}-icon`} />}

        </div>
    );
}

export default Lang;