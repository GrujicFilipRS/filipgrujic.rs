import './Technology.css';

interface TechProps {
    name: string
    alignment: string
}

function Technology(data: TechProps) {
    return (
        <div className={`xp-item xp-item-${data.alignment}`}>
            <p>{data.name}</p>
        </div>
    );
}

export default Technology;