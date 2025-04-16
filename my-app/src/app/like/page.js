'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react'

const Like = () => {
    const [reactions, setReactions]= useState({
        Like:0,
        Love:0,
        Haha:0,
        Wow:0,
        Sad:0,
        Angry:0,
    });
    const handleReaction=(reactionType)=>{
        setReactions((prevReactions)=>({
            ...prevReactions,
            [reactionType]:prevReactions[reactionType] +1
        }));
    };
  return (
    
    <div>
        <Textarea/>

      <Button onClick={()=>handleReaction('Like')}>👍 Like ({reactions.Like})</Button>
      <Button onClick={()=>handleReaction('Love')}>❤️ Love ({reactions.Love})</Button>
      <Button onClick={()=>handleReaction('Haha')}>😂 Haha ({reactions.Haha})</Button>
      <Button onClick={()=>handleReaction('Wow')}>😮 Wow ({reactions.Wow})</Button>
      <Button onClick={()=>handleReaction('Sad')}>😢 Sad ({reactions.Sad})</Button>
      <Button onClick={()=>handleReaction('Angry')}>😠 Angry ({reactions.Angry})</Button>
    </div>
  )
}

export default Like
