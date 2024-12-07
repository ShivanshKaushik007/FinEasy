import { useUser,UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardHeader() {
  const { user } = useUser();
  return (
    <div className='p-5 bg-[#222224] shadow-sm border-b flex justify-between '>
        <div>
        {user ? (
        <p className='text-white font-bold text-xl' >{user.firstName} {user.lastName}</p>
      ) : (
        <p></p>
      )}
        </div>
        <div>
            <UserButton afterSignOutUrl='/'/>
        </div>
       
    </div>
  )
}

export default DashboardHeader