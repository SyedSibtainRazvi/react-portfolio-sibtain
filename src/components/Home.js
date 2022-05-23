import React from 'react';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#ffffff]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#000000] text-2xl'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
                    Syed Sibtain
                </h1>
                <h2 className='text-2xl sm:text-5xl font-bold text-[#8d99ae]'>
                    I'm a Frontend Developer.
                </h2>
                <p className='text-[#000000] py-4 max-w-[700px] mt-4'>
                    I’m a frontend developer specializing in building web applications. Currently, I’m focused on
                    building responsive frontend web applications using React JS .
                </p>
                <div>
                    <button className='text-[#000000] group border-2 px-6 py-3 my-4 flex items-center hover:bg-[#000000] hover:border-[#000000] hover:text-[#ffffff]'>
                        <Link to='projects' smooth={true} duration={500}>
                            View Projects
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;