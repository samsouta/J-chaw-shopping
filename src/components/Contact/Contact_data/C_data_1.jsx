import React from 'react'
import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Textarea } from '@mantine/core';
import CuSvg1 from "../../../assets/SVG/contactUsSvg/Cu_1.svg"
import facebook from "../../../assets/SVG/contactUsSvg/facebook.svg"
import twitter from "../../../assets/SVG/contactUsSvg/twitter.svg"
import google from "../../../assets/SVG/contactUsSvg/google.svg"
import { theme } from 'flowbite-react';

const C_data_1 = () => {
    const form = useForm({
        initialValues: {
            name: "",
            email: '',
            rpMessage: "",
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    return (
        <div className=' relative bg-[#fff9e8] h-full grid grid-cols-12 mt-10 mx-10 rounded-3xl p-6' >
            <div className=' col-span-6' >
                <img src={CuSvg1} alt="" />
            </div>
            <div id='input-form' className='  col-span-6' >
                <Box maw={340} mx="auto">
                    <form  onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            mt="md"
                            size="md"
                            withAsterisk
                            variant="filled"
                            id='name'
                            radius="md"
                            
                            placeholder="your name"
                            {...form.getInputProps('name')}
                        />
                        <TextInput
                            mt="md"
                            size="md"
                            withAsterisk
                            id='email'
                            variant="filled"
                            radius="md"
                            placeholder="your@email.com"
                            {...form.getInputProps('email')}
                        />
                        <Textarea
                            mt="md"
                            size="md"
                            variant="filled"
                            radius="md"
                            placeholder="Message"
                            {...form.getInputProps('rpMessage')}
                        />
                        <Checkbox
                            mt="md"
                            id='checkbox'
                            label="I agree to sell my privacy"
                            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                        />

                        <Group justify="flex-end" mt="md">
                            <Button color='#3D3D3F' type="submit">Send</Button>
                        </Group>
                    </form>
                </Box>
                <div className=' flex justify-center items-center mt-20' >
                    <span className='  text-[#009176] text-nun text-2xl' >Or</span>

                </div>

                <div className=' absolute bottom-[-30px] right-56 flex gap-x-7' >
                    <span className=' cursor-pointer' >
                        <img className=' h-[60px] bg-[#F7F3E8] shadow-md p-2 rounded-full'  src={facebook} alt="" />
                    </span>
                    <span className=' cursor-pointer' >
                        <img className=' h-[60px] bg-[#F7F3E8] shadow-md p-2 rounded-full'  src={twitter} alt="" />
                    </span>
                    <span className=' cursor-pointer' >
                        <img className=' h-[60px] bg-[#F7F3E8] shadow-md p-2 rounded-full'  src={google} alt="" />
                    </span>
                </div>
            </div>

        </div>
    )
}

export default C_data_1
