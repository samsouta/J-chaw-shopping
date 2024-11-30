import React from 'react'
import { Card, CardBody, Image } from "@nextui-org/react";
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';
const CancelOrderChild = (props) => {
    const { title, img, price, address, arrtime } = props

    return (
        <div className=' mt-2' >
            <Card
                isBlurred
                className="border-none relative bg-[#fff9e8] min-w-[700px] dark:bg-default-100/50 max-w-[610px] rounded-md"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src={img}
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <span className=' text-mon text-md font-mono ' >Cancel Time - {arrtime}</span>
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-lg text-nun text-foreground/90">{title}</h3>
                                    <p className="text-nun text-small text-foreground/80"><span className=' text-lora text-[#00755e]' >$</span>{price}</p>
                                    <h1 className="text-large font-medium mt-2">{address}</h1>
                                </div>
                            </div>

                            <div className=' right-0 top-0 absolute' >
                                <Link to={`/shop`} >
                                    <Button color='#3D3D3F' className=' text-mon font-thin' variant="filled" size="xs" radius="xs">Continue Buy</Button>

                                </Link>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default CancelOrderChild
