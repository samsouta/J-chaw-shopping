import React, { useContext } from 'react'
import Our_team_card from './Card/Our_team_card'
import { data } from 'autoprefixer'
import { stateContext } from '../../contexts/StateContext';
const About_our_team = ({ref}) => {
  const { ourteamRef } = useContext(stateContext);
    
    const ourTeam = [
        {
            id: 1,
            name: 'Leslie Alexander',
            position: 'Co-Founder / CEO',
            place: 'Toronto, Canada',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
        {
            id: 2,
            name: 'Michael Foster',
            position: 'Co-Founder / CTO',
            place: 'Glasgow, Scotland',
            image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
        {
            id: 3,
            name: 'Dries Vincent',
            position: 'Business Relations',
            place: 'Niagara Falls, Canada',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
        {
            id: 4,
            name: 'Lindsay Walton',
            position: 'Front-end Developer',
            place: 'London, England',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
        {
            id: 5,
            name: 'Courtney Henry',
            position: 'Designer',
            place: 'Toronto, Canada',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
        {
            id: 6,
            name: 'Tom Cook',
            position: 'Director of Product',
            place: 'Toronto, Canada',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
        {
            id: 7,
            name: 'Whitney Francis',
            position: 'Copywriter',
            place: 'Toronto, Canada',
            image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        },
        {
            id: 8,
            name: 'Leonard Krasner',
            position: 'Senior Designer',
            place: 'Toronto, Canada',
            image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
        }
    ]
    return (
        <div ref={ourteamRef} id='about-ourteam' className='mt-40 px-6' >
            <div className=' w-[600px]' >
                <h1 className=' text-nun font-extrabold text-3xl' >Our Team</h1>
                <p className=' text-mon text-md' >Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
            </div>
            <div className=' mt-14 grid grid-cols-4 gap-4' >
                {
                    ourTeam?.map((data) => (
                        <div className=' col-span-1' key={data?.id} >
                            <Our_team_card 
                            data={data}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default About_our_team
