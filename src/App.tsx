import Hero from './sections/Hero';
import Projects from './sections/Projects';

import Separator from './components/Separator';

import './App.css';

function App() {
    return (
        <div id="app">
            <Hero />
            <Separator />
            <Projects />
            <Separator />
        </div>
    );
}

export default App;