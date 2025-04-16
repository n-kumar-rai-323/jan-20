"use client"

import { useState } from "react"

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null)
  const cardOption = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  return (
    <div className="flex flex-col items-center"> {/* Center content vertically and horizontally */}
      {selectedCard && (
        <div className="p-4 m-4 shadow-md rounded-md bg-indigo-500 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Selected Card:</h2>
          <p className="text-4xl font-extrabold">{selectedCard}</p>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-2"> {/* Wrap cards and center them */}
        {cardOption.map((item, index) => {
          return (
            <div
              onClick={() => setSelectedCard(item)}
              key={index}
              className={`p-3 w-16 h-20 shadow-sm rounded-sm bg-slate-300 text-center cursor-pointer select-none flex items-center justify-center font-semibold text-lg ${
                selectedCard === item ? 'bg-blue-500 text-white shadow-lg' : 'hover:bg-slate-400'
              }`}
            >
              {selectedCard === item && item } {/* Display the item always for better UX */}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cards