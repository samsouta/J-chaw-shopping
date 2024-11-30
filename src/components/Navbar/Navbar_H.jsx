import React, { useContext, useEffect, useState } from 'react'
// import { Navbar, NavbarLink } from 'flowbite-react';
// import { IoSearchOutline } from "react-icons/io5";
// import { GiShoppingCart } from "react-icons/gi";
// import { RiMenu4Line } from "react-icons/ri";
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useLocation, useNavigate } from 'react-router-dom';
// import Search from './searchComponent/search';
// import AddToCard from '../AddToCard/AddToCard';
import { stateContext } from '../../contexts/stateContext';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGategory, getGategory } from '../../features/categorySlice';
import { Badge } from "@nextui-org/react";
import CardModal from './AddToCardModal/CardModal';
// renew import 
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

const cateList = [
    {
        id: 1,
        label: "All Products",
    },
    {
        id: 2,
        label: "necklace",
    },
    {
        id: 3,
        label: "ring",
    },
    {
        id: 4,
        label: "bracelet",
    },
    {
        id: 5,
        label: "earring",
    }
];


const Navbar_H = () => {
    const [navActive, setNavActive] = useState(0);
    const { showSearch, setShowSearch, searchIcon, setSearchIcon } = useContext(stateContext);
    const [showAddToCard, setShowAddToCard] = useState(false);
    const { onOpen, jdata, setOpen } = useContext(stateContext);
    const count = useSelector((state) => state.card.count)
    const dispatch = useDispatch()
    const location = useLocation();
    const nav = useNavigate()
    useEffect(() => {
        if (location.pathname === "/home") {
            setNavActive(0)

        }
        if (location.pathname === "/about") {
            setNavActive(1)

        }
        if (location.pathname === "/shop") {
            setNavActive(2)

        }
        if (location.pathname === "/contactus") {
            setNavActive(3)

        }
    }, [])


    // search working
    const HandleSearch = () => {
        setSearchIcon(true)
        setShowSearch(true)

    }
    const HandleAddToCard = () => {
        if (count) {
            setShowAddToCard(true)
            onOpen()
        } else {
            setOpen(true)

        }

    }
    const HandleSetting = () => {
        nav(`/setting`)
    }
    // nav bar list route
    const Home = () => {
        nav(`/home`)
    }
    const About = () => {
        nav(`/about`)
    }
    const Contact = () => {
        nav(`/contactus`)
    }
    const Shop = () => {
        nav(`/shop`)
    }
    // categories working
    const CategoryHandle = (data) => {
        if (data.label === "All Products") {
            dispatch(getAllGategory(jdata))
        
        }else {
            const cateData = jdata?.filter((item) => item?.category === data.label)
            nav(`/shop`)
            console.log(cateData)
            dispatch(getGategory({ data: cateData }))
        }
        
    }
    // login and sign up 
    const LoginHandler = () => {
        nav(`/login`)
    }
    const SignupHandler = () => {
        nav(`/resgiter`)
    }
    return (
        <div className=' fixed top-0 w-full z-50'  >
            {/* <Navbar className=' relative  bg-[#F7F3E8]' >
                <Link to={`/home`} >
                    <div className=' cursor-pointer' >
                        <span className="self-center whitespace-nowrap text-xl text-lora font-semibold dark:text-white">J-chaw</span>
                    </div>
                </Link>
                <div className="flex items-center justify-around w-[130px] md:order-2">
                    <div>
                        <IoSearchOutline onClick={HandleSearch} className={`cursor-pointer text-xl ${searchIcon ? " hidden" : " visible"}`} />
                        {
                            showSearch &&
                            <Search />
                        }

                    </div>
                    <div>
                        <Badge content={count} size="sm" className={`bg-red-500 text-[10px] text-white ${count === 0 ? " hidden" : " visible"}`}>
                            <GiShoppingCart onClick={HandleAddToCard} className=' cursor-pointer text-2xl' />
                            {
                                showAddToCard &&
                                <AddToCard />
                            }
                        </Badge>
                    </div>
                    <RiMenu4Line onClick={HandleSetting} className=' cursor-pointer text-xl' />
                </div>
                <Navbar.Collapse>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                className=' bg-transparent p-0 m-0'
                                variant="bordered"
                            >
                                <Navbar.Link onClick={() => setNavActive(0)} className=' cursor-pointer text-nun font-medium' active={navActive === 0 ? " text-[#7fd1ae]" : ""} >
                                    Categories
                                </Navbar.Link>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu className='  bg-white rounded-sm' aria-label="Static Actions">
                            {
                                cateList?.map((item, index) => {
                                    return (
                                        <DropdownItem key={index} onClick={() => categoriesHandle(item)} className=' hover:bg-[#F7F3E8] hover:rounded-md text-nun text-md '>{item}</DropdownItem>

                                    )
                                })

                            }
                        </DropdownMenu>
                    </Dropdown>

                    <Link to={`/about`} >
                        <NavbarLink onClick={() => setNavActive(1)} active={navActive === 1 ? " text-[#7fd1ae]" : ""} className=' text-center cursor-pointer text-nun font-medium'>About</NavbarLink>
                    </Link>
                    <Link to={`/shop`} >
                        <NavbarLink onClick={() => setNavActive(2)} active={navActive === 2 ? " text-[#7fd1ae]" : ""} className=' cursor-pointer text-nun font-medium'>Shop</NavbarLink>
                    </Link>
                    <Link to={`/contactus`} >
                        <NavbarLink onClick={() => setNavActive(3)} active={navActive === 3 ? " text-[#7fd1ae]" : ""} className=' cursor-pointer text-nun font-medium'>Contact</NavbarLink>
                    </Link>
                </Navbar.Collapse>
            </Navbar> */}
            {/* hidden area */}
            <CardModal />


            {/* // renew version  */}

            <Navbar shouldHideOnScroll className='bg-[#F7F3E8]'>
                <NavbarBrand>
                    <div onClick={Home} className=' cursor-pointer' >
                        <span className="self-center whitespace-nowrap text-xl text-lora font-semibold dark:text-white">J-chaw</span>
                    </div>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem >
                        <Link onClick={Shop} className='cursor-pointer text-nun font-medium hover:text-[#009176]' color="foreground" href="#">
                            Shopping
                        </Link>
                    </NavbarItem>
                    <NavbarItem >

                        <Dropdown className=' bg-[#fff9e8]' >
                            <DropdownTrigger>
                                <Link

                                    className='cursor-pointer text-nun font-light hover:text-[#009176]'
                                    color="foreground"
                                >
                                    Category
                                </Link>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Dynamic Actions" items={cateList}
                                itemClasses={{
                                    base: [
                                        "data-[hover=true]:text-[#009176]",
                                        "data-[hover=true]:bg-[#BBB6B0]",
                                        "data-[focus-visible=false]:ring-default-0",
                                    ],
                                }}
                            >
                                {(item) => (
                                    <DropdownItem
                                        onClick={() => CategoryHandle(item)}
                                        key={item.key}
                                    >
                                        {item.label}
                                    </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>

                    </NavbarItem>
                    <NavbarItem >
                        <Link onClick={About} className='cursor-pointer text-nun font-medium hover:text-[#009176]' color="foreground" href="#">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem  >
                        <Link onClick={Contact} className='cursor-pointer text-nun font-medium hover:text-[#009176]' color="foreground" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                {/* // validation area */}
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link onClick={LoginHandler} className='cursor-pointer text-nun font-medium hover:text-[#009176]' href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button onClick={SignupHandler} className='cursor-pointer text-nun font-medium hover:text-[#009176]' as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

        </div>
    )
}

export default Navbar_H
