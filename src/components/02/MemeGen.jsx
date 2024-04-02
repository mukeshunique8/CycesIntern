import React, { useEffect, useState } from 'react'

import data from '../../Memes.json'

export default function MemeGen() {

    const[input,setInput] = useState({
        topText:"",
        bottomText:'',
        imgUrl:"https://i.imgflip.com/1g8my4.jpg"
    })

    const [allmemes,setallmemes] = useState([])

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setallmemes(data.data.memes))
    
},[])

console.log();
    

    function handleText(event){

        const {name,value} = event.target

        setInput((prev)=>({
            ...prev,[name] : value
        }))
        console.log(input);
    }

    function getNewMeme(){

        let random = Math.floor(Math.random(data.length)*100)
        let memeurl = allmemes[random].url
       
        setInput((prev)=>({
            ...prev,imgUrl:memeurl
        }))
        console.log(input);
    }
    
  return (
    <div className="bg-cyan-700 mx-auto flex justify-start items-center text-black text-2xl m-2 p-4 rounded-md h-screen flex-col w-3/4">

        <div className='mt-8'>
            <h2 className='text-3xl font-semibold font-mono'>Meme Generator</h2>
        </div>

        <div className='mt-4 space-y-3 flex flex-col'>
            <input onChange={handleText}  className='px-4 py-2 rounded-md text-center' name='topText'  placeholder='Top Text' type="text" />
            <input  onChange={handleText} className='px-4 py-2 rounded-md text-center' name='bottomText' placeholder='Bottom Text' type="text" />
        </div>

        <button onClick={getNewMeme} className='py-2 px-4 bg-white text-cyan-500 mt-8 rounded-md mb-4 w-fit'> New Meme </button>

        <div className='relative rounded-lg w-[300px] h-[300px] flex bg-white'>
            <img className='object-cover' src={input.imgUrl} alt="new Meme" />

            <div className='absolute top-10 left-10'>
            <p className='bg-white bg-opacity-90 text-black rounded p-1'>*{input.topText}</p>
            </div>
            <div className='absolute bottom-10 right-10'>
            <p draggable className='bg-white bg-opacity-90 text-black rounded p-1'>{input.bottomText}*</p>
            </div>

            
        </div>

    </div>
  )
}
