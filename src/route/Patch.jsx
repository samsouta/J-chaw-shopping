import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
import Navbar_H from '../components/Navbar/Navbar_H'
import About from '../pages/About'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import Setting from '../pages/Setting'
import RouteGardNav from '../components/Navbar/RouteGardNav'
import RoutegardDashboard from '../components/Dashboard/RoutegardDashboard'
import Resgister from '../pages/Resgister'
import Login from '../pages/Login'
import S_detail from '../components/Shop/S_detail'
import CheckOut from '../pages/CheckOut'
const Patch = () => {
  return (
    <div >
      <RouteGardNav>
        <Navbar_H />
      </RouteGardNav>
      <Routes>
        <Route path='/' element={<RoutegardDashboard><Dashboard /></RoutegardDashboard> } />
        <Route path='/home' element={<Home />} />
        <Route path='/resgiter' element={<Resgister/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/detail/:id' element={<S_detail/>}/>
        <Route path='/contactus' element={<Contact />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/checkout' element={<CheckOut/>}/>
      </Routes>
    </div>
  )
}

export default Patch
