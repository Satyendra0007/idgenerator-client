import React from 'react'
import user from "../images/user.webp"
import { useContext } from 'react'
import { ContextStore } from '../store/ContextStore'
import Card from '../Components/card'
import banner from "../images/banner.jpeg"

export default function Dashboard() {
  const { userData } = useContext(ContextStore)
  return (
    <div className='min-h-[83vh]'>
      <div className="info">
        <div className="banner w-full h-52 md:h-[30rem] bg-white">
          <img className='h-full w-full' src={banner} alt="" />
        </div>
        <div className="profile container mx-auto md:max-w-7xl flex flex-col relative px-4 md:flex-row md:px-10 md:gap-10">
          <div className="image h-14 md:w-60 md:h-60">
            <img className=' w-32 h-32 md:w-60 md:h-60 rounded-full absolute -top-[30%] md:-top-[50%]' src={userData.image ? userData.image : user} alt="" />
          </div>
          <div className="info py-4 space-y-2 font-semibold ">
            <div className="name text-lg md:text-4xl font-bold text-rose-600 capitalize">{userData.name}</div>
            <div className="email text-sm md:text-base "><span>Email - </span>{userData.email}</div>
            <div className="email text-sm md:text-base"><span>Phone - </span>{userData.phone}</div>
            <div className="email text-sm md:text-base"><span>User Id - </span>{userData.userId}</div>
            <div className="email text-sm md:text-base"><span>Course - </span>{(userData.course)?.toUpperCase()}</div>
          </div>
        </div>
      </div>
      <div className="card px-2">
        <h1 className='text-2xl font-bold text-center my-8 text-gray-800'>Your IdCard </h1>
        <div className="card flex justify-center py-10">
          <Card {...userData} />
        </div>
      </div>
    </div>
  )
}
