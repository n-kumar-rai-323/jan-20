"use client"
import ChatUi from '@/components/chat-ui'
import UserCard from '@/components/user-card'
import React, { useState } from 'react'

const Chat = () => {
  const [currentUserDetails , setCurrentUserDetails] = useState(null)
  const users = [
    {
      "id": "1",
      "firstName": "Nishan Kumar Rai",
      "status": "offline",
      "profilePicture": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    },
    {
      "id": "2",
      "firstName": "Alish Gurung",
      "status": "offline",
      "profilePicture": "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
    },
    {
      "id": "3",
      "firstName": "Nikita Rai",
      "status": "online",
      "profilePicture": "https://media.istockphoto.com/id/1163695698/photo/photo-of-dark-skin-macho-interested-look-up-empty-space-hand-touch-chin-wear-jeans-denim.jpg?s=612x612&w=0&k=20&c=ACfmbdDYgRT1KI99l2BNB1xESzLvZSF3Gp_5LrDfX2A="
    },
    
  ];

  return (
    <div className="flex h-screen">
      <div className="w-80 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        {users.map(user => (
          <UserCard
            key={user.id}
            item={user}
            setCurrentUserDetails={setCurrentUserDetails} currentUserDetails ={currentUserDetails}
          />
        ))}
      </div>
      <div className="flex-grow bg-white">
        {currentUserDetails ? (
          <ChatUi userUserDetails={currentUserDetails} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a chat to view
          </div>
        )}
      </div>
    </div>

  );
};

export default Chat;
