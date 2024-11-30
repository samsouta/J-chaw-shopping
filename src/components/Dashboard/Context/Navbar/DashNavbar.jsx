import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Input } from '@mantine/core';
import { IoMdContact } from "react-icons/io";

const DashNavbar = () => {
    const [currentPage, setCurrentPage] = React.useState("home");
    return (
        <div className=' flex' >
            <Navbar className=' bg-white mx-10 fixed z-30 rounded-xl top-[2.5%] left-[30%] max-w-[60%]' >
                <NavbarBrand>
                    <Breadcrumbs
                        underline="active"
                        itemClasses={{
                            item: " text-gray-400 data-[current=true]:text-black",
                            separator: "text-black",
                        }}
                        variant="solid"
                        onAction={(key) => setCurrentPage(key)}>
                        <BreadcrumbItem key="dashboard" className=' text-mon font-bold text-md' isCurrent={currentPage === "dashboard"}>
                            DashBoard
                        </BreadcrumbItem>
                        <BreadcrumbItem key="home" className=' text-mon font-bold text-md' isCurrent={currentPage === "home"}>
                            Home
                        </BreadcrumbItem>
                    </Breadcrumbs>
                </NavbarBrand>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                    <Input radius="md" placeholder="Input component" />
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <button className=' flex gap-x-2 items-center hover:bg-slate-200 p-3 rounded-md' >
                            <IoMdContact className=' text-xl' />
                            <span className=' text-sm text-nun font-bold' >Login</span>
                        </button>
                    </NavbarItem>
                    
                </NavbarContent>
            </Navbar>
        </div>
    )
}

export default DashNavbar
