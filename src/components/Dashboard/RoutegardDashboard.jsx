import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const RoutegardDashboard = ({children}) => {
    const [token,setToken] = useState(false)
    
    if(token){
        return children
    }else {
        return <Navigate to={`/home`}/>
    }

}

export default RoutegardDashboard
