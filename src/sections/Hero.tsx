import Code from '../components/Code';

import './Hero.css';

function Hero() {
    return (
        <div id="hero">
            <div className="lside-hero">
                <p>Hello, my name is</p>
                <h1>FILIP GRUJIC</h1>
                <p style={{ marginTop: '20px' }}>I am a</p>
                <h2>Web developer</h2>
                <p style={{ marginTop: '10px' }}>as well as a</p>
                <h2>Software engineer</h2>
            </div>

            <div className="rside-hero">
                <Code />
            </div>
        </div>
    );
}

export default Hero;