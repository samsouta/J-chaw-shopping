import React from 'react'
import Reg_child from '../components/Resgiter/Reg_child'
import introImg from '../assets/SVG/resgister/img/intro.png'
import regGif from '../assets/SVG/resgister/gif/reganime.gif'

const Resgister = () => {
  return (
    <div>
      <div className=' grid grid-cols-12' >
        <div className=' col-span-5 bg-[#F7F3E8] h-screen overflow-hidden ' >
          <div className='ges-bg' >
            <div className='scale-90  ges-bg-2 ' >
              <div className='  flex justify-center relative mt-10' >
                <img className='  object-cover absolute top-[-100px] w-[500px] h-[200px]' src={introImg} alt="" />
                <h1 className=' text-mon text-md text-[#2C2825] font-bold w-[430px] mt-6' >Clay simplifies your prospecting by bringing together 50+ data sources to build highly targeted lead lists  </h1>
              </div>
              <div className=' mt-4 border-b-2 border-gray-400 mx-[90px]' ></div>
              <div >
                <Reg_child />
              </div>
            </div>
          </div>
          <div className=' mt-[40vh]' ></div>
        </div>
        <div className='ges-bg-3  col-span-7 bg-white reg-right-bg h-screen ' >
          <div className=' flex justify-start items-end h-full' >
            <img className=' w-[300px]  ' src={regGif} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resgister
