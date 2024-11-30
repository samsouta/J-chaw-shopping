import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const S_data_3 = () => {
  
  return (
    <div className='' >
      <div className='  flex justify-center' >
        <h1 className=' text-nun text-[5rem] text-[#2C2825] text-wrap  w-[1000px] font-bold' >
          Chase Your Style,Own <br/>the 
          <span id='text-id' className=' ps-5 text-[#009176]' >
            <TypeAnimation
            sequence={[
              "Monents",
              1000,
              "Style",
              1000,
              "Beautiful Day",
              1000
            ]}
            wrapper='span'
            speed={10}
            repeat={Infinity}
            style={{fontSize: '5rem',display: 'inline-block'}}
            
            />
          </span>
        </h1>
      </div>
    </div>
  )
}

export default S_data_3
