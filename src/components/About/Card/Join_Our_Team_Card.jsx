import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

const Join_Our_Team_Card = ({data}) => {
    const {name} = data 
  return (
    <div className=' flex items-center gap-x-4' >
      <i className=' text-xl join-our-team-icon' >< IoCheckmarkCircle /></i>
      <span className=' text-nun text-lg' >{name}</span>
    </div>
  )
}

export default Join_Our_Team_Card
