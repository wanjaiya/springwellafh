import React from 'react'
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';

const Team = () => {
    return (
        <div name="team" className='w-full bg-gray-100 py-16 px-4' >
            <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 text-center underline pb-[2rem]'> Meet the Team</h1>
            <div class="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 mt-[6rem] justify-center">
                <div class="mb-24 md:mb-0 ">
                    <div
                        class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex justify-center">
                            <div class="flex justify-center -mt-[75px]">
                                <img src={avatar2}
                                    class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                            </div>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-4 text-lg font-bold">Mercy Karume</h5>
                            <p class="mb-6">Mercy holds a Nursing Assistant Registered (NAR) certificate from the State of Washington and boasts a remarkable record in various healthcare organizations. With certifications in dementia care, mental health, CPR, First Aid, nurse delegation core, nurse delegation on diabetes, and food handling, Mercy brings a comprehensive skill set to Spring Well.</p>
                            {/* <ul class="mx-auto flex list-inside justify-center">
                                <a href="#!" class="px-2">
                                  
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        class="h-4 w-4 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#!" class="px-2">
                                   
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        class="h-4 w-4 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#!" class="px-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        class="h-3.5 w-3.5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                            </ul> */}
                        </div>
                    </div>
                </div>

                <div class="mb-24 md:mb-0">
                    <div
                        class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div class="flex justify-center">
                            <div class="flex justify-center -mt-[75px]">
                                <img src={avatar1}
                                    class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                            </div>
                        </div>
                        <div class="p-6">
                            <h5 class="mb-4 text-lg font-bold">Terry Njoroge</h5>
                            <p class="mb-6">Terry is a licensed practical nurse in the State of Washington, starting her journey in healthcare as a Certified Nursing Assistant (CNA) in skilled facilities. With experience in home healthcare, assisted living, and healthcare service coordination, Terry is well-equipped to provide the highest standard of care. Like Mercy, she holds certifications in dementia care, mental health, CPR, First Aid, nurse delegation core, nurse delegation on diabetes, and food handling.</p>
                            {/* <ul class="mx-auto flex list-inside justify-center">
                                <a href="#!" class="px-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-primary dark:text-primary-400"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                </a>
                                <a href="#!" class="px-2">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        class="h-4 w-4 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#!" class="px-2">
                                   
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        class="h-3.5 w-3.5 text-primary dark:text-primary-400">
                                        <path fill="currentColor"
                                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                    </svg>
                                </a>
                            </ul> */}
                        </div>
                    </div>
                </div>

              
            </div>

        </div>
    )
}

export default Team