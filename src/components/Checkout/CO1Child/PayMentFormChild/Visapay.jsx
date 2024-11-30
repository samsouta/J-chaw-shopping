import React, { useContext, useState } from 'react';
import { Button, Group, Box } from '@mantine/core';
import { Input } from '@mantine/core';
import { stateContext } from '../../../../contexts/StateContext';

const Visapay = () => {
  const { nextRef } = useContext(stateContext);
  const [errMessage, setErrMessage] = useState({});
  const [btnLoad, setBtnLoad] = useState(false)
  const [errCount, setErrCount] = useState();
  const [addressForm, setAddressForm] = useState({
      cardnumber: '',
      month: '',
      year: '',
      cvc2: '',
      firstName: '',
      lastName: ''
  })
  const handleChange = (e) => {
      const { name, value } = e.target;
      const data = { ...addressForm, [name]: value }
      setAddressForm(data)
  }
  const validation = () => {
      const validationErrors = {}
      addressForm.cardnumber.trim() ? null : validationErrors.cardnumber = "cardnumber is required"
      addressForm.month.trim() ? null : validationErrors.month = "month is required"
      addressForm.year.trim() ? null : validationErrors.year = "year is required"
      addressForm.cvc2.trim() ? null : validationErrors.cvc2 = "CVC2/CVV2 is required"
      addressForm.firstName.trim() ? null : validationErrors.firstName = "first is required"
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
    <div>
         <Box maw={440} mx="auto">
                <form id='myForm' className=' flex flex-col gap-y-5' onSubmit={myForm}>
                    <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            radius="md"
                            name='cardnumber'
                            placeholder="1234-5543-2341-6786"
                            onChange={handleChange}
                        />
                        {errMessage.cardnumber && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.cardnumber}</span>}
                    </span>
                   <div className=' flex gap-x-2' >
                   <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            name='month'
                            radius="md"
                            placeholder="month"
                            onChange={handleChange}
                        />
                        {errMessage.month && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.month}</span>}
                    </span>
                    <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            name='year'
                            radius="md"
                            placeholder="year"
                            onChange={handleChange}
                        />
                        {errMessage.year && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.year}</span>}
                    </span>
                    <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            name='cvc2'
                            radius="md"
                            placeholder="CVC2/CVV2  "
                            onChange={handleChange}
                        />
                        {errMessage.cvc2 && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.cvc2}</span>}
                    </span>
                   </div>
                   <div className=' flex gap-x-2' >
                   <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            name='firstName'
                            radius="md"
                            placeholder="first name"
                            onChange={handleChange}
                        />
                        {errMessage.firstName && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.firstName}</span>}
                    </span>
                    <span className=' relative' >
                        <Input
                            variant="filled"
                            size="lg"
                            name='lastName'
                            radius="md"
                            placeholder="last name"
                            onChange={handleChange}
                        />
                        {errMessage.lastName && <span className=' absolute bottom-[-1] text-sm text-nun text-red-500' >{errMessage.lastName}</span>}
                    </span>
                   </div>
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

export default Visapay
