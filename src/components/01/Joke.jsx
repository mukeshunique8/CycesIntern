import React, { useState } from 'react';

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function showPunch() {
    setIsShown(prev => !prev);
    props.onTogglePunchline(!isShown); // Toggle the value sent to the parent
  }

  return (
    <div className='bg-purple-500 mb-4 p-2 rounded-lg text-white'>
      <h2 className='text-2xl mb-2'>{props.setup}</h2>
      {isShown && <p>{props.punchline}</p>}
      <button
        className={`px-4 py-2 ${isShown ? "bg-red-500" : "text-green-500"} rounded-lg bg-white`}
        onClick={showPunch}
      >
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
    </div>
  );
}
