import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    Gender: false // Initially unchecked
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target; // Destructure event.target

    setFormData((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value // Update state based on type of input
      };
    });
  }

  

  function handleFormData(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="p-4 bg-cyan-800 flex flex-col justify-center  items-center">
      <p>{formData.firstName}</p>
      <p>{formData.lastName}</p>
      <p>{formData.email}</p>
      <form
        onSubmit={handleFormData}
        className="flex flex-col justify-start w-3/4 items-start space-y-4"
        action=""
      >
        <input
          className="w-full rounded py-2 px-4"
          onChange={handleChange}
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
        />

        <input
          onChange={handleChange}
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          className="w-full rounded py-2 px-4"
        />

        <input
          onChange={handleChange}
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          className="w-full rounded py-2 px-4"
        />
        <textarea
          placeholder="Comments"
          onChange={handleChange}
          name="comments"
          id="comments"
          cols="30"
          value={formData.comments}
          className="w-full rounded py-2 px-4"
          rows="5"
        ></textarea>

        <div className="space-x-3 text-white text-xl">
          <input
            onChange={handleChange}
            checked={formData.Gender}
            id="male"
            type="checkbox"
            name="Gender"
          />
          <label htmlFor="Gender">Male</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
