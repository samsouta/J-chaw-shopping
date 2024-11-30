import React, { useContext, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { stateContext } from "../../../contexts/stateContext";
import { Button } from '@mantine/core';

import Card1 from "./Add_To_card1child/card1";
import { LuTrash2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { removeOneItem } from "../../../features/addToCard";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const Add_To_card1 = () => {
  const totalAmount = useSelector((state) => state.card.totalAmount);
  const count = useSelector((state) => state.card.count);
  const { isOpen, onClose, checked } = useContext(stateContext);
  const [backdrop] = React.useState("blur");
  const dispatch = useDispatch()
  // table working area
  const deleteHandle = () => {
    if (checked.length == 0) {
      toast.warn('please select item to delete!', {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } else {
      if (count === 0) {
        return;
      } else {
        dispatch(removeOneItem({ id: checked }))
      }
    }
  }
  return (
    <>
      <Modal backdrop={backdrop} scrollBehavior="inside" className={` ${count === 0 ? " hidden" : " visible"} right-[-20px] fixed rounded-none min-h-screen min-w-[900px] m-0 bg-[#FAFAF3]`} isOpen={isOpen} onClose={onClose}>
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex text-mon text-[#2C2825] text-xl flex-col gap-1">
                Add To Card
              </ModalHeader>
              <ModalBody>
                {/* // table  */}
                <Card1 />
                {/* // */}
              </ModalBody >
              <ModalFooter className="flex justify-between items-center" >
                <div className=" flex justify-between ms-5 items-center gap-x-24" >
                  <LuTrash2 onClick={deleteHandle} className=" text-red-500 text-2xl cursor-pointer" />
                  <p className=" text-[#2C2825] text-nun text-xl text-md">
                    <span className=" text-2xl text-[#2C2825] text-nun font-bold me-5" >Total : -</span>
                    <span className=' text-lora text-[#00755e]' >$ </span>
                    {(totalAmount.toFixed(2))}
                  </p>
                </div>
                <div className=" flex items-center" >
                  <Link to={`/checkout`} ><Button variant="filled" size="lg" radius="xs" color='#3D3D3F' ><span className=' text-nun font-thin' >Place Order</span></Button></Link>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* // hidden area */}
      <ToastContainer/>
    </>
  );
};

export default Add_To_card1;
