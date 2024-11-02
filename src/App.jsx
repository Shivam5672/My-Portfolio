import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState(true);
  const [language, setLanguage] = useState(true);
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleMode = (browserMode) => {
    setMode(browserMode);
  }
  const handleLanguage = (browseLanguage) => {
    console.log(browseLanguage)
    setLanguage(browseLanguage);
  }
  const scrollToSection = (section) => {
    switch (section) {
      case 'hero':
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <div className='w-[100vw] flex flex-col'>
        <Navbar handleMode = {handleMode} handleTextLanguage = {handleLanguage} scrollToSection={scrollToSection}/>
        <div ref={heroRef}><Hero mode={mode} language={language} /></div>
        <div ref={skillsRef}><Skills mode={mode} language={language} /></div>
        <div ref={projectsRef}><Project mode={mode} language={language} /></div>
        <div ref={contactRef}><Contact mode={mode} language={language} /></div>
      </div>
    </>
  )
}

export default App
