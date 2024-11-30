import React, { useContext } from 'react'
import { Image } from "@nextui-org/react";
import { stateContext } from '../../contexts/StateContext';
const About_mission = () => {
  const { missionRef } = useContext(stateContext);

    return (
        <div ref={missionRef} id='about-mission'>
            <div className='grid grid-cols-10 mt-10 h-screen w-full' >
                {/* side 1 */}
                <div className=' col-span-5 px-5 pt-28 ' >
                    <h1 className=' text-mon text-2xl font-extrabold leading-none' >Our mission</h1>
                    <p className=' text-nun text-xl mt-6' >Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua</p>
                    <p className=' text-nun text-lg mt-6' >Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua</p>
                    <p className=' text-nun text-lg mt-6' >Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua</p>
                </div>
                {/* side 2*/}
                <div className='col-span-5 pt-28 ' >
                    <div className=' grid gap-y-4 place-content-center mt-11' >
                        <div className=' row-span-1 grid gap-y-4' >
                            <h1 className=' text-nun text-[50px] font-bold'>44 million</h1>
                            <span className=' text-mon text-md' >Transactions every 24 hours</span>
                        </div>
                        <div className=' row-span-1 grid gap-y-4' >
                            <h1 className=' text-nun text-[50px]  font-bold'>$119 trillion</h1>
                            <span className=' text-mon text-md'>Assets under holding</span>
                        </div>
                        <div className=' row-span-1 grid gap-y-4' >
                            <h1 className=' text-nun text-[50px] font-bold'>46,000</h1>
                            <span className=' text-mon text-md'>New users annually</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' w-full flex justify-center' >
                <Image
                    className=' w-[88rem] h-[35rem] object-cover rounded-2xl'
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    fallbackSrc="https://via.placeholder.com/300x200"
                    alt="NextUI Image with fallback"
                />
            </div>
        </div>
    )
}

export default About_mission
