import { useState, useRef, useEffect } from 'react';
import front  from '../assets/facility/front.jpeg'
import living from '../assets/facility/living.jpeg'
import entrance from '../assets/facility/entrance.jpeg'
import dinning from '../assets/facility/dining.jpeg'
import corridor from '../assets/facility/corridor.jpeg'
import bed from '../assets/facility/bed.jpeg'
import loo from '../assets/facility/loo.jpeg'
import room1 from '../assets/facility/room1.jpeg'
import room2 from '../assets/facility/room2.jpeg'
import room3 from '../assets/facility/room3.jpeg'
// Data
import Carousels from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Carousel = () => {

    const data = {
        "resources": [
            {
                "title": "Smiling Lady",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": front
            },
            {
                "title": "Doctor",
                "link": "https://k-tech.systems",
                "imageUrl": living
            },
            {
                "title": "Nurse",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": entrance
            },

            {
                "title": "Care",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": dinning
            },
            {
                "title": "Doctor",
                "link": "https://k-tech.systems",
                "imageUrl": corridor
            },
            {
                "title": "Nurse",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": bed
            },
            {
                "title": "Nurse",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": room1
            },
            {
                "title": "Nurse",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": room2
            },
            {
                "title": "Nurse",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": room3
            },

            {
                "title": "Care",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": loo
            }
        ]
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1441 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        laptop: {
            breakpoint: { max: 1440, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };



   

    return (
        <>
            <div className='w-full bg-white py- px-4' >
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-4 text-center underline pb-0'> Our state of the art facilities</h1>
                <div className="carousel w-full py-[3rem] px-4 justify-center">

                    <div className="relative overflow-hidden ">
        <Carousels responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={100000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
                {data.resources.map((resource, index) => {
                    return (
                        <div
                            key={index}
                            className="carousel-item text-center relative h-[25rem]"
                        >
                            <button className="w-full  items-center bg-cover bg-no-repeat pt-8"
                                style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                            >
                                <img
                                    src={resource.imageUrl || ''}
                                    alt={resource.title}
                                    className="aspect-square hidden"
                                />
                            </button>
                         
                        </div>
                    );
                })}



</Carousels>
        
        
     
        
                <div
                   
                    className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.resources.map((resource, index) => {
                        return (
                            <div
                             
                                className="carousel-item text-center relative w-96 snap-start"
                            >
                                
                             
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Carousel;