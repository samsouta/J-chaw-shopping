import React from 'react'
import { Image } from "@nextui-org/react";
import Join_Our_Team_Card from './Card/Join_Our_Team_Card';
import { IoMdArrowForward } from "react-icons/io";

const About_join_our_team = () => {
  const teamData = [
    {
      id: 1,
      name: 'Competitive salaries'
    },
    {
      id: 2,
      name: '30 days of paid vacation'
    },
    {
      id: 3,
      name: 'Benefits for you and your family'
    },
    {
      id: 4,
      name: 'Flexible work hours'
    },
    {
      id: 5,
      name: 'Annual team retreats'
    },
    {
      id: 6,
      name: 'A great work environment'
    },
  ]
  return (
    <div className=' p-5' >
      <div className=' grid grid-cols-10 mt-40 place-content-center join-our-team-bg rounded-2xl shadow-lg h-[500px]' >
        <div className=' col-span-5 h-[500px] flex justify-center items-center' >
          <Image
            isBlurred
            src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="NextUI Album Cover"
            className="m-5 w-[400px] h-[400px] object-cover rounded-xl"
          />
        </div>
        <div className=' col-span-5 h-[500px] grid gap-y-6 place-content-center px-3' >
          <h1 className=' text-nun text-4xl font-extrabold' >Join our team</h1>
          <span className=' text-mon text-lg' >Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</span>
          {/* use card */}
          <div className=' grid grid-cols-2' >
            {
              teamData?.map((data) => (
                <div key={data?.id} className=' col-span-1' >
                  <Join_Our_Team_Card
                    data={data}
                  />
                </div>
              ))
            }
          </div>
          <button>
            <span className=' flex items-center gap-x-1 join-out-team-click' >See our job postings <span><IoMdArrowForward /></span> </span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default About_join_our_team
