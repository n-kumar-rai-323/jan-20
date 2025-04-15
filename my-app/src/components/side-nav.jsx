import Link from 'next/link'
import React from 'react'

const SideNav = () => {
    const nevItems=['chat', 'status', 'channel', 'communities']
  return (
    <div className='flex flex-col'>
      {nevItems.map((item,id)=>{
        return (
            <Link  key={id} href={'/whatsapp/'+item} >
                {item}
            </Link>
        )
      })}
    </div>
  )
}

export default SideNav

