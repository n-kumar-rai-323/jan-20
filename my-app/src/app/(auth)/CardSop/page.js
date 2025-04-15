
'use client'
import React, { useState } from 'react'
// import ItemCounter from './ItemCounter';
const Card = ({ itemName }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <>
            {/* <div>
                <h2>My Shopping List</h2>
                <ItemCounter itemName="Apples" />
                <ItemCounter itemName="Bananas" />
                <ItemCounter itemName="Milk" />
            </div> */}

            <div className="flex items-center space-x-4">
                <span>{itemName}:</span>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-l"
                    onClick={handleDecrement}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </>
    )
}

export default Card
