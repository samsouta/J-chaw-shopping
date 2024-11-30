import React, { useRef, useState } from 'react'
import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { FiEdit } from "react-icons/fi";
import Cookies from 'js-cookie';
const Profile = () => {
    const [userImg,setUserImg] = useState('')
    const user = JSON.parse(Cookies.get("user"))
    const inputRef = useRef(null);
    const form = useForm({
        initialValues: {
            email: `${user ? user?.email : ""}`,
            name: `${user ? user?.name : ""}`,
            curpass: '',
            newpass: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
        
    });
    // edit image
    const editHandle = ()=>{
        inputRef.current.click()
    }
    const inputChange = (e) =>{
        const file = e.target.files[0];
        setUserImg(file)
        console.log(file)
        
    }
    return (
        <div>
            <div className='flex flex-col ps-20 gap-y-12 bg-[#fff9e8] pt-8 rounded-lg max-h-screen max-w-[800px]' >
                <div className=' flex gap-x-3 items-end' >
                    {
                        userImg ?  
                        <img className=' w-[150px] h-[150px] rounded-full' src={URL.createObjectURL(userImg)}   alt="" />
                        : 
                        <img className=' w-[150px] h-[150px] rounded-full' src="https://i.pinimg.com/564x/c4/de/16/c4de16db396a503be16ab7f07e29bd9f.jpg" alt="" />
                    }
                    
                    <span onClick={editHandle} className=' mb-2  hover:bg-black/15 p-1.5 rounded-md' ><FiEdit className=' cursor-pointer text-2xl ' /></span>
                    <input type="file" ref={inputRef} onChange={inputChange} accept="image/png, image/gif, image/jpeg" className=' hidden' />
                </div>
                <Box >
                    <form id='input-form' className=' flex flex-col gap-y-5' onSubmit={form.onSubmit((values) => console.log(values))}>
                        <TextInput
                            className=' max-w-[500px]'
                            size='md'
                            label="name"
                            id='name'
                            placeholder="You Name"
                            variant="filled"
                            {...form.getInputProps('name')}
                        />

                        <TextInput
                            className=' max-w-[500px]'
                            size='md'
                            label="Email"
                            id='email'
                            placeholder="your@email.com"
                            variant="filled"
                            {...form.getInputProps('email')}
                        />
                        <TextInput
                            className=' max-w-[500px]'
                            size='md'
                            id='curpass'
                            label="Current Password"
                            placeholder="current password"
                            variant="filled"
                            {...form.getInputProps('curpass')}
                        />
                        <TextInput
                            className=' max-w-[500px]'
                            size='md'
                            id='newpass'
                            label="new Password"
                            placeholder="new password"
                            variant="filled"
                            {...form.getInputProps('newpass')}
                        />
                        <Group justify="flex-start" mb="xl" mt="md">
                            <Button className=' text-mon' color='#3D3D3F' type="submit">Save Change</Button>
                        </Group>
                    </form>
                </Box>
            </div>
        </div>
    )
}

export default Profile
