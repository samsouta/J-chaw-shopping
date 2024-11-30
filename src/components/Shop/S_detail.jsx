import React, { useContext, useEffect, useState } from 'react'
import { Button } from '@mantine/core';
import Rating from '@mui/material/Rating';
import { GiCardboardBox } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { IoBagCheckSharp } from "react-icons/io5";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../features/addToCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import AuthModal from '../AuthModal/AuthModal';
import { stateContext } from '../../contexts/StateContext';
import Loader from '../loader/Loader';
const S_detail = () => {
    const [jdata, setJdata] = useState()
    const {showLogin,setShowLogin} = useContext(stateContext);
    const [Cspiner, setCSpiner] = React.useState(false)
    const token = Cookies.get("token")
    const { id } = useParams();
    const nav = useNavigate()
    const dispatch = useDispatch()
    // j-chaw api fetch
    const fetchData = async () => {
        setCSpiner(true)
        const api = await fetch(`https://bluetv.x10.bz/api/v1/products/${id}`)
        const { data } = await api.json()
        setJdata(data)
        setCSpiner(false)
    }
    useEffect(() => {
        fetchData()
    }, [])

    // add to card handle
    const AddToCardHandle = (price) => {
        try {
            if(token){
                toast.success(' CARD ADDED SUCCESS ', {
                    position: "top-right",
                    autoClose: 500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                dispatch(addProduct({ card: jdata, price: price }))
            }else {
                setShowLogin(true)
                
            }
        } catch (error) {
            console.log(error)
        }
    }
    // buy now handle
    const BuyNowHandle = () => {
        try {
            if(token){
                nav(`/checkout`)
            }else {
                setShowLogin(true)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=' mt-[100px]' >
            <div className=' grid grid-cols-12' >
                <div className=' col-span-6 w-[100%]' >
                    <div className=' flex w-[90%] flex-col gap-y-5 mx-auto'  >
                        <img className=' rounded-lg w-[100%] h-[500px]' src={jdata?.image} alt="" />
                        <div className=' gap-5 w-[100%]  grid grid-cols-12' >
                            <div className=' col-span-4' >
                                <img className=' w-[100%] rounded-lg h-[150px]' src={jdata?.image} alt="" />
                            </div>
                            <div className=' col-span-4' >
                                <img className=' w-[100%] rounded-lg h-[150px]' src={jdata?.image} alt="" />
                            </div>
                            <div className=' col-span-4' >
                                <img className=' w-[100%] rounded-lg h-[150px]' src={jdata?.image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-span-6 flex flex-col gap-y-8' >
                    <div className=' flex-col gap-y-3 flex mt-10' >
                        <h1 className=' text-nun text-[#2C2825] text-wrap break-words text-2xl font-bold' >{jdata?.title}</h1>
                        <p className=' text-mon font-sans text-md text-slate-500  max-w-[600px]' >{jdata?.description}</p>
                        <span className=' text-nun font-medium text-xl flex ' ><Rating className=' mr-3' name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />   2.5</span>
                        <span className=' text-2xl' ><span className='text-2xl text-lora text-[#009176]' >$ </span>{jdata?.price}</span>
                        <div className=' flex gap-x-3' >
                            <Button onClick={() => AddToCardHandle(jdata?.price)} className=' min-w-[260px] text-mon font-thin ' variant="filled" color="#3D3D3F" size="md" radius="xs">ADD TO CARD</Button>
                            <Button onClick={()=> BuyNowHandle()} className=' min-w-[260px] text-mon font-thin ' variant="outline" color="#3D3D3F" size="md" radius="xs">BUY NOW</Button>
                        </div>
                    </div>
                    <div >
                        <h1 className=' text-nun mb-2 text-[#2C2825] text-xl font-bold' >Delivery Option</h1>
                        <div className='flex flex-col gap-y-2' >
                            <span className=' flex items-center gap-x-2' >
                                <GiCardboardBox />
                                <span className=' text-mon font-sans text-md text-slate-500' ><span className=' test-nun font-bold text-md text-[#2C2825]' >100% </span>Original Products</span>
                            </span>
                            <span className=' flex items-center gap-x-2' >
                                <MdPayment />
                                <span className=' text-mon font-sans text-md text-slate-500' ><span className=' test-nun font-bold text-md text-[#2C2825]' >Pay On delivery </span> Might be available</span>
                            </span>
                            <span className=' flex items-center gap-x-2' >
                                <IoBagCheckSharp />
                                <span className=' text-mon font-sans text-md text-slate-500' ><span className=' test-nun font-bold text-md text-[#2C2825]' >Easy 2 week</span> returns</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* hidden area  */}
            <ToastContainer />
            <div className={`${Cspiner ? " visible " : " hidden"} bg-zinc-900/40 backdrop-opacity-20 w-full h-screen top-0 fixed z-50`} >
        <div className='logo-load relative' >
          <div className='loaderc z-[-1] absolute top-[150px] left-[100px]' ></div>
          <Loader />
        </div>
      </div>
            {
                showLogin && 
                <AuthModal/>
            }
        </div>
    )
}

export default S_detail
