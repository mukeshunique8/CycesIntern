import React, { useState, useEffect } from 'react';

export default function Api() {
    const [starwarData, setStarwarData] = useState({});
    const[count,setcount] = useState(0)
  
    
    function handlecount(){
        setcount(prev=>prev+1)
    }
    
    function handleminus(){
        setcount(prev=>prev-1)
    }

    useEffect(() => {
        console.log(`calling API for ${count}th time` );
        fetch(`https://swapi.dev/api/people/${count+1}`)
            .then(res => res.json())
            .then(data => setStarwarData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, [count]); // Empty dependency array to run the effect only once after the initial render

    return (
        <div className='m-2 p-4 bg-green-300'>
            
                <div      className='space-x-3 flex text-4xl justify-start'>
                <button onClick={handlecount}>+</button>
            <p>{count}</p>
            <button  onClick={handleminus}>-</button>
                </div>
            
            <pre>{JSON.stringify(starwarData, null, 2)}</pre>
        </div>
    );
}
