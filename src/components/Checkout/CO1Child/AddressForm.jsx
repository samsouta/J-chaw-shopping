import React, { useContext, useState } from 'react';
import { Button, Group, Box } from '@mantine/core';
import Checkbox from '@mui/material/Checkbox';
import { Input } from '@mantine/core';
import FormControlLabel from '@mui/material/FormControlLabel';
import { stateContext } from '../../../contexts/StateContext';
function AddressForm() {
    const { nextRef } = useContext(stateContext);
    const [check, setCheck] = React.useState(false);
    const [btnLoad,setBtnLoad] = useState(false)
    const [errMessage, setErrMessage] = useState({});
    const [errCount, setErrCount] = useState();
    const [addressForm, setAddressForm] = useState({
        name: '',
        address1: '',
        address2: '',
        city: '',
        region: '',
        postalcode: '',
        country: '',
        termsOfService: false,
    })
    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        const data = { ...addressForm, [name]: value, termsOfService: checked }
        setCheck(checked)
        setAddressForm(data)
    }
    const validation = () => {
        const validationErrors = {}
        addressForm.name.trim() ? null : validationErrors.name = "username is required"
        addressForm.address1.trim() ? null : validationErrors.address1 = "enter your address"
        addressForm.city.trim() ? null : validationErrors.city = "enter your city"
        addressForm.region.trim() ? null : validationErrors.region = "enter your region"
        addressForm.postalcode.trim() ? null : validationErrors.postalcode = "enter your postalcode"
        addressForm.country.trim() ? null : validationErrors.country = "enter your country"
        setErrCount(Object.keys(validationErrors).length)
        setErrMessage(validationErrors);
    }

    const myForm = (e) => {
        e.preventDefault()
        try {
            setBtnLoad(true)
            validation()
            setTimeout(() => {
                setBtnLoad(false)
            }, 2000);
            if( errCount === 0){
            setTimeout(() => {
                nextRef.current.click()
            }, 1000);
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Box maw={440} mx="auto">
                <form id='myForm' className=' flex flex-col gap-y-5' onSubmit={myForm}>
                    <span className=' relative' >
                        <Input
                            variant="filled"
                            size="md"
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
                            size="md"
                            name='address1'
                            radius="md"
                            placeholder="Address 1"
                            onChange={handleChange}
                        />
                        {errMessage.address1 && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.address1}</span>}
                    </span>
                    <Input
                        variant="filled"
                        size="md"
                        radius="md"
                        name='address2'
                        placeholder="Address 2"
                        onChange={handleChange}
                    />
                    <div className=' flex gap-x-2' >
                        <span className=' relative' >
                            <Input
                                variant="filled"
                                size="md"
                                radius="md"
                                name='city'
                                placeholder="City"
                                onChange={handleChange}
                            />
                            {errMessage.city && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.city}</span>}
                        </span>

                        <span className=' relative' >
                            <Input
                                variant="filled"
                                size="md"
                                radius="md"
                                name='region'
                                placeholder="State/Region/Province"
                                onChange={handleChange}
                            />
                            {errMessage.region && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.region}</span>}
                        </span>
                    </div>
                    <div className=' flex gap-x-2' >
                        <span className=' relative' >
                            <Input
                                variant="filled"
                                size="md"
                                radius="md"
                                name='postalcode'
                                placeholder="Zip/Postal Code"
                                onChange={handleChange}
                            />
                            {errMessage.postalcode && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.postalcode}</span>}
                        </span>
                        <span className=' relative' >
                            <Input
                                variant="filled"
                                size="md"
                                radius="md"
                                name='country'
                                placeholder="Country"
                                onChange={handleChange}
                            />
                            {errMessage.country && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.country}</span>}
                        </span>
                    </div>


                    <FormControlLabel control={
                        <Checkbox
                            name='termsOfService'
                            className=' flex self-start'
                            mt="md"
                            checked={check}
                            onChange={handleChange}

                        />

                    } label="Use this address for payment details" />

                    <Group justify="flex-end" mt="md">
                        <Button className=' min-w-[120px]' color='#3D3D3F' type='submit' >
                            {btnLoad ? 
                            <span className='loadercb scale-90' ></span>
                            :
                             "Containue"
                             }
                        </Button>
                    </Group>
                </form>
            </Box>
        </div>
    );
}

export default AddressForm;