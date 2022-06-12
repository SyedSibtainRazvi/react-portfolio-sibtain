import React from 'react';
import WeatherU from '../assets/weather-axios.png';
import ExploreKashmir from '../assets/ExploreKashmir.png';
import Webx from '../assets/webx.png';
// import Wemail from '../assets/Wemail.png';

const Projects = () => {
    return (
        <>
            <div name='projects' className='w-full md:h-screen text-black bg-[#ffffff]'>
                <div className='max-w-[1000px] mx-auto p-4 pt-16 flex flex-col justify-center w-full h-full'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 text-black border-black'>
                            Projects
                        </p>
                        <p className='py-6'>Here are some of my Projects. And the rest are on my Github.</p>
                    </div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                        {/* Project 1 */}
                        <div
                            style={{ backgroundImage: `url(${WeatherU})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        >
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    WeatherU
                                </span>
                                <p className=' text-white'>
                                    The Weather Forecast application.
                                </p>
                                <div className='pt-8 text-center'>
                                    <a href='https://weather-axios.netlify.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href='https://github.com/SyedSibtainRazvi/weather-app'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Project 2 */}
                        {/* <div
                            style={{ backgroundImage: `url(${Wemail})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        >
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    WeMail
                                </span>
                                <p className=' text-white'>
                                    A clone of Gmail.
                                </p>
                                <div className='pt-8 text-center'>
                                    <a href='https://we-mail.netlify.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href='https://github.com/SyedSibtainRazvi/WeMail'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div> */}

                        {/* Project 3 */}
                        <div
                            style={{ backgroundImage: `url(${Webx})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        >
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    WebX
                                </span>
                                <p className=' text-white'>
                                    The Crypto app
                                </p>
                                <div className='pt-8 text-center'>
                                    <a href='https://webx-crypto.netlify.app/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href='https://github.com/SyedSibtainRazvi/webex-crypto-app'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        

                        {/* Project 4 */}
                        <div
                            style={{ backgroundImage: `url(${ExploreKashmir})` }}
                            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                        >
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                    Explore Kashmir
                                </span>
                                <p className=' text-white'>
                                    Awesome Tourism Website
                                </p>
                                <div className='pt-8 text-center'>
                                    <a href='https://syedsibtainrazvi.github.io/ExploreKashmir.github.io/'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href='https://github.com/SyedSibtainRazvi/ExploreKashmir.github.io'>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-gray-300 text-black font-bold text-lg'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[5rem]'>
                    <p className='text-2xl font-bold inline border-b-4 text-black border-black'>
                        Blogs
                    </p>
                    <p className='py-8'>And yes, I love to write as well. And I will add them here shortly. STAY TUNED!!!</p>
                </div>
                </div>
                
            </div>
        </>
    );
};

export default Projects;