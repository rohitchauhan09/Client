import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white py-6  shadow-md border-t">
      <div className="container mx-auto text-center">
        <p className="text-3xl font-semibold">Your Blog Platform</p>
        <p className="text-gray-400 text-lg mt-2">
          Stay connected and share your thoughts with the world.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-300">
            <FaGithub />
          </a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-300">
            <FaLinkedin />
          </a>
          <a href="#" className="text-blue-400 text-2xl hover:text-blue-300">
            <FaTwitter />
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-4">© 2025 Your Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
