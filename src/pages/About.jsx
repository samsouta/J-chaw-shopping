import React, { useContext } from 'react'
import H_data_footer from '../components/Home/H_data_footer'
import About_me from '../components/About/About_me';
import About_mission from '../components/About/About_mission';
import About_our_values from '../components/About/About_our_values';
import About_trusted from '../components/About/About_trusted';
import About_our_team from '../components/About/About_our_team';
import About_join_our_team from '../components/About/About_join_our_team';
// import { Avatar } from "@nextui-org/react";
// import deve from "../assets/images/deve/developer.jpeg"
const About = () => {

    return (
        <>
            <About_me/>
            <About_mission />
            <About_our_values />
            <About_trusted/>
            <About_our_team />
            <About_join_our_team/>
            <H_data_footer />
        </>
    )
}

export default About
