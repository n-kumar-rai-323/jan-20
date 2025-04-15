"use client"
import Image from 'next/image'
import React from 'react'

const UserCard = ({ item, setCurrentUserDetails}) => {
  return (
    <>
    <div
      onClick={() => setCurrentUserDetails(item)}
      className='m-2 shadow-md rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition duration-150 ease-in-out'
    >
      {item.status === 'online' && (
        <div className='bg-green-500 text-white text-xs font-medium rounded-full py-1 px-2 absolute top-2 right-2 shadow-sm'>
          Online
        </div>
      )}
      <div className='p-3 flex flex-col items-center'>
        <div className='relative w-16 h-16 rounded-full overflow-hidden mb-2'>
          <Image
            src={item.profilePicture}
            alt='profile picture'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='font-semibold text-gray-800 text-center'>{item.firstName}</div>
      </div>
    </div>
    
    </>
  )
}

export default UserCard
