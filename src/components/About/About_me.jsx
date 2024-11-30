import React, { useContext, useEffect } from 'react'
import { Image } from "@nextui-org/react";
import { stateContext } from '../../contexts/StateContext';
import { useLocation } from 'react-router-dom';

const About_me = () => {
  const { aboutRef } = useContext(stateContext);
 
  return (
    <>
        <div ref={aboutRef} id="about-me" className='grid grid-cols-10 py-[70px] h-screen w-full' >
                {/* <div className=' flex flex-col justify-center items-center gap-y-4'  >
                    <Avatar className=' w-[200px] h-[200px]' isBordered color="default" src={deve} />
                    <ul className=' flex flex-col justify-center items-center gap-y-3' >
                        <li className=' text-nun text-2xl font-bold text-[#2C2825]' >Si Thu Min</li>
                        <li className=' text-nun test-sm font-serif  text-[#2C2825] ' >Fullstack Developer</li>
                    </ul>
                </div> */}
                {/* side 1 */}
                <div className=' col-span-5 px-5 pt-28 ' >
                    <h1 className=' text-mon text-[4rem] font-bold leading-none' >We’re changing the way people connect.</h1>
                    <p className=' text-nun text-xl mt-6' >Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua</p>
                </div>
                {/* side 2*/}
                <div className=' grid grid-cols-12 gap-x-5 gap-y-5 col-span-5' >
                    <div className=' col-span-4' >
                       <div className='grid grid-cols-1 place-items-center h-full '>
                       <Image
                            isZoomed
                            width={240}
                            className=' h-[300px] rounded-lg'
                            alt="NextUI Fruit Image with Zoom"
                            src="https://i.pinimg.com/564x/f1/37/b1/f137b1914b1b9358e9ff9c0a76b852f3.jpg"
                        />
                       </div>
                    </div>
                    <div className=' col-span-4' >
                        <div className=' grid gap-y-3' >
                        <Image
                            isZoomed
                            width={240}
                            className=' h-[300px] rounded-lg'
                            alt="NextUI Fruit Image with Zoom"
                            src="https://i.pinimg.com/564x/8f/27/30/8f27308588d3d4cb3c4bc75bd54c848d.jpg"
                        />
                        <Image
                            isZoomed
                            width={240}
                            className=' h-[300px] rounded-lg'
                            alt="NextUI Fruit Image with Zoom"
                            src="https://i.pinimg.com/564x/79/42/26/79422615bb3cc9dea29d4e141aaf8dfb.jpg"
                        />
                        </div>
                    </div>
                    <div className=' col-span-4' >
                        <div className=' grid gap-y-3' >
                        <Image
                            isZoomed
                            width={240}
                            className='rounded-lg'
                            alt="NextUI Fruit Image with Zoom"
                            src="https://i.pinimg.com/736x/83/4f/4b/834f4bb0507e1a8eaf497dc9b85a1c34.jpg"
                        />
                        <Image
                            isZoomed
                            width={240}
                            className='rounded-lg'
                            alt="NextUI Fruit Image with Zoom"
                            src="https://i.pinimg.com/564x/4f/5f/e2/4f5fe2c2b0c4ecf3aa8629229a16db39.jpg"
                        />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default About_me
