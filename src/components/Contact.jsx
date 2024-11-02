import React from 'react'
import textContent from '../assets/text'

function Contact({mode, language}) {
    const currentText = language ? textContent.english : textContent.japanese;
  return (
    <div className={`flex p-20 min-h-[30vh] w-full bg-blue-500 ${mode ? 'bg-gray-800' : 'bg-blue-500'}`}>
      <h3 className='text-center flex items-center justify-center w-[50%] text-7xl font-bold text-white'>{currentText.SocialLinks}</h3>
      <div className='w-[50%] flex flex-col h-full gap-10'>
        <div className='h-[10%] flex items-center gap-4 w-full justify-end'>
            <a className='h-full cursor-pointer' href='https://linkedin.com/in/shivam-bansal-341374232/' target='_blank'><img className='h-full w-10' src='./src/public/linkedin.png'></img></a>
            <h5 className={`w-[50%] cursor-pointer text-white text-left text-2xl font-bold hover:underline`}>{currentText.linkedin}</h5>
        </div>
        <div className='h-[10%] flex items-center gap-4 w-full justify-end'>
            <a className='h-full cursor-pointer' href='https://github.com/Shivam5672' target='_blank'><img className='h-full w-10' src='./src/public/github.png'></img></a>
            <h5 className={`w-[50%] cursor-pointer text-white text-left text-2xl font-bold hover:underline`}>{currentText.Github}</h5>
        </div>
        <div className='h-[10%] flex items-center gap-4 w-full justify-end'>
            <a className='h-full cursor-pointer' href='https://www.leetcode.com/Shiv_as_Shivam' target='_blank'><img className='h-full w-10' src='./src/public/leetcode.png'></img></a>
            <h5 className={`w-[50%] cursor-pointer text-white text-left text-2xl font-bold hover:underline`}>{currentText.leetcode}</h5>
        </div>
      </div>
    </div>
  )
}

export default Contact
