import { FaEnvelopeOpenText } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const MailVerification = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6">
      <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-md">
        <FaEnvelopeOpenText className="w-16 h-16 text-blue-700 mb-4" />
        <h2 className="text-2xl font-bold">Verify Your Email</h2>
        <p className="text-gray-600 text-center mt-2">
          We've sent a verification link to your email. Please check your inbox
          and verify your account.
        </p>
        <p className="text-blue-600 font-medium mt-4">
          Once verified, you can log in.
        </p>
        <ImSpinner2 className="w-8 h-8 animate-spin text-blue-700 mt-6" />
      </div>
    </div>
  );
};

export default MailVerification;
