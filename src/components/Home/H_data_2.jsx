import React from 'react'
import Himg3 from "../../assets/images/H_data_1Img/H_img_3.png"
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
const H_data_2 = () => {
    return (
        <div>
            <div 
             data-aos="fade-up"
             data-aos-offset="200"
             data-aos-delay="50"
             data-aos-duration="800"
             data-aos-easing="linear"
             data-aos-mirror="true"
             data-aos-once="true"
             data-aos-anchor-placement="top-bottom"
            className=' grid grid-cols-12 mt-[170px]' >
                <div
                    className=' flex justify-center col-span-6' >
                    <img className=' w-[500px] object-cover h-[400px]' src={Himg3} alt="" />
                </div>
                <div
                    className=' col-span-6 ' >
                    <div className='flex flex-col  break-words w-[400px]' >
                        <span className='text-3xl text-[#2C2825] w-[300px] break-words text-lora font-serif' >Gold Woven Chain
                            Bracelet in Black</span>
                        <span className='text-sm text-mon mt-3 text-[#2C2825] font-serif' >
                            This bracelet features a 5MM Stainless Steel chain with Nylon cord braiding. Each bracelet includes a polishing pad and a cotton jewelry pouch. Proudly made by hand in Atlanta, GA.
                        </span>
                    </div>
                    <div className=' mt-7' >
                        <span className=' text-lg text-[#2C2825] text-nun font-sans' >Size</span>
                        <ul className=' w-[300px] flex gap-x-10 justify-start' >
                            <li className=' text-md text-nun cursor-pointer text-[#2C2825] font-serif' >S</li>
                            <li className=' text-md text-nun cursor-pointer text-[#2C2825] font-serif' >M</li>
                            <li className=' text-md text-nun cursor-pointer  text-[#2C2825] font-serif' >L</li>
                        </ul>
                    </div>
                    <div className=' flex items-center gap-x-5 mt-10' >
                        <Link to={'/shop'} ><Button variant="filled" size="md" radius="xs" color='#3D3D3F' ><span className=' text-nun font-thin' >ADD TO CARD</span></Button></Link>
                        <span className=' text-xl text-lora font-medium' >$ 549.29</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default H_data_2
