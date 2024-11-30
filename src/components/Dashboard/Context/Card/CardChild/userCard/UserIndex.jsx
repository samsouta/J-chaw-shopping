import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { PiUsersThreeFill, PiUserPlusFill } from "react-icons/pi";
import { HiChartBar } from "react-icons/hi";
const data = [
    {
        id: 1,
        icon: <FaMoneyBillTrendUp className=' text-3xl' />,
        title: `Today's Money`,
        rate: '$53k',
        active: '+55%',
        date: 'than last week'
    },
    {
        id: 2,
        icon: <PiUsersThreeFill className=' text-3xl' />,
        title: `Today's Users`,
        rate: '2,300',
        active: '+3%',
        date: ' than last month'
    },
    {
        id: 3,
        icon: <PiUserPlusFill className=' text-3xl' />,
        title: `New Clients`,
        rate: '3,462',
        active: '-2%',
        date: ' than yesterday'
    },
    {
        id: 4,
        icon: <HiChartBar className=' text-3xl' />,
        title: `Sales`,
        rate: '$103,430',
        active: '+5%',
        date: ' than yesterday'
    },
]
const UserIndex = () => {
    return (
        <div className=' flex gap-x-3 justify-start' >
            {
                data?.map((item) => {
                    return (
                        <Card key={item.id} sx={{ width: 270 }} className=' w-full' style={{ borderRadius: "10px" }} >
                            <CardContent>
                                <div className=' flex justify-between items-start' >
                                    <div>{item.icon}</div>
                                    <ul>
                                        <li className=' text-mon text-md font-mono text-gray-500/90' >{item.title}</li>
                                        <li className=' text-nun text-xl text-black font-bold' >{item.rate}</li>
                                    </ul>
                                </div>
                            </CardContent>
                            <div className=' border-b-[1.3px] border-slate-200 w-full' ></div>
                            <CardActions>
                                <ul className=' flex gap-x-2 items-center' >
                                    <li className=' text-nun font-bold text-xl text-green-500' >{item.active}</li>
                                    <li className=' text-mon text-lg font-mono text-black' >{item.date}</li>
                                </ul>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </div>
    )
}

export default UserIndex
