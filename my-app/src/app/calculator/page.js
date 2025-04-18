'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [operator, setOperator] = useState(null);
    const [firstValue, setFirstValue] = useState(null);
    const handleNumberClick = (number) => {
        setDisplay(display + number)
       

    }
    const handleOperatorClick = (newOperator) => {
        if (display) {
            setFirstValue(parseFloat(display));
            setOperator(newOperator)
            setDisplay('')
        }
    }
    const handleEqualClick = () => {
        if (firstValue !== null && operator && display) {
          const secondValue = parseFloat(display);
          let result;
    
          switch (operator) {
            case '+':
              result = firstValue + secondValue;
              break;
            case '-':
              result = firstValue - secondValue;
              break;
            case '*':
              result = firstValue * secondValue;
              break;
            case '/':
              result = firstValue / secondValue;
              break;
            default:
              return;
          }
    
          setDisplay(String(result));
          setOperator(null);
          setFirstValue(null);
        }
      };
    const handleClearClick=()=>{
        setDisplay('');
        setOperator(null);
        setFirstValue(null)
    }
    return (
        <>

            <div className="flex flex-col items-center mt-12 border border-gray-600 rounded-md p-5 w-80 mx-auto bg-gray-400">
                <input
                    type="text" value={display}
                    className="w-full p-4 text-2xl text-right mb-2 border border-gray-800 rounded-md bg-white" readOnly
                />
                <div className="grid grid-cols-4 gap-2">
                    <Button onClick={() => handleNumberClick('7')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">7</Button>
                    <Button onClick={() => handleNumberClick('8')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">8</Button>
                    <Button onClick={() => handleNumberClick('9')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">9</Button>
                    <Button onClick={() => handleOperatorClick('/')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">/</Button>

                    <Button onClick={() => handleNumberClick('4')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">4</Button>
                    <Button onClick={() => handleNumberClick('5')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">5</Button>
                    <Button onClick={() => handleNumberClick('6')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">6</Button>
                    <Button onClick={() => handleOperatorClick('*')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">*</Button>

                    <Button onClick={() => handleNumberClick('1')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">1</Button>
                    <Button onClick={() => handleNumberClick('2')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">2</Button>
                    <Button onClick={() => handleNumberClick('3')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">3</Button>
                    <Button onClick={() => handleOperatorClick('-')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">-</Button>


                    <Button onClick={() => handleNumberClick('0')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">0</Button>
                    <Button onClick={() => handleNumberClick('.')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">.</Button>

                    <Button onClick={handleEqualClick} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600"> =</Button>
                    <Button onClick={() => handleOperatorClick('+')} className="p-4 text-xl rounded-md border-none cursor-pointer bg-gray-800 hover:bg-gray-600">+</Button>
                    <Button  onClick={handleClearClick}>C</Button>
                </div>
            </div>
        </>
    )
}


export default Calculator
