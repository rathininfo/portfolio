import { FaFacebookF, FaTwitter, FaGoogle, FaYoutube, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8 px-4">
      {/* Title */}
      <h2 className="text-2xl font-bold">RNB Dev</h2>

      {/* Description */}
      <p className="text-gray-400 max-w-xl mx-auto mt-2">
        I am Rathindra Nath Biswas, a passionate web developer specializing in modern web technologies.  
        I build scalable, user-friendly web applications that deliver seamless digital experiences.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-4">
        <a href="https://web.facebook.com/rathininfo" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
          <FaFacebookF size={24} />
        </a>
        <a href="https://x.com/rathininfo" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
          <FaTwitter size={24} />
        </a>
        <a href="https://www.linkedin.com/in/rathininfo/" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm mt-4">&copy; {new Date().getFullYear()} RNB Dev. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
