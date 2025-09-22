import './Reference.css';

interface ReferenceProps {
    name: string;
    jobTitle: string;
    contactUrl: string;
    description: string;
    iconUrl: string;
    endReference?: boolean;
}

function Reference(data: ReferenceProps) {
    return (
        <div className={`reference ${data.endReference ? 'extra-margin-reference' : ''}`}>
            <div className="lside-reference">
                <div className="name-image-pair">
                    <img src={ data.iconUrl } />
                    <a href={ data.contactUrl } target='_blank'>{ data.name }</a>
                </div>

                <p className="job-title"> { data.jobTitle }</p>
            </div>

            <div className="rside-reference">
                <p className="reference-desc"> { data.description }</p>
            </div>

        </div>
    )
}

export default Reference;