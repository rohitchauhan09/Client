import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaList, FaGlobe, FaSignOutAlt } from "react-icons/fa";

const MobileMenu = ({ onClose, onLogout }) => {
  const menuItems = [
    { path: "/dashboard/homedashboard", icon: <FaHome />, label: "Home" },
    { path: "/dashboard/createblogs", icon: <FaPlus />, label: "Create Blog" },
    { path: "/dashboard/viewblogs", icon: <FaList />, label: "View Blogs" },
    { path: "/", icon: <FaGlobe />, label: "Main Website" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50">
      <div className="bg-[#1a2332] w-64 h-full p-6 flex flex-col justify-between">
        {/* Menu Items */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-white">Menu</h2>
          <ul className="space-y-4">
            {menuItems.map(({ path, icon, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center gap-3 w-full p-3 rounded-lg transition ${
                      isActive ? "bg-blue-600" : "bg-[#2a3348] hover:bg-blue-600"
                    } text-white`
                  }
                >
                  {icon} {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Section */}
        <button
          onClick={() => {
            onLogout();
            onClose(); 
          }}
          className="flex items-center gap-3 w-full p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
