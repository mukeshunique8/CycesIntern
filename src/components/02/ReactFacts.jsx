import React, { useState } from 'react'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

// library.add(faCoffee);
library.add(faToggleOn);
library.add(faToggleOff);


export default function ReactFacts() {

    const [light,setlight] = useState(true)
    console.log(light);

    function togglelight(){
        setlight(prev=>!prev)
    }
  return (

    <div className={`${light?"bg-white text-black":"bg-black text-white"} h-screen p-4 items-center  flex flex-col`} >

        <header className=' shadow-2xl w-full p-2 flex justify-between'>
            <h2 className=' font-thin  text-3xl'>ReactFacts</h2>
            <div className='flex justify-evenly space-x-4 items-center'>
                <p>Light</p>

                <button onClick={togglelight} className='flex items-center justify-center'>

                {light?<FontAwesomeIcon className='size-8 cursor-pointer' icon="fa-solid fa-toggle-off" />:<FontAwesomeIcon className='size-8 cursor-pointer' icon="fa-solid fa-toggle-on" />}
                
                </button>
                
                <p>Dark</p>
            </div>
        </header>

        <main className='w-2/3 mt-8 flex flex-col'>
            <h2 className='text-4xl font-bold mb-4'>Fun Facts about React</h2>
            <ul className="list-disc font-mono text-lg text-cyan-600">
    <li className="mb-2">Virtual DOM</li>
    <li className="mb-2">JSX Syntax</li>
    <li className="mb-2">React Native</li>
    <li className="mb-2">Unidirectional Data Flow</li>
    <li>Component-Based Architecture</li>
</ul>
        </main>


    </div>

  )
}
