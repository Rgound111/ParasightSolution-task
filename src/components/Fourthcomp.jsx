import React from 'react'
import ingrediant from '../assets/ingrediant.jpg'
import spa3 from '../assets/spa3.jpg'

const Fourthcomp = () => {
    return (
        <div className='relative w-full h-fit pl-6 py-20 my-8'>
            <div className='flex gap-10'>
                <div className='self-center flex-1 flex flex-col gap-8 capitalize ml-20 z-10'>
                    <span className='text-4xl font-medium'>Schedule Your Wellness Journey</span>
                    <span className='text-base font-normal text-start tracking-wide leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident laudantium temporibus, sequi at, a fugit fugiat nulla consequuntur nobis delectus aspernatur facere. Amet, consequuntur porro possimus error officia voluptate.</span>
                    <button className='uppercase cursor-pointer w-fit border-double border-4 border-[#B26666] bg-red-950 text-[#B26666] py-2 px-4 '>Book Now</button>
                </div>
                <div className='flex-1 h-[70vh] flex overflow-hidden gap-10 z-10'>
                    <div className='self-start'>
                        <img className='rounded-sm h-[55vh] w-[25vw] object-cover' src={ingrediant} alt="BgImg" />
                    </div>
                    <div className='self-end'>
                        <img className='rounded-sm h-[55vh] w-[25vw] object-cover ' src={spa3} alt="BgImg2" />
                    </div>
                </div>
            </div>

            <div className='absolute -left-[15vw] bottom-28 bg-transparent  z-0 w-full h-[30vh] border-orange-300 border-8 border-double border-t-0 border-r-0'>
                </div>

        </div>
    )
}

export default Fourthcomp
