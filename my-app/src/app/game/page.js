"use client"
import React, { useState, useEffect } from "react";

const Unclick = () => {
  const initialGrids = ["😀", "😂", "💻", "😎", "❤️", "💻", "🕹️", "😎", "👍", "😀", "❤️", "👍", "🧠", "🧠", "😂", "🕹️"];
  const [grids, setGrids] = useState(initialGrids);
  const [revealed, setRevealed] = useState(new Array(grids.length).fill(false));
  const [selected, setSelected] = useState([]);
  const [matches, setMatches] = useState([]);
  const [canClick, setCanClick] = useState(true);

  const handleClick = (id) => {
    if (!canClick || revealed[id] || selected.includes(id)) {
      return;
    }

    const newRevealed = [...revealed];
    newRevealed[id] = true;
    setRevealed(newRevealed);
    setSelected([...selected, id]);
  };

  useEffect(() => {
    if (selected.length === 2) {
      setCanClick(false);
      const [first, second] = selected;
      if (grids[first] === grids[second]) {
        setMatches([...matches, first, second]);
        setSelected([]);
        setCanClick(true);
      } else {
        setTimeout(() => {
          const newRevealed = [...revealed];
          newRevealed[first] = false;
          newRevealed[second] = false;
          setRevealed(newRevealed);
          setSelected([]);
          setCanClick(true);
        }, 1000);
      }
    }
  }, [selected, grids, revealed, matches]);

  const handleReset = () => {
    setRevealed(new Array(grids.length).fill(false));
    setSelected([]);
    setMatches([]);
    setGrids(initialGrids); // You might want to shuffle here for a new game
  };

  return (
    <>
      <div>
        Available items: {grids.toString()}
        <br />
        Revealed items: {revealed.toString()}
        <br />
        Selected items: {selected.toString()}
        <br />
        Matches: {matches.toString()}
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {grids.map((item, id) => (
          <div
            key={id}
            onClick={() => handleClick(id)}
            className={`p-2 shadow-md w-20 h-20 bg-violet-800 text-4xl rounded-2xl flex items-center justify-center cursor-pointer ${revealed[id] || matches.includes(id) ? 'bg-green-500' : ''} ${selected.includes(id) ? 'border-2 border-yellow-500' : ''}`}
          >
            {revealed[id] || matches.includes(id) ? item : ''}
          </div>
        ))}
      </div>
      <button onClick={handleReset} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Reset Game
      </button>
    </>
  );
};

export default Unclick;