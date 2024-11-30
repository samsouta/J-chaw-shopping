import React from 'react'
import Himg5 from "../../assets/images/H_data_1Img/H_img_5.jpg"
const H_data_4 = () => {
    return (
        <div className=' mt-[60px]' >
            <div className=' grid grid-cols-12' >
                <div
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className=' col-span-6 flex justify-center' >
                    <img className=' w-[400px] h-auto' src={Himg5} alt="" />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className=' col-span-6 flex items-center' >
                    <div className=' flex flex-col gap-y-10' >
                        <h1 className=' text-[#2C2825] break-words leading-tight w-[300px] text-lora text-4xl font-medium' >
                            J-chaw best
                            Collections</h1>
                        <ul className=' flex flex-col gap-y-5 break-words w-[440px]' >
                            <li className='text-[#2C2825] text-nun text-xl tracking-wider font-bold' >Comfort</li>
                            <li className='text-[#2C2825] text-mon text-sm font-serif' >We will reach out to you for the current cost of this permit. Please contact us for more information. Maui Divers Jewelry offers extended sizing which may be subject to an additional cost. Any subsequent resizes after purchase will incur an additional charge. Please note some styles cannot be resized due to their design.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default H_data_4
