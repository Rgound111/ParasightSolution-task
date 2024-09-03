import React from 'react'
import spa4 from '../assets/spa4.jpg'
import spa3 from '../assets/spa3.jpg'

const Secondcomp = () => {
    return (
        <div className='relative overflow-hidden w-full h-fit px-6 py-20 my-8'>
            <div className=' flex justify-evenly items-end px-20  gap-32'>
                <div className='flex-[0.7] flex flex-col  gap-4 z-10 tracking-wide'>
                    <img className='h-[75vh] object-cover' src={spa4} alt="BgImg" />
                    <span className='text-xl font-medium'>Aromatherapy Enhancements</span>
                </div>
                <div className='flex-1 flex flex-col items-end gap-16 select-none z-10 tracking-wide'>
                    <div className=' flex flex-col gap-8'>
                        <span className='text-4xl font-medium'>About Miami Thai Spa</span>
                        <span className='text-base w-[90%] font-normal text-start tracking-wide leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident laudantium temporibus, sequi at, a fugit fugiat nulla consequuntur nobis delectus aspernatur facere. Amet, consequuntur porro possimus error officia voluptate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, voluptas.</span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <img className='flex-1 w-[90%] object-cover' src={spa3} alt="BgImg2" />
                        <span className='text-xl font-medium'>Authentic Thai Technique</span>
                    </div>
                </div>

                <div className='absolute -right-[12vw] bottom-0 z-0 bg-transparent w-full h-[30vh] bg-white border-orange-300 border-8 border-double border-t-0'>
                </div>
            </div>
        </div>
    )
}

export default Secondcomp
