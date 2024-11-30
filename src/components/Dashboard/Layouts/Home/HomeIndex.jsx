import React from 'react';
import DashNavbar from '../../Context/Navbar/DashNavbar';
import SideBar from '../../Context/SideBar/SideBar';
import CardIndex from '../../Context/Card/CardIndex';

function HomeIndex(props) {
    return (
        <>
            <DashNavbar />
            <div className={` grid grid-cols-12`} >
                <div className=' col-span-3' >
                    <SideBar />
                </div>
                <div className=' col-span-9 ms-3 scale-95 ' >
                    <div className=' mt-28' >
                    <CardIndex />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeIndex;