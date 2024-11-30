import React, { useContext } from 'react'
import { IoMdContact } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Profile from './General/General Child/Profile';
import MyOrder from './General/General Child/MyOrder';
import OrderCancel from './General/General Child/OrderCancel';
import DangerZone from './General/General Child/DangerZone';
import { stateContext } from '../../contexts/stateContext';
import { Link } from 'react-router-dom';
function getStepPage(step) {
  switch (step) {
    case 0:
      return <Profile />;
    case 1:
      return <MyOrder />;
    case 2:
      return <OrderCancel />;
    case 3:
      return <DangerZone />;

    default:
      throw new Error('Unknown step');
  }
}
const SettingController = () => {
  const { activeStep, setActiveStep } = useContext(stateContext);

  return (
    <div>
      <div className={` grid grid-cols-12 `} >
        <div className={` bg-[#fff9e8] min-h-screen fixed w-[300px]`} >
          {/* components change */}
          <div className=' mx-2 mt-6' >
            <Link to={`/home`} >
              <p className=' flex justify-start items-center rounded-md gap-x-2 p-2 ps-2 mb-2 w-full ' >
                <IoIosArrowBack className='  text-xl text-black' />
                <span className=' text-xl text-nun font-medium text-[#2C2825]' >back</span>
              </p>
            </Link>
            <p className=' flex justify-start items-center rounded-md gap-x-2 p-2 ps-2 w-full ' >
              <IoMdContact className='  text-xl text-[#009176]' />
              <span className=' text-xl text-nun font-medium text-[#009176]' >General</span>
            </p>

            <div className=' ms-7 flex flex-col gap-y-1 ' >
              <button onClick={() => setActiveStep(0)} className={`  ${activeStep === 0 ? "bg-[#3D3D3F]  text-white" : ""} hover:bg-[#3D3D3F] hover:text-white min-w-[250px] p-1 ps-2 rounded-md`} >
                <span className='text-nun flex w-full self-center font-bold '> Profile</span>
              </button>
              <button onClick={() => setActiveStep(1)} className={` ${activeStep === 1 ? "bg-[#3D3D3F]  text-white" : ""} hover:bg-[#3D3D3F] hover:text-white p-1 ps-2 min-w-[250px] rounded-md`} >
                <span className='text-nun flex self-center w-full font-bold'> my Order</span>
              </button>
              <button onClick={() => setActiveStep(2)} className={` ${activeStep === 2 ? "bg-[#3D3D3F]  text-white" : ""} hover:bg-[#3D3D3F] hover:text-white p-1 ps-2 min-w-[250px] rounded-md`}>
                <span className='text-nun flex self-center w-full font-bold'> Order Cancelling</span>
              </button>
              <button onClick={() => setActiveStep(3)} className={` ${activeStep === 3 ? "bg-[#3D3D3F]  text-white" : ""} hover:bg-[#3D3D3F] hover:text-white p-1 ps-2 min-w-[250px] rounded-md`}>
                <span className='text-nun flex self-center w-full font-bold'> DangerZone</span>
              </button>
            </div>
          </div>
        </div>
        <div className=' col-span-4' ></div>
        <div className='col-span-8 overflow-hidden overflow-y-scroll scale-90 ' >
          {getStepPage(activeStep)}
          {/* component change */}
        </div>



      </div>
    </div>
  )
}

export default SettingController
