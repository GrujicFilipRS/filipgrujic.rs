import Hero from './sections/Hero';
import Projects from './sections/Projects';
import References from './sections/References';
import Other from './sections/Other';

import Separator from './components/Separator';

import './App.css';

function App() {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

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