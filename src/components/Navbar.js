import React, { useState } from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from "../assets/logowhite.png";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const handleClick = () => setNavbar(!navbar);
    return (
        <div className='fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#000000] text-white'>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!navbar ? <FaBars /> : <FaTimes />}
            </div>
            <ul className={!navbar ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#000] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>
            <div>
                <img src={Logo} alt="Logo " style={{ width: '120px', marginRight: '1rem' }} />
            </div>
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0e76a8]'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='/'
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='/'
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#a8dadc]'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='/'
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8d99ae]'>
                        <a
                            className='flex justify-between items-center w-full text-white'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar