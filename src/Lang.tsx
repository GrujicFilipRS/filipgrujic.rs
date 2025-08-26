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

            {data.name}
            {data.score}/5
            {data.description}
            {data.technologies}

            <img src={data.icon} />

        </div>
    );
}

export default Lang;