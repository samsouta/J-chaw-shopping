import React, { useContext, useRef } from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { stateContext } from '../../contexts/StateContext';
import { useNavigate } from 'react-router-dom';
const H_data_footer = () => {
  const { aboutRef, missionRef, valuesRef, ourteamRef } = useContext(stateContext);
  const navigate = useNavigate();
  const scrollToAbout = () => {
    // Navigate to the about page and scroll to the "about" section
    navigate('/about#about-me');
  };  
  const scrollToMission = () => {
    // Navigate to the about page and scroll to the "about" section
    navigate('/about#about-mission');
  };  
  const scrollToValues = () => {
    // Navigate to the about page and scroll to the "about" section
    navigate('/about#about-values');
  };  
  const scrollToOurTeam = () => {
    // Navigate to the about page and scroll to the "about" section
    navigate('/about#about-ourteam');
  };  
  return (
    <div >
        <Footer className=' rounded-none shadow-none bg-transparent mt-[300px]' >
      <div className="w-full">
        <div className="grid mx-auto w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title className=' text-center text-nun text-[#2C2825] ' title="Company" />
            <Footer.LinkGroup col className='  ms-[125px]' >
              <Footer.Link className='text-nun cursor-pointer select-none' onClick={scrollToAbout} >About</Footer.Link>
              <Footer.Link className='text-nun cursor-pointer select-none' onClick={scrollToMission} >Our mission</Footer.Link>
              <Footer.Link className='text-nun cursor-pointer select-none' onClick={scrollToValues} >Our values</Footer.Link>
              <Footer.Link className='text-nun cursor-pointer select-none' onClick={scrollToOurTeam} >Our Team</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className=' text-center text-nun text-[#2C2825]' title="help center" />
            <Footer.LinkGroup  className='  ms-[110px]' col>
              <Footer.Link className='text-nun' href="https://discord.com/channels/@me">Discord Server</Footer.Link>
              <Footer.Link className='text-nun' href="https://x.com/?lang=en">Twitter</Footer.Link>
              <Footer.Link className='text-nun' href="https://www.facebook.com/samsouta99">Facebook</Footer.Link>
              <Footer.Link className='text-nun' href="https://web.whatsapp.com/">WhatApp</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className=' text-center text-nun text-[#2C2825]' title="legal" />
            <Footer.LinkGroup  className='  ms-[135px]' col>
              <Footer.Link className=' text-nun' href="#">Privacy Policy</Footer.Link>
              <Footer.Link className=' text-nun' href="#">Licensing</Footer.Link>
              <Footer.Link className=' text-nun' href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className=' text-center text-nun text-[#2C2825]' title="download" />
            <Footer.LinkGroup  className='  ms-[125px]' col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full flex justify-between bg-[#3D3D3F] px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="J-chaw™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
      <div className=' mb-[60px]' ></div>
    </div>
  )
}

export default H_data_footer
