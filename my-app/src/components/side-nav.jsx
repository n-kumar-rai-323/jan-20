"use client"

import { ActivitySquare, MessageSquare, RadarIcon, User2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideNav = () => {
  const pathname = usePathname();
  const navItems = [
    { title: 'Chat', link: '/whatsapp/chat', icon: <MessageSquare className="w-5 h-5" /> },
    { title: 'Status', link: '/whatsapp/status', icon: <ActivitySquare className="w-5 h-5" /> },
    { title: 'Channel', link: '/whatsapp/channel', icon: <RadarIcon className="w-5 h-5" /> },
    { title: 'Communities', link: '/whatsapp/communities', icon: <User2 className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col bg-gray-100 w-16 py-4 items-center"> {/* Narrow width and center icons */}
      {navItems.map((item, id) => (
        <Link
        key={id}
        href={item.link}
        className={`flex flex-col items-center justify-center px-4 py-3 text-gray-700 hover:bg-gray-200 transition duration-150 ease-in-out ${
          pathname === item.link ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30 rounded-lg' : '' // Lighter green for active
        }`}
        >
          <span className="font-medium">{item.icon}</span>
          {/* You can add tooltips or labels if you want text on hover */}
          {/* <span className="mt-1 text-xs">{item.title}</span> */}
        </Link>
      ))}
    </div>
  );
};

export default SideNav;