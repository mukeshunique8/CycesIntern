import React, { useEffect, useState } from 'react'

export default function WindowTracker() {

    const[show,setshow] = useState(true)
    const[windowWidth,setWindowWidth] = useState(window.innerWidth)
    
    function toggle(){
        setshow(prev=>!prev)
    }

    useEffect(()=>{

        function watchwidht(){
            setWindowWidth(window.innerWidth)
            // console.log("watching");

        }
        window.addEventListener("resize",watchwidht)

        return function(){
            // console.log("cleaning");
            window.removeEventListener("resize",watchwidht)
        }
    },[windowWidth])
  return (
    <div>
        
        <h1>Window WIDTH : {window.innerWidth}</h1>
        <button onClick={toggle}>TOggle window trafcker</button>
    </div>
  )
}
