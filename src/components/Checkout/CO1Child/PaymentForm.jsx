import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { ImPaypal } from "react-icons/im";
import { FaCcVisa } from "react-icons/fa6";
import PayPal from './PayMentFormChild/PayPal';
import Visapay from './PayMentFormChild/Visapay';
import Kpay from './PayMentFormChild/Kpay';
import kpayCo from "../../../assets/images/checkout/co3.jpg"
function getStepContent(step) {
    switch (step) {
        case 0:
            return <PayPal />;
        case 1:
            return <Kpay/>;
        case 2:
            return <Visapay />
        default:
            throw new Error('Unknown step');
    }
}
function PaymentForm() {
    const [activeStep,setActiveStep] = useState(0);
    return (
        <div>
            <div>
                <div>
                    <h1 className=' text-nun text-3xl font-bold text-[#2C2825] mb-2' >Payment Method</h1>
                    <div className=' flex gap-x-3 relative' >
                        <Button onClick={()=> setActiveStep(0)} fullWidth className={`text-mon font-sans ${activeStep === 0 ? "activeBor" : null}`} variant="gradient" leftSection={<ImPaypal className=' text-2xl' />}  gradient={{ from: 'rgb(0, 48, 135)', to: 'rgb(0, 156, 222)', deg: 28 }} size="md" radius="md">PayPal</Button>
                        <Button onClick={()=> setActiveStep(2)} fullWidth className={`text-mon font-sans ${activeStep === 2 ? "activeBor" : null}`} variant="gradient" style={{color: "#fdbb0a"}}  leftSection={<FaCcVisa className=' text-2xl text-white' />} gradient={{ from: 'rgb(255,255,255)', to: 'rgb(26,31,113)', deg: 172 }} size="md" radius="md">VISA</Button>
                        <Button onClick={()=> setActiveStep(1)} fullWidth className={`text-mon font-sans ${activeStep === 1 ? "activeBor" : null}`} style={{color: "#3D3D3F"}} variant="filled" leftSection={<img src={kpayCo} className=' w-[30px]' />} color="#ffffff" size="md" radius="md">K Pay</Button>
                    </div>
                </div>
                <div className=' mt-6' >
                    <h1 className=' text-nun text-3xl font-bold text-[#2C2825]' >Card details</h1>
                    <div className=' mt-4' >
                        {getStepContent(activeStep)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentForm;