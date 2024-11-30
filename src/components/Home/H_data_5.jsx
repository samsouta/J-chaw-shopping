import React from 'react'
import Himg6 from "../../assets/images/H_data_1Img/H_img_6.jpg"
const H_data_5 = () => {
    return (
        <div className=' mt-[60px]' >
            <div className=' grid grid-cols-12' >
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="linear"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className=' col-span-6 flex justify-center items-center' >
                    <div className=' flex flex-col gap-y-10' >
                        <ul className=' flex flex-col gap-y-5 break-words w-[440px]' >
                            <li className='text-[#2C2825] text-nun text-xl tracking-wider font-bold' >100% gold</li>
                            <li className='text-[#2C2825] text-mon text-sm font-serif' >Gold chains were a sign of service to the supreme beings of a particular religion in the past. Nowadays, they are symbols of wealth and class. Rap artists were most likely the ones who brought the custom of wearing gold chains to modern men's everyday life.
                                There are a few reasons why do men wear gold chains.</li>
                        </ul>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="800"
                    data-aos-easing="linear"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className=' col-span-6 flex justify-center' >
                    <img className=' w-[400px] h-auto' src={Himg6} alt="" />
                </div>
            </div>
        </div>
    )
}

export default H_data_5
