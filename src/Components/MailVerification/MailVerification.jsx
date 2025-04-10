import { FaEnvelopeOpenText } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

const MailVerification = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0b1120] text-white p-6">
      <div className="bg-[#1a2332] text-white p-8 rounded-2xl shadow-xl flex flex-col items-center max-w-md border border-blue-600">
        <FaEnvelopeOpenText className="w-16 h-16 text-blue-400 mb-4" />
        <h2 className="text-2xl font-bold">Verify Your Email</h2>
        <p className="text-gray-300 text-center mt-2">
          We've sent a verification link to your email. Please check your inbox
          and verify your account.
        </p>
        <p className="text-blue-400 font-medium mt-4">
          Once verified, you can log in.
        </p>
        <ImSpinner2 className="w-8 h-8 animate-spin text-blue-400 mt-6" />
      </div>
    </div>
  );
};

export default MailVerification;
