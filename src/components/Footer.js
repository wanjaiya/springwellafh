import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';
import { Form } from "react-router-dom";

const Footer = () => {

    return (
        <div className='bg-black' name="contact">
            <div className='max-w-[1440px] mx-auto py-8 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
                <div>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-2'>Spring Well Adult Family Home</h1>
                    <p className='py-4'> Living with Heart, Loving with Care. </p>
                    <div className='flex justify-between  md:w-[55%] my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                    </div>
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div className='sm:flex-row items-center justify-between w-full'>
                        <form className='w-full max-w-lg'>
                            
                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Full Name
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00df9a]" id="inline-full-name" type="text" value="Jane Doe" />
                                </div>
                            </div>



                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                       Email
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00df9a]" id="email" type="email" value="email" />
                                </div>
                            </div>


                            <div className="md:flex md:items-center mb-6">
                                <div className="md:w-1/3">
                                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                        Message
                                    </label>
                                </div>
                                <div className="md:w-2/3">
                                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#00df9a]" id="inline-full-name" type="text" value="Message" />
                                </div>
                            </div>
 
                            <div class="md:flex md:items-center">
                                <div class="md:w-1/3"></div>
                                <div class="md:w-2/3">
                                    <button class="shadow bg-[#00df9a] hover:bg-[#00df9a] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                       Contact Us
                                    </button>
                                </div>
                            </div>
                        </form>


                    </div>

                    <div>
                        {/* <h6 className='font-medium text-gray-400'> Menu</h6>
                        <ul>
                            <li className='py-2 text-sm'>Home</li>
                            <li className='py-2 text-sm'>Company</li>
                            <li className='py-2 text-sm'>About</li>
                        </ul> */}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer


