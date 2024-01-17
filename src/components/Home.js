import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';
import hands from "../assets/hands.jpg";
import closeup from "../assets/closeup.jpg";

const Home = () => {
    return (
        <div name="home" style={{ backgroundImage: `url(${closeup})` }} className='text-white justify-center  bg-no-repeat bg-cover bg-center ' >
            <div className='bg-black/[.09]'>
                <div className='max-w-[900px] mt-[-96px] w-full h-[32rem] md:h-screen mx-auto text-center flex  flex-col ' >
                    {/* <p className="text-[#00df9a] font-bold p-2 mt-[20%]"> Living with Heart, Loving with Care.</p> */}
                    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3 md:pb-0 mt-[30%] md:mt-[30%]">Committed to delivering</h1>
                    <div className='flex justify-center items-center'>
                        <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'> Compassionate, cozy and personalized care</p>

                    </div>
                    <p className='md:text-2xl text-xl font-bold text-gray-100'> to residents in a supportive and homely environment.</p>

                </div>
            </div>
        </div>
    )
}

export default Home