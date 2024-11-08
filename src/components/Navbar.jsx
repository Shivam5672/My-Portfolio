import React, { useState, useEffect } from 'react'
import textContent from '../assets/text.js';

function Navbar({handleMode, handleTextLanguage, scrollToSection}) {
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState(true);
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const handleLanguage = () => {
        setLanguage(!language);
    }
    useEffect(() => {
        handleMode(darkMode);
    }, [darkMode, handleMode]);
    useEffect(() => {
        handleTextLanguage(language);
    }, [language, handleTextLanguage]);
    const currentText = language ? textContent.english : textContent.japanese;
  return (
    <div className={`h-20 w-full shadow-black shadow-lg flex justify-around items-center p-3 ${!darkMode ? '': 'dark'}`}>
        <div className='h-full w-[30%]  flex justify-center items-center xsm:h-[10%]'>
            <img className='h-full' src="/logoNavbar.png"/>
            <h3 className='text-3xl font-bold'>{currentText.name}</h3>
        </div>
        <div className='flex justify-around items-center h-full w-[60%] text-2xl cursor-pointer'>
            <div onClick={() => scrollToSection('hero')} className='h-full transition-all duration-100 ease-in-out flex items-center hover:rounded-2xl w-[20%] justify-center hover:text-white font-normal hover:bg-red-600'>{currentText.home}</div>
            <div onClick={() => scrollToSection('skills')} className='h-full transition-all duration-100 ease-in-out flex items-center hover:rounded-2xl w-[20%] justify-center hover:text-white font-normal hover:bg-red-600'>{currentText.skills}</div>
            <div onClick={() => scrollToSection('projects')} className='h-full transition-all duration-100 ease-in-out flex items-center hover:rounded-2xl w-[20%] justify-center hover:text-white font-normal hover:bg-red-600'>{currentText.projects}</div>
            <div onClick={() => scrollToSection('contact')} className='h-full transition-all duration-100 ease-in-out flex items-center hover:rounded-2xl w-[20%] justify-center hover:text-white font-normal hover:bg-red-600'>{currentText.contact}</div>
        </div>
        <div className='h-full w-[30%] flex justify-around'>
            <div className='h-full w-[50%] flex items-center justify-center'>
                <input id='switch' className='w-0 h-0 sr-only' type='checkbox' onClick={handleLanguage}/>
                <label htmlFor='switch' className={`toggleSwitch h-[90%] ${language ? 'english' : 'japanese'}`}>Toggle</label>
            </div>
            <div className='h-full w-[50%] flex items-center justify-center'>
                {
                    (darkMode === true) ? 
                    (<img className='w-[20%] h-full moon' src='/moon-solid.svg' onClick={handleDarkMode}></img>)
                    :
                    (<img className='w-[20%] h-full sun' src='/sun-solid.svg' onClick={handleDarkMode}></img>)
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar
