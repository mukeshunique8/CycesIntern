import React, { useState } from 'react'

export default function Header(props) {

 
    console.log(props.onClick);
   
  return (
    <div onClick={props.onClick}>
       
        
        <p>
        This is current user: {props.user}
    </p>

    </div>
  )
}
