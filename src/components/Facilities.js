import { useState, useRef, useEffect } from 'react';
import front  from '../assets/facility/front.jpeg'
import living from '../assets/facility/living.jpeg'
import entrance from '../assets/facility/entrance.jpeg'
import dinning from '../assets/facility/dining.jpeg'
import corridor from '../assets/facility/corridor.jpeg'
import bed from '../assets/facility/bed.jpeg'
import loo from '../assets/facility/loo.jpeg'
// Data

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
                "title": "Care",
                "link": "https://indieweb.social/@kendalmintcode",
                "imageUrl": loo
            }
        ]
    }


    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <div  className='w-full bg-white py- px-4' >
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-4 text-center underline pb-0'> Our state of the art facilities</h1>
        <div className="carousel w-full py-[3rem] px-4 justify-center">
            
            <div className="relative overflow-hidden ">
                <div className="flex justify-between absolute top left w-full ">
                    <button
                        onClick={movePrev}
                        className="hover:bg-blue-900/75 text-white w-10  text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-20 -ml-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div
                    ref={carousel}
                    className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {data.resources.map((resource, index) => {
                        return (
                            <div
                                key={index}
                                className="carousel-item text-center relative w-96 h-[18rem]   snap-start"
                            >
                                <button className="w-full  items-center bg-contain bg-no-repeat pt-8"
                                    style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                                >
                                    <img
                                        src={resource.imageUrl || ''}
                                        alt={resource.title}
                                        className="w-full aspect-square hidden"
                                    />
                                </button>
                                {/* <a
                                    href="#"
                                    className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                                >
                                    <h3 className="text-white py-6 px-3 mx-auto text-xl">
                                        {resource.title}
                                    </h3>
                                </a> */}
                            </div>
                        );
                    })}
                </div>
            </div>
            </div>
            </div>
    );
};

export default Carousel;