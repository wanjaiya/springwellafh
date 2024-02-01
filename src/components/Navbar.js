import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [backGround, setBackGround] = useState(false);

    const handleNav = () => {

        if (nav === true) {
            setNav(false);
        } else {
            setNav(true);
        }

    }

    const changeBackGround = () => {
        if (window.scrollY >= 90) {
            setBackGround(true);
        } else {
            setBackGround(false);
        }

    }

    window.addEventListener('scroll', changeBackGround);

    return (
        <div className={backGround ? 'header-bg flex justify-between items-center h-24 mx-auto px-4 text-white md:pl-[10%]  md:pr-[10%]' : 'flex justify-between items-center h-24 max-w-[1440px] mx-auto px-4 text-white'}>
            <h1 className=' md:text-4xl sm:text-4xl text-xl font-bold text-[#00df9a]'>Spring Well Adult Family Home</h1>
            <ul className='hidden md:flex'>
                <li className="p-4"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li className="p-4"> <Link to="services" smooth={true} duration={500}>Services</Link></li>
                <li className="p-4"> <Link to="about" smooth={true} duration={500}>About</Link></li>
               
                <li className="p-4"> <Link to="team" smooth={true} duration={500}>Team</Link></li>
                <li className="p-4"> <Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}

            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <ul className='uppercase p-4 grid'>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="home" smooth={true} duration={500}>Home</Link>

                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="services" smooth={true} duration={500}>Services</Link>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                   
                    <li className="p-4 border-b border-gray-600">
                        <Link to="team" smooth={true} duration={500}>Team</Link>
                    </li>
                    <li className="p-4 ">
                        <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar