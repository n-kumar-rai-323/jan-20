'use client'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Calculation = () => {
    const [increment, setValue] = useState(0)

    const changeCount = (action) => {
        switch (action) {
            case 'dec':
                setValue(prev => prev - 1)
                break
            case 'inc':
                setValue(prev => prev + 1)
                break
            case 'reset':
                setValue(0)
                break
            default:
                break
        }
    }

    return (
        <div>



            <Button variant="outline" onClick={() => changeCount('dec')}>Decrement</Button>
            <span>{increment}</span>
            <Button variant="outline" onClick={() => changeCount('inc')}>Increment</Button>
            <Button variant="outline" onClick={() => changeCount('reset')}> Reset</Button>

        </div>
    )
}

export default Calculation
