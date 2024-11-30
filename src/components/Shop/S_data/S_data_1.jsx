import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Pagination from '@mui/material/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const theme = createTheme({
    palette: {
        primary: {
            main: '#009176',    
        }

    },
});
const S_data_1 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [preShowPage, setPreShowPage] = useState(12);
    const {value} = useSelector((state)=> state.category)
    const lastIndex = currentPage * preShowPage;
    const firstIndex = lastIndex - preShowPage;
    const handleChangePage = (event, page) => {
        setCurrentPage(page)
    };
    const showPage = value?.slice(firstIndex, lastIndex);

    // funcion eare
    // card working
    const nav = useNavigate()
    const cardHandle = (id)=>{
        nav(`/detail/${id}`)
    }
    return (
        <div className='mt-20 '>
            <div className=' flex justify-center' >
                <h1 className=' text-nun text-3xl w-full mx-24 text-[#2C2825]' >All Products</h1>

            </div>
            <div className=' flex flex-wrap  justify-center gap-3 mt-9 ' >
                {
                    showPage?.map((item) => {
                        return (

                            <Card onClick={()=>cardHandle(item?.id)} shadow="sm" key={item?.id} className=' w-[200px] h-full bg-[#fff9e8] rounded-xl ' isPressable onPress={() => console.log("item pressed")}>
                                <CardBody className="overflow-visible p-0">
                                    <Image
                                        shadow="sm"
                                        radius="lg"
                                        width="100%"
                                        alt={item?.title}
                                        className=" object-fill w-full h-[200px] rounded-b-xl  "
                                        src={item?.image}
                                    />
                                </CardBody>
                                <CardFooter className="text-small justify-between">
                                    <b className=' truncate w-[100px] text-nun text-[#2C2825] ' >{item?.title}</b>
                                    <p className=" text-[#2C2825] text-nun text-md"><span className=' text-lora text-[#00755e]' >$</span>{item?.price}</p>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
            {/* pangination  */}
            <ThemeProvider theme={theme} >
                <div className=' flex justify-center my-8' >
                    <Pagination color='primary' onChange={(event, page) => handleChangePage(event, page)} count={3} variant="outlined" shape="rounded" />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default S_data_1
