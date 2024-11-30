import React, { useContext, useEffect } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from "@nextui-org/react";
import { Button } from '@mantine/core';
import { FiFacebook } from "react-icons/fi";
import { SlSocialGoogle } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { GiCrossMark } from "react-icons/gi";
import { stateContext } from '../../contexts/StateContext';

const AuthModal = () => {
    const { onOpenChange } = useDisclosure();
    const {showLogin,setShowLogin} = useContext(stateContext);

    useEffect(() => {
        setShowLogin(true)
    }, [])
    
    return (
        <div>
            {/* <Button onPress={onOpen}>Open Modal</Button> */}
            <Modal size='xl' hideCloseButton={true} isOpen={showLogin} backdrop='opaque' className=' bg-white rounded-lg' onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <button onClick={()=> setShowLogin(false)} className=" right-2 absolute top-2" ><GiCrossMark /></button>

                            <ModalHeader className="flex  text-mon font-medium text-md flex-col gap-1">Welcome back to J-chaw</ModalHeader>
                            <ModalBody>
                                <div className=' flex flex-col gap-y-4' >
                                    <h1 className=' text-nun text-4xl font-bold' >Log In</h1>
                                    <Button onClick={() => window.alert(" while maintenance :) ပြုပြင်နေဆဲ")} bg='#3D3D3F' size='lg' justify="space-between" rightSection={<span />} leftSection={<SlSocialGoogle className=' text-white' />} fullWidth><span className=' text-mon text-sm font-medium' >LOGIN WITH GOOGLE</span> </Button>
                                    <Button onClick={() => window.alert(" while maintenance :) ပြုပြင်နေဆဲ")} color='#3D3D3F' size='lg' justify="space-between" rightSection={<span />} leftSection={<FiFacebook className=' text-white' />} fullWidth><span className=' text-mon text-sm font-medium' >LOGIN WITH FACEBOOK</span></Button>
                                    <Button onClick={() => window.alert(" while maintenance :) ပြုပြင်နေဆဲ")} color='#3D3D3F' size='lg' justify="space-between" rightSection={<span />} leftSection={<SlSocialTwitter className=' text-white' />} fullWidth><span className=' text-mon text-sm font-medium' >LOGIN WITH TWITTER</span></Button>
                                </div>
                                <div className=' border-b-2 border-gray-300 my-5' ></div>
                                <div>
                                    <Link to={`/login`} >
                                        <Button color='#3D3D3F' justify="space-between" rightSection={<span />} leftSection={<TfiEmail className=' text-white' />} size='lg' fullWidth><span className=' text-mon text-sm font-medium' >LOGIN WITH EMAIL</span> </Button>

                                    </Link>
                                </div>
                                <div className=' flex justify-center mt-4' >
                                    <Link to={`/resgiter`} >
                                        <p className='text-[#2C2825] text-mon font-medium text-md  inline-flex' >DON'T HAVE AN ACCOUNT ?<span className=' text-nun font-bold text-md text-[#009176]' > SIGN UP</span></p>

                                    </Link>
                                </div>
                            </ModalBody>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default AuthModal
