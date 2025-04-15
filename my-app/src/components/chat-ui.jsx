import React from 'react';

// Sample data that the ChatUi component expects
const sampleUserUserDetails = {
  firstName: 'John Doe',
  profilePicture: 'https://example.com/john-doe.jpg', // Replace with a real URL
  lastSeen: 'Today at 12:30 PM',
  status: 'online', // or 'offline'
  unreadCount: 0,
};

// Sample chat messages
const sampleMessages = [
    { id: 1, sender: 'other', text: 'Hello!', timestamp: '12:00 PM' },
    { id: 2, sender: 'self', text: 'Hi John! How are you?', timestamp: '12:05 PM' },
    { id: 3, sender: 'other', text: 'I am doing well, thanks! And you?', timestamp: '12:10 PM' },
    { id: 4, sender: 'self', text: 'I\'m also good!', timestamp: '12:15 PM' },
    { id: 5, sender: 'other', text: 'This is a longer message to test wrapping and how it looks in the chat bubble. It should wrap to the next line.', timestamp: '12:20 PM' },
    { id: 6, sender: 'self', text: 'Okay', timestamp: '12:22 PM' },
];

const ChatUi = ({ userUserDetails }) => {
  const [messages] = React.useState(sampleMessages);
  const [newMessage, setNewMessage] = React.useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, you'd send this to a server
      const newMsg = {
        id: Date.now(),
        sender: 'self', //  Assume the current user is "self"
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }),
      };
      // Instead of directly setting the state, you would use  setMessage([...messages, newMsg])
      console.log("new message", newMsg);
      setNewMessage(''); // Clear the input
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat Header */}
      <div className="bg-green-500 text-white p-4 flex items-center shadow-md">
        <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
          <img
            src={userUserDetails.profilePicture}
            alt={userUserDetails.firstName}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
            <h2 className="font-semibold text-lg">{userUserDetails.firstName}</h2>
            <p className="text-xs">{userUserDetails.status || userUserDetails.lastSeen}</p>
        </div>

      </div>

      {/* Chat Messages Area */}
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 rounded-lg p-3 max-w-[70%] ${
              message.sender === 'self'
                ? 'bg-green-200 ml-auto text-right'
                : 'bg-white mr-auto'
            }`}
          >
            <p className="text-gray-800">{message.text}</p>
            <span className="block text-xs text-gray-500 mt-1">
              {message.timestamp}
            </span>
          </div>
        ))}
      </div>

      {/* Message Input Area */}
      <div className="bg-gray-200 p-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow rounded-full py-2 px-4 bg-white text-gray-700 focus:outline-none"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSendMessage();
                }
            }}
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 p-2 rounded-full bg-green-500 text-white focus:outline-none"
          >
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
