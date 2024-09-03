import React from 'react'
import './Header.css'
import icon from '../../assets/icon.avif'

const Header = () => {
    return (
        <div className='w-full h-20 fixed top-0 z-40 bg-red-950 flex justify-between items-center px-4 font-serif'>
            <div className='flex justify-center items-center gap-2'>
                <img className='w-16 rounded-full' src={icon} alt="Logo" />
                <div className='flex flex-col'>
                        <span className=' text-xl text-white uppercase tracking-[0.4rem]'>Miami</span>
                        <span className='text-xs text-[#B26666] font-semibold tracking-widest text-center'>Thai Spa</span>
                    </div>
            </div>
            <div className='flex list-none gap-7 uppercase font-normal text-white cursor-pointer'>
                <li className='hover:underline tracking-wide'>Home</li>
                <li className='hover:underline tracking-wide '>About Us</li>
                <li className='hover:underline tracking-wide '>Services</li>
                <li className='hover:underline tracking-wide '>Gallery </li>
                <li className='hover:underline tracking-wide '>Online Booking</li>
                <li className='hover:underline tracking-wide '>Membership</li>
                <li className='hover:underline tracking-wide '>Contact Us</li>
            </div>
        </div>
    )
}

export default Header