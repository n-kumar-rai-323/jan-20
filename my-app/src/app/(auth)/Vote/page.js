"use client"
import { useState } from "react";

const Vote = () => {
    const [votes, setVotes] = useState({
        Yes: 0,
        No: 0,
    });
    const handleVote = (voteType) => {
        setVotes((prevVotes) => ({
            ...prevVotes, [voteType]: prevVotes[voteType] + 1
        }));
    };
    return (
        <>
            <div className="flex space-x-4">
                <button onClick={()=>handleVote('Yes')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none foucs:shadow-outline ">Yes {votes.Yes}</button>
                <button onClick={()=> handleVote('No')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none foucs:shadow-outline ">No {votes.No}</button>
            </div>
        </>
    )
}
export default Vote;