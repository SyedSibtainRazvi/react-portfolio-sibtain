import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImage from '../assets/react.png';
import GitHub from '../assets/github.png';
import Bootstrap from '../assets/bootstrap.png'



const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#F6F6F6] text-black'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-black'>Skills</p>
                    <p className='py-4'>I love to work with these technologies. </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto' src={HTML} alt="HTML icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto' src={CSS} alt="HTML icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto' src={JavaScript} alt="HTML icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto' src={ReactImage} alt="HTML icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto' src={GitHub} alt="HTML icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto' src={Bootstrap} alt="HTML icon" />
                        <p className='my-4'>BOOTSTRAP</p>
                    </div>
                </div>
                <div>
                    <p className='py-4'>I am currently exploring <b>Postgres, NextJS and Express</b>.</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;