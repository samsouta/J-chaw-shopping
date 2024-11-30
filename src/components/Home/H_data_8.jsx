import React from 'react'
import Himg8 from "../../assets/images/H_data_1Img/H_img_8.png";
import Himg9 from "../../assets/images/H_data_1Img/H_img_9.png";
import { useSwiper } from 'swiper/react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Swiper_Nav from './H_data_8/Swiper_Nav';
const H_data_8 = () => {
    return (
        <div className=' mt-[200px] relative' >
            <div className=' flex justify-start ms-[200px] gap-x-9' >
                <div className=' relative' >
                    <div className=' bg-[#BBB6B0] w-[400px] h-[400px]' ></div>
                    <img className=' absolute bottom-0 left-[100px] w-full h-[500px]' src={Himg8} alt="" />
                    <img className=' absolute right-10 top-[-30px] w-[70px] h-auto p-2 bg-[#2B2A2E] ' src={Himg9} alt="" />
                    <div className=' flex gap-x-6 z-10 absolute bottom-[-40px] right-[-30px]' >
                        <img className=' w-[80px] h-[80px]' src="https://i.pinimg.com/564x/bf/61/74/bf61742091f275519cab92f4eaf718ca.jpg" alt="" />
                        <img className=' w-[80px] h-[80px]' src="https://i.pinimg.com/564x/3b/7e/36/3b7e36e690f19e796c4cd37ce5238bd1.jpg" alt="" />
                        <img className=' w-[80px] h-[80px]' src="https://i.pinimg.com/564x/72/36/5c/72365c8a362d12a7bb628a0a709526b5.jpg" alt="" />
                    </div>
                </div>

                <div className=' py-2' >
                    <h1 className=' text-lora text-3xl font-bold text-[#2C2825] ' >Testimonials</h1>
                </div>
            </div>
            {/* // carosel slider */}
            <div className=' relative' >
                <div
                    data-aos="zoom-in-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                    data-aos-mirror="true"
                    data-aos-once="true"
                    data-aos-anchor-placement="top-bottom"
                    className="h-56 app absolute bottom-0 right-40 w-[700px] sm:h-64 xl:h-80 2xl:h-96">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className=' bg-white h-full relative'
                    >
                        <SwiperSlide>
                            <div className=" bg-white h-full p-11">
                                <div className=' flex flex-col gap-y-3' >
                                    <h1 className=' text-nun font-semibold text-2xl text-[#2C2825] ' >Maria Sarapavoo</h1>
                                    <span className=' text-sm font-sans text-nun text-[#A7A39B] ' >Senior Designer</span>
                                    <span className=' text-lg font-serif text-mon text-[#2C2825] block' >The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</span>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" bg-white h-full p-11">
                                <div className=' flex flex-col gap-y-3' >
                                    <h1 className=' text-nun font-semibold text-2xl text-[#2C2825] ' >Maria Sarapavoo</h1>
                                    <span className=' text-sm font-sans text-nun text-[#A7A39B] ' >Senior Designer</span>
                                    <span className=' text-lg font-serif text-mon text-[#2C2825] block' >The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter.</span>
                                </div>
                            </div>
                        </SwiperSlide >
                        <Swiper_Nav />
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default H_data_8
