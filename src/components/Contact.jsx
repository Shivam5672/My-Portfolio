import React, { useRef, useEffect } from 'react';
import textContent from '../assets/text';

function Contact({ mode, language }) {
    const currentText = language ? textContent.english : textContent.japanese;
    const contactRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-left');
                }
            },
            { threshold: 0.3 }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={contactRef}
            className={`contact-section flex p-20 min-h-[30vh] w-full ${mode ? 'bg-gray-800' : 'bg-blue-500'}`}
        >
            <h3 className='text-center flex items-center justify-center w-[50%] text-7xl font-bold text-white'>
                {currentText.SocialLinks}
            </h3>
            <div className='w-[50%] flex flex-col h-full gap-10'>
                <div className='contact-link h-[10%] flex items-center gap-4 w-full justify-end'>
                    <a
                        className='h-full cursor-pointer'
                        href='https://linkedin.com/in/shivam-bansal-341374232/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='h-full w-10' src='/linkedin.png' alt='LinkedIn' />
                    </a>
                    <h5 className='w-[50%] cursor-pointer text-white text-left text-2xl font-bold hover:underline'>
                        {currentText.linkedin}
                    </h5>
                </div>
                <div className='contact-link h-[10%] flex items-center gap-4 w-full justify-end'>
                    <a
                        className='h-full cursor-pointer'
                        href='https://github.com/Shivam5672'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='h-full w-10' src='/github.png' alt='GitHub' />
                    </a>
                    <h5 className='w-[50%] cursor-pointer text-white text-left text-2xl font-bold hover:underline'>
                        {currentText.Github}
                    </h5>
                </div>
                <div className='contact-link h-[10%] flex items-center gap-4 w-full justify-end'>
                    <a
                        className='h-full cursor-pointer'
                        href='https://www.leetcode.com/Shiv_as_Shivam'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img className='h-full w-10' src='/leetcode.png' alt='LeetCode' />
                    </a>
                    <h5 className='w-[50%] cursor-pointer text-white text-left text-2xl font-bold hover:underline'>
                        {currentText.leetcode}
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Contact;
