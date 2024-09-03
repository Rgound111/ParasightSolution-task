import React from 'react'
import products from '../assets/products.jpg'
import { FaArrowRight } from "react-icons/fa";

const Fifthcomp = () => {
    return (
        <div className='relative overflow-hidden w-full h-fit pl-6 py-20 my-8'>
            <div className='flex h-[70vh] justify-center items-center gap-10 z-10'>
                <div className='flex-[1]  ml-20 z-10'>
                    <img className='rounded-md h-[65vh] w-[40vw] object-cover' src={products} alt="" />
                </div>
                <div className='flex-[1.3] mt-40 flex  flex-col gap-60 z-10 cursor-pointer'>
                    <div className=''>
                    <span className=' text-4xl tracking-wide font-semibold'>Miami Thai Spa Opening Hours</span>
                    </div>
                    <div className='flex justify-start gap-48 text-[#B26666]'>
                        <span className='flex items-center gap-5'>View all openings <FaArrowRight /> </span>
                        <span className='flex items-center gap-5'>How to get there <FaArrowRight /> </span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 p-5 w-full z-20 bg-white border border-[#B26666]
            absolute left-[42vw] bottom-40'>
                <span className='font-semibold tracking-wider'>Opening hours</span>
                <span>1 june - 20 August, 07.00 - 24.00</span>
                <span>21 August - 31 May, 8.00 - 22.00</span>
            </div>

            <div className='absolute -right-52 bottom-3 z-0 w-full h-[30vh] bg-transparent border-orange-300 border-8 border-double border-t-0'>
            </div>

        </div>
    )
}

export default Fifthcomp