import React, { useState, useContext } from "react";
import { EmailContext } from "../Context Api Store/EmailContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { MdLockOutline } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import { motion } from "framer-motion";

const EnterOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { email } = useContext(EmailContext);
  const navigate = useNavigate();

  const verifyOtpHandler = async () => {
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/verifyotp", {
        otp,
        email,
      });

      if (response.status === 200) {
        toast.success("OTP verified successfully");
        navigate("/resetpassword");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
      toast.error("Invalid OTP, please try again.");
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
          <MdLockOutline className="w-14 h-14 text-blue-400 mb-4" />
        </motion.div>

        <h2 className="text-2xl font-semibold">Enter OTP</h2>
        <p className="text-gray-400 text-center mt-2">
          Please enter the OTP sent to your email.
        </p>

        <motion.input
          type="tel"
          placeholder="Enter OTP"
          className="mt-4 w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#2a3348] text-white text-center"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-col gap-3 w-full mt-4">
          <motion.button
            onClick={verifyOtpHandler}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition duration-300 flex justify-center items-center"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <ImSpinner2 className="animate-spin w-5 h-5" />
            ) : (
              "Verify OTP"
            )}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default EnterOtp;
