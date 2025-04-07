import React, { useState } from "react";
import axios from "axios"


const Upload = () => {
    const [file,setFile] = useState(null)
    const handleChange = (e) => {
      setFile(e.target.files[0])
      console.log(e.target.files[0])
  };
  const handleSumbit = async(e) => {
      const formData = new FormData();
      formData.append("file", file)
      const id = "67caeba867d96886d34ae8e0"
      try {
          const response = await axios.post(`http://localhost:3000/api/upload/${id}`, formData )
          console.log(response);
      } catch (error) {
          console.log(error.message)
        
      }
  };
  return (
    <div className="p-6 bg-gray-100 flex gap-4">
      <h2>Uplaod your Image</h2>
      <input
        className="border rounded-lg"
              type="file"
              accept="image/jpg, image/jpeg, image/png"
        // value={""}
        onChange={handleChange}
      />
      <button
        className="px-2 py-1 bg-white rounded-lg text-black cursor-pointer text-sm"
        onClick={handleSumbit}
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
