import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#ffffff]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#0356FF] text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
                    Syed Sibtain
                </h1>
                <h2 className='text-2xl sm:text-5xl font-bold text-[#8d99ae]'>
                    I'm a Frontend Developer.
                </h2>
                <p className='text-[#000000] py-4 max-w-[700px]'>
                    I’m a frontend developer specializing in building web applications. Currently, I’m focused on
                    building responsive frontend web applications using React JS .
                </p>
                <div>
                    <button className='text-[#000000] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0356FF] hover:border-[#0356FF] hover:text-[#ffffff]'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3 ' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;