import React from 'react'
import locationSvg from "../../../assets/SVG/contactUsSvg/location.svg"
import email from "../../../assets/SVG/contactUsSvg/email.svg"
import call from "../../../assets/SVG/contactUsSvg/call.svg"
import GoogleMap from '../../googlemap/GoogleMap'
const C_data_2 = () => {
    return (
        <div >
            <div className=' mt-[300px]' >
                <div className=' flex flex-col items-center gap-y-3' >
                    <h1 className=' text-lora text-4xl font-semibold text-[#2C2825]' >CONTACT US</h1>
                    <span className=' text-nun font-mono text-lg  break-words max-w-[500px] text-[#2C2825] ' >
                        We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.
                    </span>
                </div>
                <div className=' flex justify-around items-center mt-[100px] mx-10 shadow-lg bg-[#fff9e8] py-10 min-h-[350px]' >
                    <ul className=' flex flex-col items-center gap-y-4 ' >
                        <li>
                            <img className=' h-[100px] ' src={locationSvg} alt="" />
                        </li>
                        <li className=' text-nun font-bold text-xl text-[#2C2825] '>Address : </li>
                        <li className='text-mon text-md text-[#2C2825] break-words w-[350px] h-[200px] overflow-y-scroll ' >
                            Taunggyi Pariyatti Monastic College
                            တောင်ကြီးပရိယတ္တိစာသင်တိုက်,
                            R576+F58, မဟာစည်သာသနရိပ်သာလမ်း, Yangon
                        </li>
                    </ul>
                    <ul className=' flex flex-col items-center gap-y-4 ' >
                        <li>
                            <img className=' h-[100px] ' src={email} alt="" />
                        </li>
                        <li className=' text-nun font-bold text-xl text-[#2C2825] '>Email : </li>
                        <li className='text-mon text-center text-md text-[#2C2825] break-words w-[350px] h-[200px] overflow-y-scroll' >
                            samxsouta@gmail.com
                        </li>
                    </ul>
                    <ul className=' flex flex-col items-center gap-y-4 ' >
                        <li>
                            <img className=' h-[100px] ' src={call} alt="" />
                        </li>
                        <li className=' text-nun font-bold text-xl text-[#2C2825] '>Call Us : </li>
                        <li className='text-mon text-center text-md text-[#2C2825] break-words w-[350px] h-[200px] overflow-y-scroll' >
                            09 - 943913985
                        </li>
                    </ul>
                </div>

                <div className=' mx-10 mt-[100px]' >
                    <h1 className=' mb-7 text-3xl text-nun font-bold text-[#2C2825]' >Google Map <span className=' text-mon text-sm text-[#7fd1ae] font-serif' >FIND WITH LOCATION</span></h1>
                    <GoogleMap />
                </div>
            </div>
        </div>
    )
}

export default C_data_2
