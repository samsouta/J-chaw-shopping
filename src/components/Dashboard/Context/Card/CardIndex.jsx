import React from 'react'
import UserIndex from "./CardChild/userCard/UserIndex";
import ChartIndex from "./CardChild/Chart/ChartIndex";
import ProductIndex from "./CardChild/Product/ProductIndex";

const CardIndex = () => {
  return (
    <div className=' flex flex-col gap-y-[30px]' >
      <UserIndex/>
      <ChartIndex/>
      <ProductIndex/>
    </div>
  )
}

export default CardIndex

