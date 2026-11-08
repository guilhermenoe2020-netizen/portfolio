import { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import BootScreen from './components/BootScreen/BootScreen';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Missions from './sections/Missions/Missions';
import Journey from './sections/Journey/Journey';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import './styles/global.css';

export default function App() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <div className={`app-container${isBooting ? ' app-container-booting' : ' app-container-ready'}`}>
      {isBooting ? (
        <BootScreen onComplete={() => setIsBooting(false)} />
      ) : (
        <>
          <Navigation />
          <main>
            <Home />
            <About />
            <Missions />
            <Journey />
            <Skills />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}