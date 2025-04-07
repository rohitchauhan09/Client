import React from "react";
import { Link } from "react-router-dom";

const MailVerificationSucess = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center max-w-md text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-2">Failed!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Your email has been failed.
        </p>
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition-all shadow-md"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default MailVerificationSucess;
