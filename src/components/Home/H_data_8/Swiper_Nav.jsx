import React from 'react'
import { useSwiper } from 'swiper/react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Swiper_Nav = () => {
    const swiper = useSwiper();
  return (
    <div className='swiper-nav-btns z-50 fixed top-[-80px] right-0 flex gap-x-5' >
        <button className=' bg-white  w-[50px] h-[50px] rounded-full p-2 flex justify-center items-center' onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack className='  text-lg text-[#3D3D3F]' />
        </button>
        <button className=' bg-[#3D3D3F]  w-[50px] h-[50px] rounded-full p-2 flex justify-center items-center ' onClick={() => swiper.slideNext()}>
        <IoIosArrowForward className=' text-white text-lg' />
        </button>
    </div>
  )
}

export default Swiper_Nav
