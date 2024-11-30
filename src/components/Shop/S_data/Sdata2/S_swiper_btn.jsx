import React from 'react'
import { useSwiper } from 'swiper/react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const S_swiper_btn = () => {
    const swiper = useSwiper();
  return (
      <div className='swiper-nav-btns z-50 flex gap-x-5 fixed top-[-10px] right-[240px]  ' >
        <button className=' bg-white  w-[50px] h-[50px] rounded-full p-2 flex justify-center items-center' onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack className='  text-lg text-[#3D3D3F]' />
        </button>
        <button className=' bg-[#3D3D3F]  w-[50px] h-[50px] rounded-full p-2 flex justify-center items-center ' onClick={() => swiper.slideNext()}>
        <IoIosArrowForward className=' text-white text-lg' />
        </button>
    </div>
  )
}

export default S_swiper_btn
