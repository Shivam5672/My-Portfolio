import React from 'react';
import skills from '../assets/skills.js';
import textContent from '../assets/text';

function Skills({ mode, language }) {
  const currentText = language ? textContent.english : textContent.japanese;
  
  return (
    <div className={`p-10 overflow-x-hidden w-full flex items-center flex-col ${mode ? 'bg-gray-800' : 'bg-blue-500'} min-h-[70vh] text-white`}>
      <h2 className='text-7xl font-bold w-full text-center mb-20'>{currentText.skills}</h2>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 w-[80%]'>
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className='flex justify-center items-center rounded-full w-[40%] transition-transform duration-300 ease-in-out hover:scale-110'
          >
            <img 
              className='object-center w-full transition-all duration-200 hover:shadow-xl' 
              src={`/${skill}`} 
              alt={`${skill} icon`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;
