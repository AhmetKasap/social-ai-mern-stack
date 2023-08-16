import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import Link from 'next/link';

const ProfileButton = () => {
  return (
    <>  
      <Link href='/user/profile'>
        <button className='bg-cyan-600 hover:bg-cyan-700 p-2 rounded-full  flex flex-row items-center justify-center gap-2'>
              <FaUserAlt className='text-xl text-white'></FaUserAlt>
              <span className='text-white font-rem'>Profil</span>
          </button>
      </Link>
        
    </>
  )
}

export default ProfileButton