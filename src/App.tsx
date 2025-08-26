import './App.css'
import Hero from './Hero.tsx'
import Languages from './Languages.tsx'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const updateScrollbarWidth = () => {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
    };
    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);
    return () => window.removeEventListener("resize", updateScrollbarWidth);
  }, []);

  return (
    <>
      <Hero/>
      <Languages/>
    </>
  )
}

export default App
