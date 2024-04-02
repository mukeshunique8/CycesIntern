import React from 'react'

export default function Die(props) {
  return (
    <div  className="w-[50px] items-center justify-center flex p-4 rounded-lg cursor-pointer h-[50px] bg-green-500">
        <h2 >{props.value}</h2>
    </div>
  )
}
