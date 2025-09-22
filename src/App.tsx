import Hero from './sections/Hero';
import Projects from './sections/Projects';
import References from './sections/References';

import Separator from './components/Separator';

import './App.css';

function App() {
    return (
        <div id="app">
            <Hero />
            <Separator />
            <Projects />
            <Separator />
            <References />
            <Separator />
        </div>
    );
}

export default App;