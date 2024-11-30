import { Button } from '@mantine/core'
import React, { useContext, useState } from 'react'
import { stateContext } from '../../../../contexts/StateContext';
const Kpay = () => {
  const { nextRef } = useContext(stateContext);
  const [btnLoad, setBtnLoad] = useState(false)
  const handleClick = () => {
    nextRef.current.click()

  }
  return (
    <>
      <div className=' flex flex-col items-center mb-4' >
        <div>
          <img className=' w-[200px] h-auto' src="https://i.pinimg.com/564x/38/d6/03/38d603d68b28c3d750340a921cca406c.jpg" alt="" />
          <span className=' text-nun font-medium text-xl text-[#2C2825 ]' >Scan this code and pay</span>
        </div>
      </div>
      <div className=' flex justify-end' >
        <Button onClick={handleClick} className=' min-w-[120px]' color='#3D3D3F' type='submit' >
          {btnLoad ?
            <span className='loadercb scale-90' ></span>
            :
            "Order Now"
          }
        </Button>
      </div>
    </>
  )
}

export default Kpay
