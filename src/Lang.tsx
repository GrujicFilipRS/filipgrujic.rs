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
        <div className={data.className}>

            {data.name}<br />
            {data.score}/5<br />
            {data.description}<br />
            {data.technologies}

            {/*<img src={data.icon} />*/}

        </div>
    );
}

export default Lang;