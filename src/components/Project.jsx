import React from 'react'
import Slider from 'react-slick'
import projects from '../assets/projects.json'
import textContent from '../assets/text';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Project({mode, language}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,         
        centerPadding: '0',  
        appendDots: dots => (
            <div style={{ bottom: '0px'}}>
                <ul> {dots} </ul>
            </div>
        )
    };
    const currentText = language ? textContent.english : textContent.japanese;
  return (
    <div className={`min-h-[100vh] p-20 flex flex-col items-center ${mode ? 'bg-black text-white' : 'bg-white'}`}>
        <h3 className='flex justify-center items-center w-full text-center font-bold text-7xl mt-20 mb-20'>{currentText.projects}</h3>
        <Slider {...settings} className='w-[100%] h-[90vh]'>
            {projects.map((project, index) => (
            <div key={index} className={`mr-10 relative w-full h-[90vh] shadow-lg rounded-lg overflow-hidden ${mode ? 'border-white border-2' : 'border-none'}`}>
                <iframe src={project.demo} title={project.title} className='w-full h-full object-cover rounded-lg'/>

                <div className='absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center gap-20 items-center p-4 transition-opacity duration-300 opacity-0 hover:opacity-100'>
                <h3 className='text-white text-5xl font-semibold mb-2'>{currentText[`demo${project.title}`]}</h3>
                <p className='text-gray-200 text-3xl text-center mb-4'>{currentText[`desc${project.description}`]}</p>
                <div className='flex gap-4'>
                    <a href={project.demo} target='_blank' rel='noopener noreferrer' className='px-8 py-4 bg-blue-500 text-white rounded hover:bg-blue-700'>
                    {currentText.liveSite}
                    </a>
                    <a href={project.github} target='_blank' rel='noopener noreferrer' className='px-8 py-4 bg-gray-500 text-white rounded hover:bg-gray-700'>
                    {currentText.Github}
                    </a>
                </div>
                </div>
            </div>
            ))}
      </Slider>
    </div>
  )
}

export default Project
