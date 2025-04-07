import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../Components/App Layout/Navbar";
import axios from "axios";
import toast from "react-hot-toast";
import { EmailContext } from "../Components/Context Api Store/EmailContext.jsx";
const Login = () => {
  const { setUserId ,setUsername,setEmail} = useContext(EmailContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:3000/api/login", formData);
        const token = response.headers.authorization.split(" ")[1];
        setUserId(response.data.userId);
        setUsername(response.data.username);
        setEmail(response.data.email)
        
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("userId",response.data.userId)
        localStorage.setItem("email",  response.data.email);


        localStorage.setItem("token", token);
        console.log(response.data)
        
        if (response.status === 200) {
          navigate("/dashboard/homedashboard");
          toast.success("Login Successful");
        }
      } catch (error) {
        console.log(error.message);
        toast.error("Login Failed, Please Try Again");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-[#0b1120] text-white p-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full max-w-md bg-[#1a2332] p-8  rounded-2xl shadow-xl backdrop-blur-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-4">Login</h2>
          <p className="text-center text-gray-400 mb-4">
            Don't have an account? 
            <Link to="/signup" className="text-blue-400 hover:underline"> Sign Up</Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 font-semibold">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 bg-[#2a3348] text-white"
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
            </div>

            <div className="relative">
              <label className="block text-gray-300 font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 bg-[#2a3348] text-white"
              />
              <span
                className="absolute top-10 right-3 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && <p className="text-red-400 text-sm">{errors.password}</p>}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </motion.button>
            <div className="text-left">
              <Link to="/sendotp" className="text-blue-400 text-sm hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Login;
