import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState(true);
  const [language, setLanguage] = useState(true);
  const handleMode = (browserMode) => {
    setMode(browserMode);
  }
  const handleLanguage = (browseLanguage) => {
    console.log(browseLanguage)
    setLanguage(browseLanguage);
  }
  return (
    <>
      <div className='w-[100vw] flex flex-col'>
        <Navbar handleMode = {handleMode} handleTextLanguage = {handleLanguage}/>
        <Hero mode = {mode} language = {language}/>
        <Skills mode = {mode} language = {language}/>
        <Project mode = {mode} language = {language}/>
        <Contact mode = {mode} language = {language}/>
      </div>
    </>
  )
}

export default App
