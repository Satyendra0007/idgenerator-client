import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextStore } from '../store/ContextStore'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";

export default function Navbar() {
  const { isLoggedIn, userData } = useContext(ContextStore)
  return (
    <header className=" flex justify-around items-center py-3 bg-white/50 backdrop-blur-sm  sticky top-0 left-0 z-50 border border-gray-300 ">
      <Link to={isLoggedIn ? "/dashboard" : "/"}>
        <div className="logo text-gray-700 font-semibold text-xl font-mono ">
          <span className='text-blue-600'>Id</span>Generator
        </div>
      </Link>
      <div className="buttons  flex items-center justify-center gap-2">

        {(isLoggedIn && userData.isAdmin) &&
          <Link to="/admin">
            <button className='outline-none px-4 py-2 bg-blue-600 text-white font-semibold rounded-md cursor-pointer shadow-lg flex justify-center text-sm md:text-base items-center gap-2'>
              <MdOutlineAdminPanelSettings className='text-2xl' />
            </button>
          </Link>
        }

        {isLoggedIn ?
          <div className=''>
            <Link to="/signout">
              <button className='outline-none px-4 py-1.5 bg-blue-600 text-white font-semibold rounded-md cursor-pointer shadow-lg flex justify-center text-sm md:text-base items-center gap-2'>
                {/* <span>SignOut</span> */}
                <img className='w-7 h-7 rounded-full shadow-xl' src={userData.image} alt="" />
                <PiSignOutBold className='text-2xl' />
              </button>
            </Link>
          </div>
          :
          <Link to="/login">
            <button className='outline-none px-6 py-2 bg-blue-600 text-white font-semibold rounded-md cursor-pointer shadow-lg text-sm md:text-base '>Login</button>
          </Link>
        }

      </div>
    </header>
  )
}
