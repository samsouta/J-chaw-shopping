import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const RouteGardNav = ({children}) => {
    const [hideNav,setHideNav] = useState();
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === `/setting` || location.pathname === `/login` || location.pathname === `/resgiter`  || location.pathname === `/checkout` || location.pathname === `/` ){
            return setHideNav(false)
        }else {
            return setHideNav(true)
        }
    },[location])
  return (
    <div>
        {
            hideNav && children
        }
    </div>
  )
}

export default RouteGardNav
