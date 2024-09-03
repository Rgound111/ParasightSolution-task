import React from 'react'
import spa1 from '../assets/spa1.jpg'
import spa2 from '../assets/spa2.jpg'
import spa3 from '../assets/spa3.jpg'
import spa4 from '../assets/spa4.jpg'
import { FaArrowRight } from "react-icons/fa";

const Firstcomp = () => {
    return (
        <div className='w-full h-fit px-6 py-20 my-8'>
            <div className='relative flex justify-between items-center ml-20 gap-10'>
                <div className='flex-[0.8] self-start flex flex-col gap-8 capitalize '>
                    <span className='text-4xl font-medium'>Let Your Mind Calm</span>
                    <span className='text-base font-normal text-start tracking-wide leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident laudantium temporibus, sequi at, a fugit fugiat nulla consequuntur nobis delectus aspernatur facere. Amet, consequuntur porro possimus error officia voluptate.</span>
                </div>

                <div className='flex-[1.5] flex gap-3 '>
                    <div className='flex-1 z-10'>
                        <img className='rounded-md object-cover h-72' src={spa1} alt="slideImg" />
                        <span className='flex items-center gap-4 py-2'>Service name <FaArrowRight/></span>
                    </div>
                    <div className='flex-1 z-10'>
                        <img className='rounded-md object-cover h-72' src={spa3} alt="slideImg" />
                        <span className='flex items-center gap-4 py-2'>Service name <FaArrowRight/></span>
                    </div>
                    <div className='flex-1 z-10'>
                        <img className='rounded-md object-cover h-72' src={spa4} alt="slideImg" />
                        <span className='flex items-center gap-4 py-2'>Service name <FaArrowRight/></span>
                    </div>
                    <div className='flex-1 z-10'>
                        <img className='rounded-md object-cover h-72' src={spa2} alt="slideImg" />
                        <span className='flex items-center gap-4 py-2'>Service name <FaArrowRight/></span>
                    </div>
                </div>

                <div className='absolute -left-[35vw] -bottom-16 z-0 bg-transparent w-full h-[30vh] bg-white border-orange-300 border-8 border-double border-t-0'>
                </div>

            </div>
        </div>
    )
}

export default Firstcomp
