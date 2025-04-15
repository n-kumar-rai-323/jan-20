"use client"
import Image from 'next/image'
import React from 'react'

const UserCard = ({ item, setCurrentUserDetails, currentUserDetails }) => {
  const isActive = currentUserDetails?.id === item.id;
  return (
    <div
      onClick={() => setCurrentUserDetails(item)}
      className={isActive
        ? 'bg-green-100 m-2 shadow-sm rounded-lg cursor-pointer hover:bg-green-200 transition duration-150 ease-in-out border-2 border-green-500' // Lighter green for active, with a border
        : 'm-2 shadow-sm rounded-lg cursor-pointer bg-white hover:bg-gray-50 transition duration-150 ease-in-out'}
    >
      <div className='p-3 flex items-center'> {/* Changed to flex items-center */}
        <div className='relative w-12 h-12 rounded-full overflow-hidden mr-4'> {/* Smaller profile picture */}
          <Image
            src={item?.profilePicture}
            alt='profile picture'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='flex-grow overflow-hidden'> {/* Allows text to take remaining space */}
          <div className='font-semibold text-gray-800 truncate'>{item?.firstName}</div>
          {item?.status && (
            <div className='text-sm text-gray-500 truncate'>{item.status === 'online' ? 'online' : 'Offline'}</div>
          )}
          {item?.lastSeen && !item?.status && (
            <div className='text-sm text-gray-500 truncate'>Last seen {item.lastSeen}</div>
          )}
        </div>
        {item?.unreadCount > 0 && (
          <div className='ml-2 bg-green-500 text-white text-xs font-semibold rounded-full h-5 min-w-5 flex items-center justify-center'>
            {item.unreadCount}
          </div>
        )}
      </div>
    </div>
  )
}

export default UserCard