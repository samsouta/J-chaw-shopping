import React, { useContext } from 'react'
import S_data_1 from '../components/Shop/S_data/S_data_1'
import S_data_2 from '../components/Shop/S_data/S_data_2'
import S_data_3 from '../components/Shop/S_data/S_data_3'
import H_data_footer from "../components/Home/H_data_footer";
import { stateContext } from '../contexts/StateContext';
import Loader from '../components/loader/Loader';

const Shop = () => {
  const {Cspiner} = useContext(stateContext);

  return (
    <>
      <div className={`${Cspiner ? " visible " : " hidden"} bg-zinc-900/40 backdrop-opacity-20 w-full h-screen top-0 fixed z-50`} >
        <div className='logo-load relative' >
          <div className='loaderc z-[-1] absolute top-[150px] left-[100px]' ></div>
          <Loader />
        </div>
      </div>
      <div className=' mt-[150px]' >
        <S_data_3 />
        <S_data_2 />
        <S_data_1 />
        <H_data_footer />
      </div>

    </>
  )
}

export default Shop
