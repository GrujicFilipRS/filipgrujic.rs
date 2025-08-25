import './Hero.css'

function Hero() {
    return (
        <div className="hero">
            <div className="left">
                <p className="hi-text">Hi, my name is</p>
                <p className="im-a-text">I am a</p>
                <p className="aswellas-text">as well as a</p>
            </div>
            <div className="center">
                <h1 className="filip-grujic-text">Filip Grujic</h1>
                <h2 className="software-engineer-text">Software Engineer</h2>
                <h2 className="web-developer-text">Web Developer</h2>
            </div>
            <div className="right">
                <img src="src/assets/filip.png" />
            </div>
        </div>
    );
}

export default Hero;