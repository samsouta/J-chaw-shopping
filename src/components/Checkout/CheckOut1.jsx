import React from 'react'
import co1 from '../../assets/images/checkout/co2.jpg'
import CheckoutController from "./CO1Child/CheckoutController";
import { IoChevronBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
const CheckOut1 = () => {
  return (
    <div>
      <div className=' grid grid-cols-12 overflow-y-hidden' >
        <div className=' col-span-7 relative' >
          <Link to={`/shop`} >
            <button className=' flex items-center gap-x-2 absolute top-4 left-7' >
              <IoChevronBack className='shadow-sm text-3xl' />
              <span className=' text-nun text-2xl font-medium text-[#2C2825]' >back</span>
            </button>
          </Link>
          <img src={co1} className=' w-full h-screen' alt="" />
        </div>
        <div className=' bg-white col-span-5 w-full h-screen ' >
          <CheckoutController />
        </div>
      </div>
    </div>
  )
}

export default CheckOut1
