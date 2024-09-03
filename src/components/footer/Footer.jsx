import React from 'react'
import icon from '../../assets/icon.avif'
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='h-fit'>
            <div className='h-full  py-16 bg-red-950 flex  items-center justify-evenly'>
                <div className=' flex gap-6 items-center justify-center'>
                    <img className='w-52 rounded-full' src={icon} alt="Logo" />
                    <div className='flex flex-col gap-2'>
                        <span className=' text-7xl text-white uppercase tracking-[0.4rem]'>Miami</span>
                        <span className='text-2xl text-[#B26666] font-semibold tracking-widest text-center'>Thai Spa</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5 text-white font-medium cursor-pointer select-none'>
                    <div className='text-3xl '>Our Services</div>
                    <div className='flex flex-col font-normal gap-4'>
                        <li className='flex items-center gap-3'><FaAngleRight/> Thai Massage</li>
                        <li className='flex items-center gap-3'><FaAngleRight/> Swedish Massage</li>
                        <li className='flex items-center gap-3'><FaAngleRight/> For Hands Massage</li>
                        <li className='flex items-center gap-3'><FaAngleRight/> Deep Tissue Massage</li>
                        <li className='flex items-center gap-3'><FaAngleRight/> Couples Massage</li>
                    </div>
                </div>

                <div className='flex flex-col gap-5 text-white font-medium cursor-pointer select-none'>
                    <div className='text-3xl '>Contact Us</div>
                    <div className='flex flex-col font-normal list-none gap-4'>
                        <li>Contact No : +91 7709567392</li>
                        <li>Opening Time : 10.30 AM - 10.30 PM</li>
                        <li>Address : Nebula Park , Khadakpada Rd</li>
                        <li>Opposite Mohan heights Near</li>
                        <li>Waylenagar, betukar, Kalyan</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer