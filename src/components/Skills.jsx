import React, { useEffect, useRef } from 'react';
import skills from '../assets/skills.js';
import textContent from '../assets/text';

function Skills({ mode, language }) {
  const currentText = language ? textContent.english : textContent.japanese;
  const skillRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, observerOptions);

    skillRefs.current.forEach(skillRef => {
      if (skillRef) observer.observe(skillRef);
    });

    return () => {
      skillRefs.current.forEach(skillRef => {
        if (skillRef) observer.unobserve(skillRef);
      });
    };
  }, []);

  return (
    <div className={`p-10 overflow-x-hidden w-full flex items-center flex-col ${mode ? 'bg-gray-800' : 'bg-blue-500'} min-h-[70vh] text-white`}>
      <h2 className='text-7xl font-bold w-full text-center mb-20'>{currentText.skills}</h2>
      
      <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 w-[80%]'>
        {skills.map((skill, index) => (
          <div 
            key={index}
            ref={(el) => skillRefs.current[index] = el}
            className='relative flex justify-center items-center rounded-full w-[40%] transition-transform duration-300 ease-in-out opacity-0 transform translate-y-5 skill' // Initial hidden state
          >
            <img 
              className='relative object-center w-full transition-all duration-200 hover:shadow-xl'
              src={`/${skill}`} 
              alt={`${skill} icon`}
            />
            <div className='w-full h-full bottom-12 absolute top-0 p-2 flex justify-center items-center rounded-full bg-[#00000053] text-[#757373] transform transition-opacity duration-300 opacity-0 hover:opacity-100'>
              <p className='text-white font-bold text-2xl'>
                {skill.split('.')[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
