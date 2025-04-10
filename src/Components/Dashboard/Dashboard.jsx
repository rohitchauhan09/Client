import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { FaHome, FaPlus, FaList, FaCog, FaGlobe, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMenu } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

const Dashboard = () => {
  const email = localStorage.getItem("email");
  const [userImage, setUserImage] = useState("userimage.png");
  const [showUpload, setShowUpload] = useState(false);
  const [file, setFile] = useState(null);
  const [showmenu,setShowMenu] = useState(false)

  const navigate = useNavigate()
  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append("file", file);
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.post(
        `https://server-pnqp.onrender.com/api/upload/${userId}`,
        formData
      );
      if (response) {
        toast.success("Image uploaded successfully");
        setUserImage(response.data.filePath);
        setFile("");
        setShowUpload(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUserLogout = () => {
    localStorage.clear();
    // console.log(localStorage)
    navigate("/login")

  }

  return (
    <div className="h-min-screen flex bg-[#0b1120] text-white">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-[#1a2332] p-6 flex-col justify-between hidden sm:block  sm:relative "
      >
        <div>
          <h2 className="text-xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            {[
              {
                path: "/dashboard/homedashboard",
                icon: <FaHome />,
                label: "Home",
              },
              {
                path: "/dashboard/createblogs",
                icon: <FaPlus />,
                label: "Create Blog",
              },
              {
                path: "/dashboard/viewblogs",
                icon: <FaList />,
                label: "View Blogs",
              },
            ].map(({ path, icon, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex cursor-pointer items-center gap-3 w-full p-3 rounded-lg transition ${
                      isActive
                        ? "bg-blue-600"
                        : "bg-[#2a3348] hover:bg-blue-600"
                    }`
                  }
                >
                  {icon} {label}
                </NavLink>
              </li>
            ))}
            {/* Keep Main Website Link Green */}
            <li>
              <NavLink
                to="/"
                className="flex cursor-pointer items-center gap-3 w-full p-3 rounded-lg bg-green-600 hover:bg-green-500 transition"
              >
                <FaGlobe /> Main Website
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button
            onClick={handleUserLogout}
            className="flex cursor-pointer mt-3 items-center gap-3 w-full p-3 rounded-lg bg-red-600 hover:bg-red-500 transition"
          >
            <FiLogOut /> Logout
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 px-4 py-3 relative"
      >
        {/* Top User Info */}
        <div className="bg-[#1a2332] px-4 py-3 rounded-lg shadow-md mb-6 flex justify-between items-center">
          <p>
            <IoMenu
              onClick={() => setShowMenu(true)}
              className="text-xl font-bold sm:hidden block cursor-pointer"
            />
          </p>

          <div className="flex items-center gap-2 bg-[#2a3348] px-3 py-2 rounded-lg shadow-md">
            <img
              onClick={() => setShowUpload(true)}
              src={userImage}
              alt="user"
              className="w-6 h-6 rounded-full cursor-pointer"
            />
            <span className="text-gray-400 text-sm">{email}</span>
          </div>
        </div>

        {/* Upload Section */}
        {showUpload && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-800/80 px-4 sm:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a2332] w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-lg shadow-lg text-center"
            >
              <FaUserCircle className="text-gray-400 text-6xl sm:text-8xl mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mt-2 mb-6">
                Upload Profile Picture
              </h3>
              <input
                type="file"
                accept="image/jpg, image/jpeg, image/png"
                className="p-2 w-full border rounded bg-gray-800 text-white cursor-pointer"
                onChange={handleImageChange}
              />
              <button
                onClick={handleFormSubmit}
                className="mt-4 p-2 w-full bg-green-600 rounded hover:bg-green-500 transition cursor-pointer"
              >
                Upload
              </button>
              <button
                className="mt-2 p-2 w-full bg-red-600 rounded hover:bg-red-500 transition cursor-pointer"
                onClick={() => setShowUpload(false)}
              >
                Cancel
              </button>
            </motion.div>
          </div>
        )}

        <div className="bg-[#1a2332] p-4 rounded-lg shadow-lg">
          <Outlet />
        </div>
      </motion.div>
      {/* mobile view Menu  */}
      {showmenu && <MobileMenu onClose={() => setShowMenu(false)} onLogout={handleUserLogout} />}

    </div>
  );
};

export default Dashboard;
