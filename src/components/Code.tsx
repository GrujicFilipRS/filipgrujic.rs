import { useState, useEffect } from 'react';
import './Code.css';

function Code() {
    const [lang, setLang] = useState<'py' | 'cs' | 'ts'>(() => {
        const stored = localStorage.getItem('code-lang');
        if (stored === 'py' || stored === 'cs' || stored === 'ts') {
            return stored;
        }
        return 'py';
    });

    useEffect(() => {
        localStorage.setItem('code-lang', lang);
    }, [lang]);

    const activeIndex = lang === 'py' ? 0 : lang === 'cs' ? 1 : 2;

    return (
        <div className="code">
            <div className="code-nav">
                <div className="code-options">
                    <button
                        className={`code-option ${activeIndex === 0 ? 'code-active' : 'code-inactive'}`}
                        onClick={() => setLang('py')}
                    >
                        <img src="/python-code-icon.png" alt="Python" />
                        <p>main.py</p>
                    </button>

                    <button
                        className={`code-option ${activeIndex === 1 ? 'code-active' : 'code-inactive'}`}
                        onClick={() => setLang('cs')}
                    >
                        <img src="/csharp-code-icon.png" alt="C#" />
                        <p>Program.cs</p>
                    </button>

                    <button
                        className={`code-option ${activeIndex === 2 ? 'code-active' : 'code-inactive'}`}
                        onClick={() => setLang('ts')}
                    >
                        <img src="/react-code-icon.png" alt="React" />
                        <p>app.tsx</p>
                    </button>
                </div>

                <div className="code-exit">X</div>
            </div>

            <div className="code-text">
                <div className="code-lines">
                    {[1, 2, 3, 4, 5, 6, 7].map((val, _) => ( <p key={val}>{val}</p> ))}
                </div>
                <div className="actual-code">
                    { lang === 'py' && <p><span className='red-code'>def</span> <span className='green-code'>greet_user</span><span className='white-code'>(</span><span className='orange-code'>name</span><span className="white-code">:</span> <span className='cyan-code'>str</span><span className='white-code'>)</span><span className="white-code">:</span><br />    <span className='green-code'>print</span><span className="white-code">(</span><span className='red-code'>f</span><span className='yellow-code'>'Hi, I am </span><span className='red-code'>{'{'}</span><span className='orange-code'>{'name'}</span><span className='red-code'>{'}'}</span><span className='yellow-code'>'</span><span className="white-code">)</span><br /><br /><span className='orange-code'>my_name</span><span className="white-code">:</span> <span className='cyan-code'>str</span> <span className="white-code">=</span> <span className='yellow-code'>'Filip'</span><br /><br /><span className='red-code'>if</span> <span className='cyan-code'>__name__</span> <span className="white-code">==</span> <span className='yellow-code'>'__main__'</span><span className="white-code">:</span><br />    <span className='green-code'>greet_user</span><span className="white-code">(</span><span className='orange-code'>my_name</span><span className="white-code">)</span></p>}

                    {lang === 'cs' && <p><span className='red-code'>public static void</span> <span className='green-code'>Main</span><span className="white-code">(</span><br />    <span className='red-code'>string</span><span className="white-code">[]</span> <span className='orange-code'>args</span><span className="white-code">)</span><br /><span className="white-code">{'{'}</span><br />    <span className='red-code'>string</span> <span className="orange-code">name</span> <span className="white-code">=</span> <span className="yellow-code">"Filip"</span><span className="white-code">;</span><br />    <span className="cyan-code">Console</span>.<span className="span green-code">WriteLine</span><span className="white-code">(</span><br />    <span className="yellow-code">$"Hi, I am </span><span className="red-code">{'{'}</span><span className="orange-code">{'name'}</span><span className="red-code">{'}'}</span><span className="yellow-code">"</span><span className="white-code">);</span><br /><span className="white-code">{'}'}</span></p>}

                    {lang === 'ts' && <p><span className='red-code'>export default function</span> <span className="green-code">App</span><span className="white-code">()</span> <span className="white-code">{'{'}</span><br />  <span className="red-code">const</span> <span className="orange-code">name</span> <span className="white-code">=</span> <span className="yellow-code">'Filip'</span><span className="white-code">;</span><br /><br />  <span className="red-code">return</span> <span className="white-code">(</span><br />    <span className="white-code">{'<'}</span><span className='red-code'>{'h1'}</span><span className="white-code">{'>'}Hi, I am </span><span className='red-code'>{'{'}</span> <span className='orange-code'>name</span> <span className='red-code'>{'}'}</span><span className="white-code">{'<'}/</span><span className='red-code'>{'h1'}</span><span className="white-code">{'>'}</span><br />  <span className="white-code">);</span><br /><span className="white-code">{'}'}</span></p>}
                </div>
            </div>
        </div>
    );
}

export default Code;