import React from 'react'
import Himg1 from "../../assets/images/H_data_1Img/H_img_1.png"
import Himg2 from "../../assets/images/H_data_1Img/H_img_2.png"
import { Button } from '@mantine/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthModal from '../AuthModal/AuthModal';
AOS.init();
const H_data_1 = () => {

    return (
        <div>
            <div className=' grid grid-cols-12' >
                <div className=' col-span-6 mt-[80px] ' >
                    <div className=' flex items-center flex-col' >
                        <div
                            data-aos="zoom-out-right"
                            data-aos-offset="200"
                            data-aos-delay="10"
                            data-aos-duration="1000"
                            data-aos-easing="linear"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"
                        >
                            <img className=' w-[400px]  h-[300px] object-cover' src={Himg1} alt="" />

                        </div>
                        <span
                            data-aos="flip-up"
                            data-aos-offset="200"
                            data-aos-delay="100"
                            data-aos-duration="1000"
                            data-aos-easing="linear"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top-bottom"
                            className=' text-center text-[#2C2825] text-[3.5rem] w-[550px] leading-[80px] break-words text-lora font-medium' >Jewelery tells a great story</span>
                    </div>
                    <div
                        className=' w-full ms-[80px] flex justify-start gap-x-7 mt-[80px] ' >
                        <ul>
                            <li className=' text-lg text-[#2C2825] text-lora font-medium' >Gold</li>
                            <li className=' text-sm text-nun text-[#2C2825] mt-2 font-serif w-[240px] break-words' >Her provision acuteness had
                                two why antondon.</li>
                        </ul>
                        <ul>
                            <li className='text-lg text-[#2C2825] text-lora font-medium'>Silver</li>
                            <li className=' text-sm text-nun mt-2 text-[#2C2825] font-serif w-[240px] break-words' >Her provision acuteness had two why intention.</li>
                        </ul>
                    </div>
                </div>
                {/* //other side */}
                <div className=' col-span-6' >
                    <div>
                        <div className=' flex flex-col  break-words w-[400px]' >
                            <span className=' text-xl text-[#2C2825] text-lora font-serif' >Our Story</span>
                            <span className=' text-sm text-mon mt-2 text-[#2C2825] font-serif' >modern jewelry is made of gold, silver, or platinum, often with precious or semiprecious stones, it evolved from shells, animal teeth, and other items used as body decoration in prehistoric times.</span>
                        </div>
                        <div
                            data-aos="zoom-in"
                            data-aos-offset="200"
                            data-aos-delay="10"
                            data-aos-duration="1000"
                            data-aos-easing="linear"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"
                            className=' flex flex-col justify-center relative' >
                            <img className=' w-[400px] h-[450px]' src={Himg2} alt="" />
                            <div>
                                {/* <Button variant="filled" size=" md" radius="xs" color='#3D3D3F' ><span className=' text-nun font-thin' >CREACT ACCOUNT NOW</span></Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* // hidden area */}
            {/* // auth modal  */}
            <AuthModal/>
        </div>
    )
}

export default H_data_1
