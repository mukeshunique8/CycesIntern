import React, { useState } from "react";

export default function Form() {
  const [formdata, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    newsletter:true
  });

 

  function handleInput(event) {
    const { name, value,type,checked } = event.target;
   setFormData((prevform)=>({
    ...prevform,[name]:type=== "checkbox"?checked:value
   }))
  }
  function handleFormData(event) {
    event.preventDefault();

    if (formdata.password === formdata.cpassword){

      if (formdata.newsletter){
        console.log('Form submitted:', formdata);
        console.log('Thanks for subscribing!');
      }else{
        console.log('Form submitted:', formdata);
      }

    }else{
      console.log('Confirm password mismatch');
    }
  
    
  }
  
  

  return (
    <div className="bg-blue-700 mx-auto flex justify-center items-center text-white text-2xl m-2 p-4 rounded-md h-screen flex-col">
      <form onSubmit={handleFormData} className="bg-blue-400 rounded-xl p-4">
        <div className=" font-semibold px-4 rounded-sm flex flex-col py-4 space-y-2">
          <label htmlFor="email">Email</label>
          <input
            value={formdata.email}
            className="p-2 text-black outline-none rounded-md text-right"
            onChange={handleInput}
            name="email"
            id="email"
            type="text"
          />
        </div>
        <div className="bg-blue-400 font-semibold px-4 py-2 rounded-sm flex flex-col space-y-2">
          <label htmlFor="Password">Password</label>
          <input
            value={formdata.password}
            className="p-2 outline-none text-black rounded-md text-right"
            onChange={handleInput}
            name="password"
            id="password"
            type="password"
          />
        </div>
        <div className="bg-blue-400 font-semibold px-4 rounded-sm flex flex-col py-2 space-y-2">
          <label htmlFor="CPassword">Confirm Password</label>
          <input
            value={formdata.cpassword}
            className="p-2 outline-none text-black rounded-md text-right"
            onChange={handleInput}
            name="cpassword"
            id="cpassword"
            type="password"
          />
        </div>
        <div className="flex space-x-2 justify-center items-center mt-2">
          <input
            type="checkbox"
            checked={formdata.newsletter}
            onChange={handleInput}
            name="newsletter"
          />
          <p>I want to join the newsletter</p>
        </div>

        <div className="flex mx-auto justify-center">
        <button className="px-4 py-2 mt-3 rounded-md bg-white text-blue-500">submit</button>
        </div>
      </form>
    </div>
  );
}
