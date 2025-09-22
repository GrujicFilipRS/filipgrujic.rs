import Reference from '../components/Reference';

import { descriptions } from '../others/descriptions';

import './References.css';

function References() {
    return (
        <div id="references">
            <h1>REFERENCES</h1>

            <Reference
                name='Aleksandar Stojicic'
                jobTitle='Programming teacher at Gimnazija Smart'
                iconUrl='/stojicic.jpeg'
                description={descriptions['stojicic']}
                contactUrl='https://www.linkedin.com/in/aleksandar-stoji%C4%8Di%C4%87-987926259/'
            />

            <Reference
                name='Sinisa Djokovic'
                jobTitle='Former programming teacher at Gimnazija Smart'
                iconUrl='/djokovic.jpeg'
                description={descriptions['djokovic']}
                contactUrl='https://www.linkedin.com/in/sini%C5%A1a-djokovi%C4%87-43a83b60/'
                endReference
            />
        </div>
    );
}

export default References;