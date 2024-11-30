import { useDisclosure } from '@nextui-org/react';
import * as React from 'react'
import { createContext } from 'react'
import { useDispatch } from 'react-redux';
import { getAllGategory } from '../features/categorySlice';
import { useLocation } from 'react-router-dom';

export const stateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [jdata, setJdata] = React.useState([]);
    console.log(jdata)
    const [checked, setChecked] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [showLogin,setShowLogin] = React.useState(false)
    const [Cspiner,setCSpiner] = React.useState(false)
    const [ScreenSize, setScreenSize] = React.useState(window.innerWidth)
    const [showSearch, setShowSearch] = React.useState(false);
    const [searchIcon, setSearchIcon] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    // check out 
    const nextRef = React.useState(null)
    // footer ref 
    const aboutRef = React.useRef(null);
  const missionRef = React.useRef(null);
  const valuesRef= React.useRef(null);
  const ourteamRef = React.useRef(null);
  const location = useLocation();
   // Mapping of hashes to refs
   const sectionRefs = {
    '#about-me': aboutRef,
    '#about-mission': missionRef,
    '#about-values': valuesRef,
    '#about-ourteam': ourteamRef,
  };
  // Function to scroll to the relevant section based on hash
  const scrollToSection = () => {
    const ref = sectionRefs[location.hash]; // Find the matching ref based on the hash
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  React.useEffect(() => {
    scrollToSection();
  }, [location]);
    // address submit form 
    const dispatch = useDispatch();
    //check out active step ref
    // j-chaw api fetch
    const fetchData = async () => {
        setCSpiner(true)
        const api = await fetch(`https://bluetv.x10.bz/api/v1/products`)
        const data = await api.json()
        setJdata(data.data)
        setCSpiner(false)
        // WARING this code can be bug
        dispatch(getAllGategory(data.data))
        ///
    }
    React.useEffect(() => {
        fetchData() 
    }, [])
    // media query screen size
    const mediaHandalar = () => {
        setScreenSize(window.innerWidth)
    }

    React.useEffect(() => {
        window.addEventListener("resize", mediaHandalar)
    }, [setScreenSize])

    console.log(ScreenSize)

    const data = {
        isOpen, onOpen, onClose, showSearch, setShowSearch, searchIcon, setSearchIcon, activeStep, setActiveStep,
        jdata,checked, setChecked,open, setOpen,Cspiner,setCSpiner,showLogin,setShowLogin,nextRef,aboutRef,missionRef,valuesRef,ourteamRef
        
    }
    return (
        <stateContext.Provider value={data} >
            {children}
        </stateContext.Provider>
    )
}