import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { EmailContext } from "../Context Api Store/EmailContext";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { email } = useContext(EmailContext);
  const navigate = useNavigate();

  const passwordResetHandler = async () => {
    if (!newPassword || !confirmPassword) {
      return toast.error("Please enter password");
    }
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/resetpassword", {
        email,
        password: newPassword,
      });

      if (response.status === 200) {
        toast.success("Password reset successful");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#0b1120] text-white p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-[#1a2332] p-8 rounded-2xl shadow-xl flex flex-col items-center w-96"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaLock className="w-14 h-14 text-blue-400 mb-4" />
        </motion.div>

        <h2 className="text-2xl font-semibold">Reset Password</h2>
        <p className="text-gray-400 text-center mt-2">
          Enter a new password for your account.
        </p>

        {/* New Password Input */}
        <motion.div
          className="relative mt-4 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type={showNewPassword ? "text" : "password"}
            placeholder="New Password"
            className="p-3 w-full border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#2a3348] text-white"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </motion.div>

        {/* Confirm Password Input */}
        <motion.div
          className="relative mt-4 w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className="p-3 w-full border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#2a3348] text-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-gray-400"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </motion.div>

        <motion.button
          onClick={passwordResetHandler}
          className="mt-4 bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition duration-300 w-full"
          disabled={loading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
