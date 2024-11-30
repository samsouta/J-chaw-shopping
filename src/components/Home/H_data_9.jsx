import React, { useState } from 'react'
import { Button, Input } from '@mantine/core';
import { Alert } from '@mui/material';

const H_data_9 = () => {
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const validateEmail = (email) => {
        // Basic email pattern validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
      };
    // Handler for input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const JoinMember = () => {
        if (inputValue) {
            if (!validateEmail(inputValue)) {
                setAlert(true);
              }else {
                setAlert(false)
                setShow(true)
              }
        }else {
            setShow(false)
            setAlert(true)
        }
    }

    return (
        <div className=' mt-[230px]' >
            <div className=' flex flex-col items-center gap-y-8' >
                <h1 className=' text-lora text-4xl font-bold' >Join J-Shop's Family</h1>
                {/* hidden area */}
                <span className={`${show ? " visible" : " hidden"}`} >
                    <Alert severity="success">requested successfully</Alert>
                </span>
                <span className={`${alert ? "visible" : " hidden"}`} >
                    <Alert severity="error">Please enter a valid email address</Alert>
                </span>
                {/* //// */}
                <div id='h-data9-color' className=' w-full flex  justify-center gap-x-3'>
                    <Input id='userInput' value={inputValue} onChange={handleChange} className=' min-w-[500px] h-data9-color' variant="filled" size="lg" radius="xs" placeholder="Enter Your Email" />
                    <Button onClick={JoinMember} variant="filled" size="lg" radius="xs" color='#3D3D3F' ><span className=' text-nun font-thin' >Join Family</span></Button>
                </div>
            </div>
        </div>
    )
}

export default H_data_9
