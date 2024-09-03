import React from 'react'
import spa1 from '../assets/spa1.jpg'
import spa2 from '../assets/spa2.jpg'
import spa3 from '../assets/spa3.jpg'
import spa4 from '../assets/spa4.jpg'

const Thirdcomp = () => {
    return (
        <div className='relative w-full h-fit px-6 py-10 my-8'>

            <div className='py-10  h-fit w-full flex items-center justify-stretch gap-3 '>
                <div className='h-[180vh] overflow-hidden flex-1 flex flex-col gap-4 z-20'>
                    <img className='rounded-md border-[1px] flex-1 object-cover' src={spa1} alt="Images" />
                    <img className='rounded-md border-[1px] flex-1 object-cover' src={spa3} alt="Images" />
                </div>

                <div className='h-[180vh] overflow-hidden flex flex-col flex-1 gap-4 z-20'>
                    <img className='rounded-md border-[1px] flex-[1] object-cover' src={spa3} alt="Images" />
                    <img className='rounded-md border-[1px] flex-[2] object-cover' src={spa1} alt="Images" />
                    <img className='rounded-md border-[1px] flex-[1] object-cover' src={spa2} alt="Images" />
                </div>

                <div className='h-[180vh] overflow-hidden flex flex-col flex-1 gap-4 z-20'>
                    <img className='rounded-md border-[1px] flex-[3] object-cover ' src={spa4} alt="Images" />
                    <img className='rounded-md border-[1px] flex-[1] object-cover ' src={spa1} alt="Images" />
                </div>
            </div>

            <div className='absolute -left-52 bottom-3 z-0 bg-transparent w-full h-[30vh] bg-white border-orange-300 border-8 border-double border-t-0'>
            </div>
        </div>

    )
}

export default Thirdcomp