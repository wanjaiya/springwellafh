import React from 'react'
import wheel from '../assets/wheel.jpeg'
const About = () => {
    return (
        <div name="about" className='w-full  bg-gray-100 py-8 px-4 ' >
            <div className='max-w-[1440px] mx-auto'>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 text-center underline pb-[2rem]'> About Us</h1>
                <p className="font-bold pb-[2rem]"> Spring Well Adult Family Home, founded and managed by the dedicated mother-daughter team of Mercy Karume and Terry Njoroge, brings a combined wealth of experience exceeding several years in the healthcare industry. Located in 1103 TACOMA AVENUE NE RENTON WA 98056</p>
            <div className='  grid md:grid-cols-2 '>
                <img src={wheel} alt='laptop' className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] uppercase font-bold text-2xl'> Our Goal</p>
                    <p className="font-bold"> At Spring Well Adult Family Home, our primary goal is to provide the highest level of care, ensuring each resident maintains as much independence and uniqueness as possible, all while upholding dignity and respect.</p>

                </div>
                
            </div>
           </div>
        </div>
    )
}

export default About