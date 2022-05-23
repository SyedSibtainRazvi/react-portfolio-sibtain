import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#000000] '>About</p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold '>
            <p>Hi there! I am Syed Sibtain, a 24-year-old cool Developer, Gamer, and Writer.</p>
          </div>
          <div>
            <p>I am a passionate front-end developer with hands-on experience building web applications. I am currently living in Bangalore. A tech-savy individual who is self-motivated and a fast-paced learner with good interpersonal and organizational skills. And yes, I like to play games and code!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;