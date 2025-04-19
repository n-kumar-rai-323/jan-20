"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useRef, useState } from 'react'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const inputRef = useRef(null)
    const handleAddTodo = () => {
        const newTask = inputRef.current.value.trim();
        if (newTask) {
            setTodos([...todos, newTask]);
            inputRef.current.value = "";
        }
    }
    return (
        <div className="flex flex-col items-center gap-4 p-6">
            <div className="flex w-full max-w-md gap-2">
                <Input
                    type="text"
                    ref={inputRef}
                    placeholder="Enter Your Task"
                    className="flex-grow"
                />
                <Button onClick={handleAddTodo}>Add Task</Button>
            </div>
            <div className="w-full max-w-md">
                <ul className="space-y-2">
                    {todos.map((item, id) => (
                        <li key={id} className="bg-gray-100 rounded-md p-2">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo