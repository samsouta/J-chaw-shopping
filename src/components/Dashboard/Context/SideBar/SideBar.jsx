import React from 'react'
import { HiHome } from "react-icons/hi2";
import { IoMdContact,IoMdAlert } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import { FaTable } from "react-icons/fa6";
import { HiMiniServerStack } from "react-icons/hi2"
const SideBar = () => {
    return (
        <div>
                <div className=' bg-white fixed z-50 top-[2.5%] left-[20px] border-2 border-gray-300 rounded-xl min-w-[350px] h-[95%]' >
                    <div className=' flex flex-col' >
                    <h1 className=' text-nun text-2xl font-bold ms-10 self-start mt-4' >J-chaw Admin Board</h1>
                    <div className=' mt-10 mx-4 flex flex-col gap-y-2' >
                        <button className=' flex items-center gap-x-3 hover:bg-slate-200 px-3 py-1 rounded-md' >
                           <HiHome className=' text-xl' />
                            <span className='text-nun text-lg font-bold hover:bg-slate-200 px-3 py-1 rounded-md' >DashBoard</span>
                        </button>
                        <button className='  flex items-center gap-x-3 hover:bg-slate-200 px-3 py-1 rounded-md' >
                           <IoMdContact className=' text-xl' />
                            <span className='text-nun text-lg font-bold hover:bg-slate-200 px-3 py-1 rounded-md' >Profile</span>
                        </button>
                        <button className='  flex items-center gap-x-3 hover:bg-slate-200 px-3 py-1 rounded-md' >
                           <FaTable className=' text-xl' />
                            <span className='text-nun text-lg font-bold hover:bg-slate-200 px-3 py-1 rounded-md' >Tables</span>
                        </button>
                        <button className='  flex items-center gap-x-3 hover:bg-slate-200 px-3 py-1 rounded-md' >
                           <IoMdAlert className=' text-xl' />
                            <span className='text-nun text-lg font-bold hover:bg-slate-200 px-3 py-1 rounded-md' >Notification</span>
                        </button>
                    </div>
                    </div>
                    <div className=' flex-col flex mt-4' >
                    <h1 className=' text-nun text-2xl font-bold ms-10 self-start mt-4' >Auth Pages</h1>
                    <div className=' mt-10 mx-4 flex flex-col gap-y-2' >
                        <button className=' flex items-center gap-x-3 hover:bg-slate-200 px-3 py-1 rounded-md' >
                           <FaServer className=' text-xl' />
                            <span className='text-nun text-lg font-bold hover:bg-slate-200 px-3 py-1 rounded-md' >Sign In </span>
                        </button>
                        <button className='  flex items-center gap-x-3 hover:bg-slate-200 px-3 py-1 rounded-md' >
                           <HiMiniServerStack className=' text-xl' />
                            <span className='text-nun text-lg font-bold hover:bg-slate-200 px-3 py-1 rounded-md' >Sign Up</span>
                        </button>
    
                    </div>
                    </div>
                </div>
                <div></div>
        </div>
    )
}

export default SideBar
