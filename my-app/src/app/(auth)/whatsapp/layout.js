import SideNav from '@/components/side-nav'
import Image from 'next/image'
import React from 'react'

const layout = ({ children }) => {
  return (

    <div className='flex fap-4'>

      <SideNav />
      {children}</div>
  )
}

export default layout
