import React from 'react'
import logoLoad from "../../assets/images/loader/logo.png"
const Loader = () => {
    return (
        <>
            <div className=' ' >
                <img className=' w-[250px] animate__animated animate__jello animate__infinite 	infinite' src={logoLoad} alt="" />
            </div>
        </>
    )
}

export default Loader
