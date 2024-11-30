import React from 'react'
import Himg7 from "../../assets/images/H_data_1Img/H_img_7.jpg"
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'
const H_data_6 = () => {
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
                    className=' col-span-6 flex justify-center' >
                    <img className=' w-[400px] h-auto' src={Himg7} alt="" />
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
                    className=' col-span-6 flex items-center' >
                    <div className=' flex flex-col gap-y-10' >
                        <ul className=' flex flex-col gap-y-5 break-words w-[440px]' >
                            <li className='text-[#2C2825] text-nun text-xl tracking-wider font-bold' >Trendy</li>
                            <li className='text-[#2C2825] text-mon text-sm font-serif' >A collection of hammered gold discs swing from the top and bottom of a shimmery gold hoop, creating a noisy fringe. Earring attaches to a standard fishhook fitting. Sold as one pair of earrings.Other hoop designs do not complete the circle, but penetrate through the ear in a post, using the same attachment techniques that apply to stud earrings.</li>
                        </ul>
                        <div>
                            <Link to={'/shop'} >
                            <Button variant="filled" size="md" radius="xs" color='#3D3D3F' ><span className=' text-nun font-thin' >GO TO SHOP</span></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default H_data_6
