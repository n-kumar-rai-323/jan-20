"use client"
import React,{useState} from "react"




const Unclick = () => {
  const grids =
    ["😀", "😂", "💻", "😎","❤️", "💻", "🕹️", "😎","👍", "😀", "❤️", "👍","🧠", "🧠", "😂", "🕹️"]
    const [revealed, setRevealed] =useState (new Array(grids.length).fill(false))
    const [selectedEmoji, setSelectedEmoji] = useState([])

    const handleClick=(clickId)=>{
      const newRevealed = [...revealed]
      newRevealed[clickId] = true
      setRevealed(newRevealed)
      // setRevealed(existingRevealedItems => existingRevealedItems.map((item,id)=>))
    }

  return (
    <>
   <div>
  Availalbe item is : {grids.toString()}
  <br/>
   revealed item is : {revealed.toString()}
   </div>
    <div className='grid grid-cols-4'>
    
      {grids.map((item, id)=>{
        return(
          <div key={id} onClick={()=>handleClick(id)} className='p-2 m-2 shadow-md w-16 h-16 bg-violet-800 text-4xl rounded-2xl'>

            {item}
          </div>
        )
      })}
    </div>
    </>
  )
}



export default Unclick
