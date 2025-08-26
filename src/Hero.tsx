import './Hero.css'

function Hero() {
    return (
        <div className="hero">
            <p className="hi-text">Hi, my name is</p>
            <p className="im-a-text">I am a</p>
            <p className="aswellas-text">as well as a</p>

            <h1 className="filip-grujic-text">Filip Grujic</h1>
            <h2 className="software-engineer-text">Software Engineer</h2>
            <h2 className="web-developer-text">Web Developer</h2>

            <img src="src/assets/filip.png" />
        </div>
    );
}

export default Hero;