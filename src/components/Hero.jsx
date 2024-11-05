import React from 'react';
import textContent from '../assets/text';

function Hero({mode, language}) {
    const currentText = language === true ? textContent.english : textContent.japanese;
  return (
    <div className={`hero w-[100%] min-h-[90vh] justify-center flex p-10 ${!mode === true ? 'light' : 'dark'} shadow-none`}>
      <div className='flex flex-col w-[50%] gap-10 justify-center items-center'>
        <h1 className='text-center font-bold text-7xl w-max text-white'>{currentText.heroHeading}</h1>
        <p className='text-3xl text-white text-center'>{currentText.heroPara}</p>
        <div className='flex w-[90%] gap-10 text-white'>
            <button className='text-white flex items-center justify-center p-5 w-[60%] bg-red-500 rounded-full text-2xl cursor-pointer hover:bg-black hover:text-white'>{currentText.heroDownloadResume}</button>
            <a href="mailto:shivambansal.ind@gmail.com" className='flex items-center justify-center p-5 w-[60%] bg-red-500 rounded-full text-2xl cursor-pointer hover:bg-black hover:text-white'>{currentText.heroEmailMe}</a>
        </div>
      </div>
      {/* <div className='flex justify-center items-center w-[50%]'> */}
        {/* <iframe src="https://giphy.com/embed/BemKqR9RDK4V2" className="giphy-embed w-full h-full rounded-full overflow-hidden" allowFullScreen></iframe> */}
        {/* <p><a href="https://giphy.com/gifs/matrix-awesome-gifs-gif-quEsMOrr3hmQ8">via GIPHY</a></p> */}
      {/* </div> */}
    </div>
  )
}

export default Hero
