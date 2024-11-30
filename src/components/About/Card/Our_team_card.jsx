import React from 'react'
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const Our_team_card = ({ data }) => {
    const {name,position,place,image} = data
    return (
        <div className=''>
            <Card isFooterBlurred className="w-[300px] h-[300px] col-span-12 sm:col-span-5">
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                    <p className="text-tiny text-white  font-extrabold uppercase">{name}</p>
                </CardHeader>
                <Image
                    removeWrapper
                    alt="Card example background"
                    className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                    src={image}
                />
                <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                    <div>
                        <p className="text-black text-nun font-bold">{position}</p>
                        <p className="text-black text-mon text-sm">{place}</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Our_team_card
