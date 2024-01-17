import React from 'react'

const Services = () => {
    return (
        <div name="services" className="w-full py-[3rem] px-4 justify-center">
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 text-center underline pb-[2rem]'> Our Services</h1>
            <div className='max-w-[1440px] mx-auto grid md:grid-cols-4 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center h-[15rem] bg-white'>
                    <h2 className="text-2xl font-bold text-center  text-[#00df9a] pb-4"> Independent Living </h2>
                    <p>  Residents at this level require minimal assistance, focusing on essential services such as laundry, room cleaning, and meal service.</p>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center bg-white'>
                    <h2 className="text-2xl font-bold text-center  text-[#00df9a] pb-4"> Attended Independence </h2>
                    <p>  Tailored for ambulatory, continent, and oriented residents needing minimal assistance with medication, nutrition, hygiene, and daily living activities.</p>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center bg-white'>
                    <h2 className="text-2xl font-bold text-center  text-[#00df9a] pb-4"> Helpful Assistance </h2>
                    <p>   Geared towards residents with moderate medical needs, including memory and orientation loss, requiring assistance with dressing, grooming, and bi-weekly bathing.
</p>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center bg-white'>
                    <h2 className="text-2xl font-bold text-center  text-[#00df9a] pb-4"> Extended Assistance </h2>
                    <p>  Extended Care involves residents with incontinence and advanced dementia or Alzheimer's, needing more support in medication management, bathing, toileting, and transferring.</p>
                </div>
            </div>

            <div className='max-w-[1440px] mx-auto grid md:grid-cols-4 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center h-[15rem] bg-white'>
                    <h2 className="text-2xl font-bold text-center  text-[#00df9a] pb-4"> Intensive Assistance </h2>
                    <p>   Intensive Care caters to residents with complex medical needs, necessitating the services of a Registered Nurse, including catheterization, dressing changes, and advanced care requirements.
</p>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 justify-center bg-white'>
                    <h2 className="text-2xl font-bold text-center  text-[#00df9a] pb-4"> Death with Dignity </h2>
                    <p>    This level addresses residents facing life-threatening illnesses without a cure, providing hospice care with an emphasis on pain management and comfort.</p>
                </div>
                <div className='w-full shadow-xl flex flex-col p-5 my-4 rounded-lg hover:scale-105 duration-300 justify-center bg-white'>
                    <h2 className="text-2xl font-bold text-center  text-[#00df9a] pb-4"> Additional Services </h2>
                    <ul className='services-list pl-3'>
                        <li>
                            Feeding, positioning every two hours, perineal care, and bed baths for residents facing end-of-life care.

                        </li>
                        <li>
                            24/7 availability to address any questions or concerns.
                        </li>
                  </ul>
                </div>
                
            </div>

        </div>
    )
}

export default Services