import './Other.css';

function Other() {
    return (
        <div id="other">
            <h1>OTHER</h1>

            <div className="other-data">
                <div className="lside-other">
                    <h2>Socials & Contact</h2>

                    <div className="contact">
                        <img src="/github-icon.png" alt="Github" />
                        <a href='https://www.github.com/GrujicFilipRS/' target='_blank'>GrujicFilipRS</a>
                    </div>

                    <div className="contact">
                        <img src="/linkedin.png" alt="LinkedIn" />
                        <a href='https://www.linkedin.com/in/GrujicFilipRS' target='_blank'>GrujicFilipRS</a>
                    </div>

                    <div className="contact">
                        <img src="/insta.png" alt="Instagram" />
                        <a href='https://www.instagram.com/filipgrujicbusiness/' target='_blank'>@filipgrujicbusiness</a>
                    </div>

                    <div className="contact">
                        <img src="/mail.png" alt="E-Mail" />
                        <a href='mailto:filipgrujicbusiness@gmail.com' target='_blank'>filipgrujicbusiness@gmail.com</a>
                    </div>
                </div>

                <div className="rside-other">
                    <div className="cv">
                        <h2>Download CV</h2>
                        <p><b>PDF:</b> <a href='/fgrujic-cv.pdf' download>fgrujic-cv.pdf</a></p>
                    </div>

                    <div className="education">
                        <h2>Education</h2>
                        <p><b>Gimnazija Smart</b></p>
                        <p>Sept 2023 - ongoing (June 2027)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Other;
