import Hero from './sections/Hero';
import Projects from './sections/Projects';
import References from './sections/References';
import Other from './sections/Other';

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
            <Other />
        </div>
    );
}

export default App;