import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
import foodpng from '../assets/foodpng.png'

const Banner = () => {
    return (
        <div className='relative overflow-hidden  w-full h-[100vh] py-20 mb-20 mt-10 '>
            <div className='relative ml-28 pt-8 flex flex-col gap-8 z-20'>
                <span className='text-5xl font-semibold flex flex-col gap-2'>Soothe Your Body, <span>Calm Your Mind,</span> <span>Nourish Your Soul</span> </span>
                <span className='w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim autem expedita a blanditiis exercitationem numquam odio ad voluptatem doloremque.</span>
                <span className='text-3xl cursor-pointer'>
                    <FaArrowDown />
                </span>
            </div>

            <div className='absolute left-80 -top-10 z-0 bg-transparent w-full h-[100vh] bg-white border-orange-200 border-8 border-double border-t-0 flex justify-center items-center pr-80'>
                <span className='text-8xl text-[#B26666] '><FaRegPlayCircle /></span>
            </div>

            <div className='absolute left-[50%] -bottom-4'>
                <img className='h-40' src={foodpng} alt="Foodpng" />
            </div>

        </div>
    )
}

export default Banner