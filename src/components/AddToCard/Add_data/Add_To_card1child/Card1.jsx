import React, { useContext, useMemo } from "react";
import { PiPlusCircleFill, PiMinusCircleFill } from "react-icons/pi";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from "react-redux";
import { addQts, removeQts } from "../../../../features/addToCard";
import { stateContext } from "../../../../contexts/stateContext";


const card1 = () => {
    const {checked, setChecked} = useContext(stateContext)
    const data = useSelector((state)=>state.card.card)
    console.log(data)
    const count = useSelector((state)=>state.card.count)
    const dispatch = useDispatch();
    const handleChangeParent = (e) => {
        if(data?.length === checked.length){
            setChecked([])
        }else{
            const userId = data?.map((uid)=> {
                return uid.id
            })
            setChecked(userId)
        }
     
    };

    const handleChangeChild = (event) => {
        const isSelected = event.target.checked
        const value = parseInt(event.target.value)
        if(isSelected){
            setChecked([...checked,value])
        }else {
          const filk = checked.filter((cur)=> cur !== value )
          setChecked(filk)
        }
    };

    const classNames = useMemo(
        () => ({
            th: ["bg-[#F7F3E8]"],
        }),
        [],
    );
    const minusHandle = (ud,price,qualtity)=>{
        if(qualtity <= 1){
            return;
        }else {
            dispatch(removeQts({id:ud, price: price}))
        }

    }
  
    const plusHandle = (ud,price )=>{
        dispatch(addQts({id: ud, price: price}))

    }
    return (
        <div className={`relative ${count === 0 ? " hidden" : " visible"}`} >
            <Table
                classNames={classNames}
                
                aria-label="Example static collection table"
            >
                <TableHeader
                    classNames={{
                        th: " bg-red-400",
                    }}
                    
                >   
                    <TableColumn className=" w-[100px]">
                    </TableColumn>
                    <TableColumn className=" w-[250px]  text-[#2C2825] text-nun font-bold">
                        NAME
                    </TableColumn>
                    <TableColumn className="  text-[#2C2825] text-nun font-bold">
                        PRICE
                    </TableColumn>
                    <TableColumn className="  text-[#2C2825] text-nun font-bold">
                        QUANTITY
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        data?.map((ur, index) => {
                            return (
                                <TableRow key={index}>

                                    <TableCell >
                                        <Box >
                                            <FormControlLabel
                                                control={<Checkbox
                                                    sx={{
                                                        color: "#009176",
                                                        '&.Mui-checked': {
                                                            color: "#3D3D3F",
                                                        },
                                                    }}
                                                    onChange={handleChangeChild}
                                                    checked={checked.includes(ur?.id)}
                                                    value={ur?.id}
                                                    />}
                                            />
                                        </Box >

                                    </TableCell>
                                    <TableCell className=" flex flex-col gap-y-3 w-[200px] ">
                                        <img className=" w-[100px] h-[100px] rounded-md object-fill" src={ur?.image} alt="" />
                                        <span className=" text-mon font-medium text-md truncate w-[200px] text-[#2C2825]" >{ur?.title}</span>
                                    </TableCell>
                                    <TableCell className="" >
                                        <p className="text-nun uppercase font-bold"><span className=' text-lora text-[#00755e]' >$</span>{(ur?.price.toFixed(2) * ur?.quantity).toFixed(2)}</p>
                                    </TableCell>
                                    <TableCell>
                                        <ButtonGroup className="bg-[#3D3D3F] rounded-xl" >
                                            <Button onClick={()=>plusHandle(ur?.id,ur?.price)} size="md" className=" text-nun font-medium p-2 text-white "  ><PiPlusCircleFill className=" text-md text-[#009176]" /></Button>
                                            <Button size="md" className=" text-nun font-medium p-2 text-white "  >{ur?.quantity}</Button>
                                            <Button onClick={()=>minusHandle(ur?.id, ur?.price,ur?.quantity)} size="md" className=" text-nun font-medium p-2 text-white "  ><PiMinusCircleFill className="text-md text-[#009176]" /></Button>
                                        </ButtonGroup>
                                    </TableCell>
                                </TableRow>

                            )
                        })
                    }

                </TableBody>
            </Table>
            {/* parent */}
            <div className="cursor-pointer absolute top-[15px] left-8" >
                <Checkbox
                    checked={checked.length === data?.length}
                    indeterminate={checked.length != data?.length}
                    onChange={handleChangeParent}
                    sx={{
                        color: "#009176",
                        '&.Mui-checked': {
                            color: "#3D3D3F",
                        },
                    }}
                />
            </div>

        </div>
    );
};

export default card1;
