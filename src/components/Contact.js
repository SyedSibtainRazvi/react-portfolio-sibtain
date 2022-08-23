import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000000]  flex justify-center items-center p-4 pb-[8rem] pt-[10rem]'>
      <form method='POST' action="https://getform.io/f/90222247-e7c8-4d7b-ae46-15703850f272" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-white text-white'>Contact</p>
          <p className='text-white py-4'>Let's talk over a coffee ("")?</p>
        </div>
        <input className='bg-[#F6F6F6] p-2 border-2' type="text" placeholder='Name' name='name' required />
        <input className='my-4 p-2 bg-[#F6F6F6] border-2' type="email" placeholder='Email' name='email' required/>
        <textarea className='bg-[#F6F6F6] rounded-xl p-2 border-2' name="message" rows="10" placeholder='Coffee Date and Time :)'></textarea>
        <button className='text-white border-2 hover:bg-white hover:border-white px-4 py-3 my-8 mx-auto flex items-center hover:text-[#000000]'>Collaborate
          <span>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </form>
    </div>
  )
}

export default Contact