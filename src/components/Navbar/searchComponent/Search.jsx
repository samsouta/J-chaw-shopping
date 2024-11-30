import React, { useContext } from 'react'
import { TextInput } from '@mantine/core';
import 'animate.css';
import { stateContext } from '../../../contexts/stateContext';
import { RxCross2 } from "react-icons/rx";
const Search = () => {
    const {showSearch,setShowSearch,searchIcon, setSearchIcon } = useContext(stateContext);
    console.log(showSearch)
    const HandleIcon = () =>{
       setSearchIcon(false)
        setTimeout(() => {
        setShowSearch(false)
        }, 500);

    }
    return (
        <div className='' >
            <div className=' absolute z-50 right-[210px] top-2 min-w-[200px]' >
                <TextInput
                    className={`  ${ searchIcon ? "animate__animated animate__zoomIn " : "animate__animated animate__zoomOut"} `}
                    radius="xl"
                    placeholder="search something"
                    rightSection={<RxCross2 onClick={HandleIcon} className=' cursor-pointer' />}
                />
            </div>

        </div>
    )
}

export default Search
