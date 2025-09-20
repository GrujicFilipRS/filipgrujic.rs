import { useState } from 'react';
import './Code.css';

function Code() {
    const [lang, setLang] = useState<'py' | 'cs' | 'ts'>(() => {

        const stored = localStorage.getItem('code-lang');

        if (stored === 'py' || stored === 'cs' || stored === 'ts') {
            return stored;
        }

        return 'py';
    });

    return (
        <div className="code">
            <div className="code-nav">
                <div className="code-options">
                    <button className="code-option option1 code-active">
                        <p>main.py</p>
                    </button>

                    <button className="code-option option2 code-unactive">
                        <p>Program.cs</p>
                    </button>

                    <button className="code-option option3 code-unactive">
                        <p>app.tsx</p>
                    </button>
                </div>

                <div className="code-exit">
                    X
                </div>
            </div>
        </div>
    );
}

export default Code;