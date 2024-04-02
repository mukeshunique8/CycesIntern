import React, { useState } from "react";
import MemeGen from "./components/02/MemeGen";
import Api from "./components/02/API";
import Die from "./components/02/Die";
import WindowTracker from "./components/02/WindowTracker";
export default function App() {


  const [randomdie, setrandomdie] = useState(allNewDice());
    
  function allNewDice() {
    const newdice = [];
    for (let i = 0; i < 10; i++) {
      const randomTen = Math.ceil(Math.random() * 6);
      newdice.push(randomTen);
    }
    return newdice;
  }
  const tenDies = randomdie.map((die, index) => {
    return <Die key={index} value={die}></Die>;
  });

  function rolldie() {

    console.log("rolled");
    
    setrandomdie(allNewDice())
  }


  return (
    <main className="p-4 mt-8 mx-auto flex flex-col items-center justify-center">
      <div className="grid gap-4 grid-cols-5">{tenDies}</div>

      <div>
        <button
          onClick={rolldie}
          className="bg-blue-500 px-4 py-2 rounded-lg mt-8"
        >
          Roll
        </button>
      </div>
    </main>
  );
}
