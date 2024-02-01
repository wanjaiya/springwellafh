import React from 'react'
import wheel from '../assets/wheel.jpeg'
import Carousel from './Carousel'


const About = () => {
    return (
        <div name="about" className='w-full  bg-gray-100 py-8 px-4 pb-0 ' >
            <div className='max-w-[1440px] mx-auto'>
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 text-center underline pb-[2rem]'> About Us</h1>
                <p className="pb-[2rem]"> Spring Well Adult Family Home, founded and managed by the dedicated mother-daughter team of Mercy Karume and Terry Njoroge, brings a combined wealth of experience exceeding several years in the healthcare industry. <span className='font-bold '>Located in 1103 TACOMA AVENUE NE RENTON WA 98056.</span></p>
            <div className='  grid md:grid-cols-2 '>
                <img src={wheel} alt='laptop' className='w-[500px] mx-auto my-4' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] uppercase font-bold text-2xl'> Our Goal</p>
                    <p className="font-bold"> At Spring Well Adult Family Home, our primary goal is to provide the highest level of care, ensuring each resident maintains as much independence and uniqueness as possible, all while upholding dignity and respect.</p>

                </div>
                
            </div>
            </div>
            
            <Carousel />

           
{/*  
            <div className="w-full py-[3rem] px-4 justify-center">
            <div className="carousel rounded-box carousel-center w-full">
                <div className="carousel-item">
                    <img src={lady} alt="Burger" className="w-full h-[100px]" />
                </div>
                <div className="carousel-item">
                    <img src={doctor} alt="Burger" className="w-full h-[100px]" />
                </div>
                <div className="carousel-item">
                    <img src={social} alt="Burger" className="w-full h-[100px]" />
                </div>
                <div className="carousel-item">
                    <img src={nurse} alt="Burger" className="w-full h-[100px]" />
                </div>
               
            </div>
            </div> */}
        </div>
    )
}

export default About