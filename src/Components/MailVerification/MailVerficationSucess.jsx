import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const MailVerificationSucess = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center max-w-md text-center">
        <FaCheckCircle className="w-20 h-20 text-blue-500 mb-4" />
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Success!</h2>
        <p className="text-lg text-gray-600 mb-6">Your email has been successfully verified.</p>
        <Link 
          to="/login" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white text-lg font-semibold rounded-lg transition-all shadow-md"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default MailVerificationSucess;
