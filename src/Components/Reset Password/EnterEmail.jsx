import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { EmailContext } from "../Context Api Store/EmailContext";
import toast from "react-hot-toast";
import { FiMail } from "react-icons/fi";
import { ImSpinner2 } from "react-icons/im";
import { motion } from "framer-motion";

const EnterEmail = () => {
  const { email, setEmail } = useContext(EmailContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const getOtpHandler = async () => {
    try {
      if (!email) {
        toast.error("Please enter email");
        return;
      }

      setLoading(true);
      const response = await axios.post(
        "https://server-pnqp.onrender.com/api/sendotp",
        {
          email,
        }
      );

      if (response.status === 200) {
        toast.success("OTP sent successfully");
        navigate("/verifyotp");
      }
    } catch (error) {
      console.error("Error fetching OTP:", error.message);
      toast.error("Failed to send OTP. Try again.");
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
          <FiMail className="w-14 h-14 text-blue-400 mb-4" />
        </motion.div>

        <h2 className="text-2xl font-semibold">Enter Your Email</h2>
        <p className="text-gray-400 text-center mt-2">
          We will send an OTP to your email for verification.
        </p>

        <motion.input
          type="email"
          placeholder="Enter your email"
          className="mt-4 w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#2a3348] text-white"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-col gap-3 w-full mt-4">
          <motion.button
            onClick={getOtpHandler}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition duration-300 flex justify-center items-center"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <ImSpinner2 className="animate-spin w-5 h-5" />
            ) : (
              "Generate OTP"
            )}
          </motion.button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="bg-gray-500 text-center hover:bg-gray-400 text-white font-medium py-3 rounded-lg transition duration-300 block"
            >
              Cancel
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default EnterEmail;
