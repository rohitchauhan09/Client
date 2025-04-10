import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../Components/App Layout/Navbar";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    category: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(formData.password)) {
      newErrors.password = "Password must have at least 6 characters, 1 uppercase, 1 number, and 1 special character";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      const response = await axios.post("https://server-pnqp.onrender.com/api/signup", formData);
      toast.success(response.data.message);
      navigate("/mailverification");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center  w-full h-screen bg-[#0b1120] text-white">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="bg-[#1a2332] p-6 pt-4  rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-2">Sign Up</h2>
          <p className="text-center text-gray-400 mb-4">
            Already have an account? <Link to="/login" className="text-blue-400">Login</Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Enter name" },
              { label: "Email", name: "email", type: "email", placeholder: "Enter your Email" },
              { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter phone number" }
            ].map(({ label, name, type, placeholder }) => (
              <div key={name} className="flex flex-col gap-1">
                <label className="font-semibold pl-2">{label}</label>
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border focus:ring-2 focus:ring-blue-400 border-gray-600 rounded-2xl focus:outline-none bg-[#2a3348] text-white"
                />
                {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
              </div>
            ))}

            <div className="flex flex-col gap-1">
              <label className="font-semibold pl-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border focus:ring-2 focus:ring-blue-400 border-gray-600 rounded-2xl focus:outline-none bg-[#2a3348] text-white"
              >
                <option value="">Select a category</option>
                <option value="politics">Politics</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
                <option value="industry">Industry</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold pl-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border focus:ring-2 focus:ring-blue-400 border-gray-600 rounded-2xl focus:outline-none bg-[#2a3348] text-white"
              />
              <span className="absolute top-10 right-4 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 cursor-pointer font-semibold text-white py-2 rounded-2xl hover:bg-blue-400 transition"
            >
              Sign Up
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SignUp;
