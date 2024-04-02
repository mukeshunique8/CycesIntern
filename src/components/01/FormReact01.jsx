import React, { useState } from 'react';

export default function FormReact01() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    file: null
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (event) => {
    setSelectedFile(event.target.files[0]);
    setFormData({ ...formData, file: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPreview(true);
  };

  

  return (
    <div className="p-2 h-screen text-white items-center mx-auto max-w-[800px]  flex flex-col">
      <div className="bg-slate-800 justify-center rounded-md items-center  flex flex-col mx-auto px-6 py-4 w-3/4 space-y-6">
        <h2 className="text-4xl mb-4">Form in React</h2>

        {/* Form Inputs */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="w-full md:w-1/3">
              First Name
            </label>
            <input
              className="w-full text-black p-1 rounded-sm"
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="w-full md:w-1/3">
              Last Name
            </label>
            <input
              className="w-full text-black p-1 rounded-sm"
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="email" className="w-full md:w-1/3">
              E-mail
            </label>
            <input
              className="w-full text-black p-1 rounded-sm"
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="contact" className="w-full md:w-1/3">
              Contact
            </label>
            <input
              className="w-full text-black p-1 rounded-sm"
              type="number"
              name="contact"
              id="contact"
              value={formData.contact}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col w-full">
            <label className="w-full md:w-1/3">Gender</label>
            <div className="flex items-center space-x-4">
              <input
                className="border border-gray-300 rounded-full w-5 h-5 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={handleInputChange}
              />
              <label htmlFor="male">Male</label>
              <input
                className="border border-gray-300 rounded-full w-5 h-5 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={handleInputChange}
              />
              <label htmlFor="female">Female</label>
              <input
                className="border border-gray-300 rounded-full w-5 h-5 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                type="radio"
                name="gender"
                id="others"
                value="others"
                onChange={handleInputChange}
              />
              <label htmlFor="others">Others</label>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label className="w-full md:w-1/3">Subject</label>
            <div className="flex items-center space-x-4">
              <input
                className="border border-gray-300 rounded-full w-5 h-5 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                type="radio"
                name="subject"
                id="english"
                value="english"
                onChange={handleInputChange}
              />
              <label htmlFor="english">English</label>
              <input
                className="border border-gray-300 rounded-full w-5 h-5 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                type="radio"
                name="subject"
                id="maths"
                value="maths"
                onChange={handleInputChange}
              />
              <label htmlFor="maths">Maths</label>
              <input
                className="border border-gray-300 rounded-full w-5 h-5 checked:bg-blue-600 checked:border-transparent focus:outline-none"
                type="radio"
                name="subject"
                id="physics"
                value="physics"
                onChange={handleInputChange}
              />
              <label htmlFor="physics">Physics</label>
            </div>
          </div>

          <div className="flex flex-col mt-4 w-full space-y-2 ">
            <label htmlFor="fileUpload" className="w-full md:w-1/3">
              Upload File
            </label>
            <div className="relative ">
              <input
                type="file"
                id="fileUpload"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileUpload}
              />
              <input
                className="w-full bg-white text-black p-1 rounded-sm cursor-pointer"
                placeholder="Choose file..."
                readOnly
                value={selectedFile ? selectedFile.name : ""}
              />
            </div>
          </div>

          <button type="submit" className="px-4 place-content-center mt-4 py-2 rounded-lg bg-white w-fit text-black">Submit</button>
        </form>

        {showPreview && (
          <div className="mt-4 absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
            <div className="bg-white w-full text-black p-6 rounded-md max-w-lg space-y-3 overflow-y-auto">
              <h3 className="text-2xl mb-4">Form Preview</h3>
              <p>First Name: {formData.firstName}</p>
              <p>Last Name: {formData.lastName}</p>
              <p>Email: {formData.email}</p>
              <p>Contact: {formData.contact}</p>
              <p>Gender: {formData.gender}</p>
              <p>Subject: {formData.subject}</p>
              <p>File: {formData.file ? formData.file.name : "No file selected"}</p>
              <button className="px-4 py-2 rounded-lg bg-black text-white mt-4" onClick={() => setShowPreview(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
