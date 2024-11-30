import React, { useContext, useState } from 'react';
import { Button, Group, Box } from '@mantine/core';
import { Input } from '@mantine/core';
import { stateContext } from '../../../../contexts/StateContext';
const PayPal = () => {
    const { nextRef } = useContext(stateContext);
    const [errMessage, setErrMessage] = useState({});
    const [btnLoad,setBtnLoad] = useState(false)
    const [errCount, setErrCount] = useState();
    const [addressForm, setAddressForm] = useState({
        name: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        const data = { ...addressForm, [name]: value }
        setAddressForm(data)
    }
    const validation = () => {
        const validationErrors = {}
        addressForm.name.trim() ? null : validationErrors.name = "username is required"
        addressForm.password.length > 8 ? null : validationErrors.password = "password is must at least 8 character"
        setErrCount(Object.keys(validationErrors).length)
        setErrMessage(validationErrors);
    }

    const myForm = (e) => {
        e.preventDefault()
        try {
            setBtnLoad(true)
            validation()
            setInterval(() => {
                setBtnLoad(false)
            }, 2000);
            if (errCount === 0) {
                setTimeout(() => {
                    nextRef.current.click()
                }, 1000);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div >
            <Box maw={440} mx="auto">
                <form id='myForm' className=' flex flex-col gap-y-5' onSubmit={myForm}>
                    <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            radius="md"
                            name='name'
                            placeholder="Name"
                            onChange={handleChange}
                        />
                        {errMessage.name && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.name}</span>}
                    </span>
                    <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            name='password'
                            radius="md"
                            placeholder="enter you password"
                            onChange={handleChange}
                        />
                        {errMessage.password && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.password}</span>}
                    </span>
                    <Group justify="flex-end" mt="md">
                        <Button className=' min-w-[120px]' color='#3D3D3F' type='submit' >
                            {btnLoad ? 
                            <span className='loadercb scale-90' ></span>
                            :
                             "Pay Now"
                             }
                        </Button>
                    </Group>
                </form>
            </Box>
        </div>
    )
}

export default PayPal
