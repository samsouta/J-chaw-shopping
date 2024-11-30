import React from 'react'
import { Button } from '@mantine/core';
const DangerZone_Child = () => {
    return (
        <div>
            <div className=' flex justify-between border-b-[#3D3D3F] border-b-2 p-4 max-w-[500px] mt-10' >
                <div className=' flex flex-col' >
                    <h1 className=' text-nun font-bold text-xl text-[#2C2825]' >Delete Account</h1>
                    <span className=' text-mon font-medium text-lg text-[#2C2825]' >This can not be undone</span>
                </div>
                <div>
                    <Button variant="light" size='md' color="red">Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default DangerZone_Child
