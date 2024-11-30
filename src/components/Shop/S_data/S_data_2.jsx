import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import 'swiper/css';
import S_swiper_btn from './Sdata2/S_swiper_btn';
import { stateContext } from '../../../contexts/StateContext';
import { useNavigate } from 'react-router-dom';
const S_data_2 = () => {
    const {jdata} = useContext(stateContext);
    const nav = useNavigate();
    const cardHandle = (id)=>{
        nav(`/detail/${id}`)
    }
    return (
        <div className='' >
            <div className=' app  flex flex-col items-center gap-6 mt-36' >
                <h1 className=' text-nun text-3xl min-w-[960px] text-[#2C2825]' >Best Seller</h1>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    className=' max-w-[960px] relative'
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        jdata?.map((item) => {
                            return (
                                <SwiperSlide onClick={()=> cardHandle(item?.id)} key={item?.id} >
                                    <Card className="py-4 bg-[#fff9e8] cursor-pointer ">
                                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                                            <p className="text-nun uppercase font-bold"><span className=' text-lora text-[#00755e]' >$</span>{item?.price}</p>
                                            <small className="text-default-500">12 Tracks</small>
                                            <h4 className="font-bold text-large">Frontend Radio</h4>
                                        </CardHeader>
                                        <CardBody className="overflow-visible py-2">
                                            <Image
                                                alt="Card background"
                                                className="object-fill w-full h-[300px] rounded-xl"
                                                src={item?.image}
                                                width={270}
                                            />
                                        </CardBody>
                                    </Card>
                                </SwiperSlide>
                            )
                        })
                    }
                    <S_swiper_btn/>
                </Swiper>
            </div>
        </div>
    )
}

export default S_data_2
