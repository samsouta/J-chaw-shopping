import React, { useContext } from "react";
import { Modal, ModalContent, ModalBody, ModalFooter } from "@nextui-org/react";
import { stateContext } from "../../../contexts/StateContext";
import { GiCrossMark } from "react-icons/gi";
import { FaCircleQuestion } from "react-icons/fa6";
import { Button } from '@mantine/core';
import { useNavigate } from "react-router-dom";
const CardModal = () => {
  const { open, setOpen } = useContext(stateContext);
  const nav = useNavigate()
  const ShoppingHandle = () => {
    setOpen(false)
    nav(`/shop`)
  }
  return (
    <div>
      <Modal
        size={"lg"}
        backdrop="opaque"
        hideCloseButton={true}
        isOpen={open}
        className={` bg-white rounded-xl`}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>

          {(onClose) => (
            <>
              <button onClick={() => setOpen(false)} className=" right-2 absolute top-2" ><GiCrossMark /></button>
              <ModalBody>
                <div className=" flex justify-center gap-y-2" ><FaCircleQuestion className=" flex justify-self-center text-[5rem] text-red-500" /></div>
                <p className=" text-nun text-3xl text-[#2C2825] font-bold mx-auto">
                  Empty Card
                </p>
                <p className=" text-nun text-lg text-[#2C2825] font-mono mx-auto" >you need to add to card first </p>

              </ModalBody>
              <ModalFooter>
                <Button onClick={ShoppingHandle} variant="filled" color="#3D3D3F" radius="xs">Shopping Now</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CardModal
